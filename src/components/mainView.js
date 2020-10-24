import React from 'react';
import PokemonList from "./pokemonList";
import ItemsList from './itemsList';

class MainView extends React.Component {
    render() {
      return <div>
        <PokemonList />
        <ItemsList />
      </div>
    }
  }

  export default MainView;