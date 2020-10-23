import React, { useState, useEffect } from 'react';
import PokemonFilter from "./pokemonFilter";
import PokeSpinner from "./pokeSpinner";
import PokemonView from "./pokemonView";
import PokeDetails from "./pokeDetails";

function getPokeUrl(url) {
  let number = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');

  // while (number.length < 3) {
  //   number = "0" + number;
  // }

  // "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" 
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + number + ".png";
}

function PokemonListView() {
  const pagesize = 721;
  const offset = 0;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + pagesize+ "&offset=" + offset)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);          
          setItems(result.results);
          setCount(result.count);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <PokeSpinner text="Loading Pokémon" />;
  } else {
    return (
      <section className="container-fluid">
        <PokemonFilter />
        <div className="row">
          {items.map(item => (
            <div key={item.name} className="pokeyItem col-lg-2 col-md-3 col-sm-4 col-6">
                <PokemonView name={item.name} url={item.url} image={getPokeUrl(item.url)} />
            </div>         
            ))}
        </div>
        <PokeDetails />
      </section>
    );
  }
}

class PokemonList extends React.Component {

    render() {
      return <PokemonListView />
    }
  }

export default PokemonList;