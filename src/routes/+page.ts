import { myAddress } from '../lib/data/data.ts';

export const load = async () => {
    return {
       myAddress: myAddress
    };
  };
