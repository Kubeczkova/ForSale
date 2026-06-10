import { supabaseAdmin } from "$lib/server/supabase";
import { fail } from "@sveltejs/kit";

export type BidErrors = Partial<Record<'name' | 'email' | 'phone' | 'price' | 'terms' | 'server', string>>;

export async function createBid(request: Request) {
	const formData = await request.formData();

	const name  = (formData.get('name')  as string ?? '').trim();
	const email = (formData.get('email') as string ?? '').trim().toLowerCase();
	const phoneRaw = (formData.get('phone') as string ?? '').trim();
	// Strip formatting, remove Czech country code (420), keep last 9 digits
	const phoneDigits = phoneRaw.replace(/[\s\-+()]/g, '').replace(/^(00420|420)/, '');
	const phone = phoneDigits.slice(-9);
	const isMax = formData.get('is_max') === 'true';
	const priceRaw = (formData.get('price') as string ?? '').replace(/\s/g, '');
	const terms = formData.get('terms') === 'on';

	const errors: BidErrors = {};

	if (!name || name.length < 3)
		errors.name = 'Zadejte celé jméno a příjmení';

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
		errors.email = 'Zadejte platný e-mail';

	if (!phone || phone.length !== 9 || !/^\d{9}$/.test(phone))
		errors.phone = 'Zadejte platné telefonní číslo (9 číslic)';

	const price = Number(priceRaw);
	if (!priceRaw || isNaN(price) || price < 1)
		errors.price = 'Zadejte platnou částku příhozu';

	if (!terms)
		errors.terms = 'Musíte souhlasit s obchodními podmínkami';

	if (Object.keys(errors).length > 0) {
		return fail(400, {
			errors,
			values: { name, email, phone, isMax, price: formData.get('price') as string }
		});
	}

	const { error } = await supabaseAdmin.from('bids').insert({
		name,
		email,
		phone,
		is_max: isMax,
		price,
		verification_token: crypto.randomUUID()
	});

	if (error) {
		console.error('Supabase error:', error);
		return fail(500, {
			errors: { server: 'Nepodařilo se uložit nabídku. Zkuste to prosím znovu.' } as BidErrors,
			values: { name, email, phone, isMax, price: formData.get('price') as string }
		});
	}

	return { success: true };
}

export async function verifyBid(token: string): Promise<{ success: boolean; error?: string }> {
	if (!token) return { success: false, error: 'Chybí ověřovací token.' };

	const { data, error } = await supabaseAdmin
		.from('bids')
		.update({ is_verified: true, verified_at: new Date().toISOString() })
		.eq('verification_token', token)
		.eq('is_verified', false)   // prevent re-verifying
		.select('id')
		.single();

	if (error || !data) {
		console.error('verifyBid error:', error);
		return { success: false, error: 'Token je neplatný nebo již byl použit.' };
	}

	return { success: true };
}

export async function getMaxBit(): Promise<{ price: number } | null> {
	const { data, error } = await supabaseAdmin
		.from('bids')
		.select('price')
		.eq('is_verified', true)
		.order('price', { ascending: false })
		.limit(1)
		.single();

	if (error) {
		console.error('getMaxBid error:', error);
		return null;
	}

	return data ? { price: data.price } : null;
}