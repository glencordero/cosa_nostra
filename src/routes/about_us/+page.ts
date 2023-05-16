import { jobOpportunities } from '../../data/data.ts';

export const load = async () => {
    return {
       jobOpportunities: jobOpportunities
    };
  };
