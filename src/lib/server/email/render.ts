import { config } from '$lib/config';
import verifyBidHtmlRaw from './template/verify-bid.html?raw';

const verifyBidHtml = verifyBidHtmlRaw as string;

const defaults: Record<string, string> = {
	'{{PROPERTY_NAME}}':  config.property.name,
	'{{EXPIRY_MINUTES}}': String(config.auction.tokenExpiryMinutes),
};

function render(html: string, vars: Record<string, string> = {}): string {
	return Object.entries({ ...defaults, ...vars })
		.reduce((t, [k, v]) => t.replaceAll(k, v), html);
}

export const templates = {
	verifyBid: (verificationUrl: string) =>
		render(verifyBidHtml, { '{{VERIFICATION_URL}}': verificationUrl }),
};
