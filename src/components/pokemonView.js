import React, { useState, useEffect } from 'react';

function loadItem(val) {
  fetch(val)
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      document.getElementById("pokeShowName").innerHTML = result.name;
      document.getElementById("pokeShow").click();

    },
    (error) => {
      console.log(error);
    }
  )
}

class PokemonView extends React.Component {  

  handleClick(val) {
    loadItem(val);
  }

  render() {
      return <div onClick={() => { this.handleClick(this.props.url) }}>
      <h3 className="pokemonName">{this.props.name}</h3>
      <img className="pokemonPicture" src={this.props.image} alt={this.props.name} />
    </div>
    }
  }

  export default PokemonView;