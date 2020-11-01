import React, { useState, useEffect } from 'react';
import * as cart from '../functions/cartHandler';

function loadItem(val) {
  fetch(val)
  .then(res => res.json())
  .then(
    (result) => {      
      console.log(result);
      document.getElementById("pokeShowName").innerHTML = result.name;
      let image = document.getElementById("pokeShowImage");
      
      image.innerHTML = "";
      
      if (result?.sprites?.default) {
        image.innerHTML = "<img class='w-50' src='" + result.sprites.default  + "' alt='" + result.name + "'/>";
      } else {
        image.innerHTML = "<img class='w-50' src='" + "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + result.id + ".png"  + "' alt='" + result.name + "'/>";
      }
      
      let content = document.getElementById("pokeContent");
      
      content.innerHTML = "";

      if (result.types?.length > 0) {
        content.innerHTML += "<h3 class='mb-2'>Types</h3>";
        content.innerHTML += "<ul class='list-group'>";
        for (const item of result.types) {
          content.innerHTML += "<li class='list-group-item text-capitalize'>" + item?.type?.name + "</li>"
        }
        content.innerHTML += "</ul>"
      }

      if (result.stats?.length > 0) {
        content.innerHTML += "<h3 class='mb-2'>Base Stats</h3>";
        content.innerHTML += "<ul class='list-group'>";
        for (const item of result.stats) {
          content.innerHTML += "<li class='list-group-item text-capitalize'>" + item?.stat?.name + " : " + item?.base_stat + "</li>"
        }
        content.innerHTML += "</ul>"
      }

      if (result.category) {
        content.innerHTML += "<h3 class='mb-2'>Category</h3><p class='text-capitalize'>" + result.category.name + "</p>";
      }     

      if (result.effect_entries?.length > 0) {
        content.innerHTML += "<h3 class='mb-2'>Effects</h3>";
        for (const item of result.effect_entries) {
          content.innerHTML += "<p>" + item.effect + "</p>"
        }
      }
      
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