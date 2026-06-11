import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { config } from '$lib/config';

export const resend = new Resend(RESEND_API_KEY);

export async function sendVerificationEmail(to: string, verificationUrl: string) {
	return resend.emails.send({
		from:    config.email.from,
		to,
		subject: 'Potvrďte váš příhoz',
		html:    `<p>Klikněte <a href="${verificationUrl}">zde</a> pro potvrzení příhozu. Odkaz platí ${config.auction.tokenExpiryMinutes} minut.</p>`,
	});
}
