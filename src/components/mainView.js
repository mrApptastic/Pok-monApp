import React from 'react';
import PokemonList from "./pokemonList";
import ItemsList from './itemsList';
import PokePong from './pokePong';
import PokePaint from './pokePaint';
import Cart from './cart';
import PokeDetails from "./pokeDetails";

class MainView extends React.Component {
    render() {
      return <div>
        {/* <PokemonList />
        <ItemsList /> */}
        <PokePong />
        <PokePaint />
        <Cart />
        <PokeDetails />
      </div>
    }
  }

  export default MainView;