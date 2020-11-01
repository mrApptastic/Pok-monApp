const cartKey = "pokeCart";

export function addItem(item) {
    const cart = getCart();

    if (cart.some(x => x.name === item.name)) {
        cart.find(x => x.name === item.name).count += 1;
    } else {
        const newItem = {
            name: item.name,
            count : 1
        }
        cart.push(newItem);
    }

    setCart(cart);
    updateCartViews();
}

export function getCart() {
    const cartStorage = sessionStorage.getItem(cartKey);
    if (!cartStorage) {
        return new Array();
    } else {
        try {
            return JSON.parse(sessionStorage.getItem(cartKey));
        } catch (e) {
            console.log(e);
            return new Array();
        }
    }
}

export function setCart(cart) {
    sessionStorage.setItem(cartKey, JSON.stringify(cart));
}

export function updateCartViews() {
    const count = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cart = getCart();
    console.log(cart);

    if (cart.length > 0) {
        count.innerHTML = cart.length;
        cartItems.innerHTML = "<ul>";
        for (const item of cart) {
            cartItems.innerHTML += "<li>" + item.count  + " " + item.name + (item.count > 1 ? "s" : "") + "</li>"
        }
        cartItems.innerHTML += "</ul>"

    } else {
        count.innerHTML = "";
        cartItems.innerHTML = "";
    }
}