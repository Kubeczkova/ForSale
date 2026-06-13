import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from '$lib/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

function load(name: string): string {
	return readFileSync(join(__dirname, 'template', name), 'utf-8');
}

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
		render(load('verify-bid.html'), { '{{VERIFICATION_URL}}': verificationUrl }),
};
