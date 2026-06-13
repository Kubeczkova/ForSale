import { supabaseAdmin } from "$lib/server/supabase";
import { fail } from "@sveltejs/kit";
import { config } from "$lib/config";
import t from "$lib/i18n/cs.json";
import { sendVerificationEmail } from '$lib/server/email/resend';

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
		errors.name = t.form.errors.name;

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
		errors.email = t.form.errors.email;

	if (!phone || phone.length !== 9 || !/^\d{9}$/.test(phone))
		errors.phone = t.form.errors.phone;

	const price = Number(priceRaw);
	if (!priceRaw || isNaN(price) || price < 1)
		errors.price = t.form.errors.price;

	if (!terms)
		errors.terms = t.form.errors.terms;

	if (Object.keys(errors).length > 0) {
		return fail(400, {
			errors,
			values: { name, email, phone, isMax, price: formData.get('price') as string }
		});
	}

	const token = crypto.randomUUID()

	const { error } = await supabaseAdmin.from('bid').insert({
		name,
		email,
		phone,
		is_max: isMax,
		price,
		verification_token: token
	});

	if (error) {
		console.error('Supabase error:', error);
		return fail(500, {
			errors: { server: t.form.errors.server } as BidErrors,
			values: { name, email, phone, isMax, price: formData.get('price') as string }
		});
	}
	await sendVerificationEmail(email, token);

	return { success: true };
}

export async function verifyBid(token: string): Promise<{ success: boolean; error?: string }> {
	if (!token) return { success: false, error: t.verification.error_missing };

	// Compute expiry cutoff
	const expiryMs = config.auction.tokenExpiryMinutes * 60 * 1000;
	const cutoff   = new Date(Date.now() - expiryMs).toISOString();

	// First check if the token exists at all (expired or used)
	const { data: existing } = await supabaseAdmin
		.from('bid')
		.select('id, verified_at, created_at')
		.eq('verification_token', token)
		.single();

	if (!existing) {
		return { success: false, error: t.verification.error_default };
	}

	if (existing.verified_at) {
		return { success: false, error: t.verification.error_default };
	}

	if (existing.created_at < cutoff) {
		return { success: false, error: t.verification.error_expired };
	}

	// All checks passed — mark as verified
	const { error } = await supabaseAdmin
		.from('bid')
		.update({ verified_at: new Date().toISOString() })
		.eq('id', existing.id);

	if (error) {
		return { success: false, error: t.verification.error_default };
	}

	return { success: true };
}

export async function getMaxBid(): Promise<{ price: number } | null> {
	const { data, error } = await supabaseAdmin
		.from('bid')
		.select('price, is_max')
		.not('verified_at', 'is', null)
		.order('price', { ascending: false })
		.limit(2);

	// co se stane když je jen ejdna nabídka

	if (error) {
		if (error.code === 'PGRST116') return { price: config.auction.startingPrice };
		console.error('getMaxBid error:', error);
		return { price: config.auction.startingPrice };
	}

	if (!data[0].is_max) {
		return { price: data[0].price }
	}
	else {
		return { price: data[1].price + config.auction.minBidStep }
	}
}