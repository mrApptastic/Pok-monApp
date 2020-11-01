import React from 'react';
import * as cart from '../functions/cartHandler';

class Cart extends React.Component {

    render() {
      return <section id="cart" className="container pokeSection">
        <h2>Cart:</h2>
        <div id="cartItems"></div>
        <button id="buyEmAll" className="btn btn-lg pokeyButton mt-2 mb-2" onClick={() => cart.buyEmAll()}>Buy 'em all!</button>
      </section>
    }
  }

  export default Cart;