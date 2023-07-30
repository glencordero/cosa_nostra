import { getInitialPolls } from '$lib/server/db';
export const load = (() => {
    const tracks = getInitialPolls();
    return {
        tracks
    };
});