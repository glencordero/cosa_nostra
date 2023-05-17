import { jobOpportunities } from '$lib/data/data.ts';

export const load = async () => {
    return {
       jobOpportunities: jobOpportunities
    };
  };
