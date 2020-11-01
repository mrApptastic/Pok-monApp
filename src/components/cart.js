import React from 'react';

class Cart extends React.Component {
    render() {
      return <section id="cart" className="container pokeSection">
        <h2>Cart:</h2>
        <div id="cartItems"></div>        
      </section>
    }
  }

  export default Cart;