const cartKey = "pokeCart";

export function addItem(item) {
    const cart = getCart();

    if (cart.some(x => x?.item?.name === item?.name)) {
        
    }
}

export function getCart() {
    return sessionStorage.getItem(cartKey) ? JSON.parse(sessionStorage.getItem(cartKey)) : new Array();
}