
export const config = {

	// ── Property ──────────────────────────────────────────────────────────────
	property: {
		name:        'Hnojník 383',
		address:     'Hnojník 383',
		location:    'Hnojník, okr. Frýdek-Místek',
		disposition: '?+1 · ?? m²',
		landArea:    '??? m²',
	},

	// ── Seller / owner ────────────────────────────────────────────────────────
	seller: {
		name:  'Jiří Kubeczka',
		photo: '',                      // e.g. '/images/prodavajici.jpg'
		role:  'Majitel nemovitosti',
		email: 'info@myfilm.cz',
		phone: '606 787 927',
	},

	// ── Auction rules ─────────────────────────────────────────────────────────
	auction: {
		/** Displayed as the starting bid when no verified bid exist yet */
		startingPrice:       5_000_000,
		/** Minimum step added on top of current highest bid in the form */
		minBidStep:          10_000,
		/** Minutes after which an unconfirmed bid (verification link) expires */
		tokenExpiryMinutes:  30,
	},

	// ── E-mail (Resend) ───────────────────────────────────────────────────────
	email: {
		from:       'na-prodej@resend.dev',
		bcc: 		'info@myfilm.cz'
	},

} as const;

