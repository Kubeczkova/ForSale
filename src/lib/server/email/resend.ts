import { Resend } from 'resend';
import { RESEND_API_KEY, BASE_URL } from '$env/static/private';
import { config } from '$lib/config';
import { templates } from './render';

export const resend = new Resend(RESEND_API_KEY);

async function sendEmail(to: string, subject: string, html: string) {
	return resend.emails.send({
		from: config.email.from,
		to,
		// bcc:  config.email.bcc,
		subject,
		html,
	});
}

export async function sendVerificationEmail(to: string, token: string) {
	const verificationUrl = BASE_URL + '/potvrzeno/' + token;
	await sendEmail(
		to,
		`Ověřte svůj příhoz — ${config.property.name}`,
		templates.verifyBid(verificationUrl)
	);
}
