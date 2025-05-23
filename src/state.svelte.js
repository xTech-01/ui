import { browser } from '$app/environment';

export const cart = $state({
    name: 'cart',
});

export const cartId = $state({
    val: browser ? window.localStorage.getItem('cartId') : ''
})


export const showCart = $state({
    bool:false
});

export const cartTotalQuantity = $state({
    val: browser ? window.localStorage.getItem('cartTotalQuantity') : '',
    // val: 1,
})

if (browser) {
    cartId.val = window.localStorage.cartId
}

export const loadCart = async() => {
    try {
        // const res = await req(cartId);
    } catch (error) {
        console.error(error);
    }
};

export const addToCart = async (note = "") => {
    await loadCart();
    showCart.bool = true;
}