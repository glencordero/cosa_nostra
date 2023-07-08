import { writable } from "svelte/store";

const cart = []

function createCart() {
    const { subscribe, set, update } = writable(cart);

    return {
        subscribe,
        add: (service) => update(cart => {
            return [...cart, service]
          })
    };
}

export const cartStore = createCart();  





