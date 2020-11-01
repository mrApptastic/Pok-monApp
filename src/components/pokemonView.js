import React, { useState, useEffect } from 'react';
import * as cart from '../functions/cartHandler';

function loadItem(val) {
  fetch(val)
  .then(res => res.json())
  .then(
    (result) => {      
      document.getElementById("pokeShowName").innerHTML = result.name;
      
      let content = document.getElementById("pokeContent");
      
      content.innerHTML = "";
      
      document.getElementById("pokeShow").click();

    },
    (error) => {
      console.log(error);
    }
  )
}

class PokemonView extends React.Component {  

  addToCart(val) {
    cart.addItem(val);
  }

  handleClick(val) {
    loadItem(val);
  }

  render() {
      return <div>
      <button className="btn pokeyButton btn-sm pull-right" onClick={() => { this.addToCart(this.props) }}>Buy</button>     
      <h3 className="pokemonName text-center">{this.props.name}</h3>
      <img className="pokemonPicture" src={this.props.image} alt={this.props.name} title={"Click for " + this.props.name.toUpperCase() + " details"} onClick={() => { this.handleClick(this.props.url) }} />
    </div>
    }
  }

  export default PokemonView;