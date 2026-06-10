import type { PageServerLoad } from './$types';
import { verifyBid } from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	return await verifyBid(params.token);
};
