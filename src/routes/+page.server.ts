import type {Actions, PageServerLoad} from './$types';
import {createBid, getMaxBit} from '$lib/server/database';

export const actions: Actions = {
	bid: async ({ request }) => {
		return await createBid(request);
	}
};

export const load: PageServerLoad = async () => {
	return await getMaxBit();
}
