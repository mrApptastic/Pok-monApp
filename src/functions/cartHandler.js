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

export function getCount(cart) {
    let count = 0;

    for (const item of cart) {
        count += item.count;
    }

    return count;
}

export function buyEmAll() {
    setCart(new Array);
    updateCartViews();
    const price = Math.ceil(Math.random() * 100000);
    alert(price + " PokéDollars have been withdrawn from your account. Happy catching! See you next time at Pokéshop!");
}

export function updateCartViews() {
    const count = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const buyButton = document.getElementById("buyEmAll");
    const cart = getCart();

    if (cart.length > 0) {
        count.innerHTML = getCount(cart);
        cartItems.innerHTML = "<ul class='list-group'>";
        for (const item of cart) {
            cartItems.innerHTML += "<li class='list-group-item text-capitalize'>" + item.count  + " " + item.name + (item.count > 1 ? "s" : "") + "</li>"
        }
        cartItems.innerHTML += "</ul>"
        buyButton.style.display = "block";

    } else {
        count.innerHTML = "";
        cartItems.innerHTML = "<h3 class='text-center mb-2'>The cart is empty :-(</h3>";
        buyButton.style.display = "none";
    }
}