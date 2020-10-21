import React, { useState, useEffect } from 'react';
import PokemonFilter from "./pokemonFilter";
import PokemonView from "./pokemonView";

function getPokeUrl(url) {
  let number = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');

  while (number.length < 3) {
    number = "0" + number;
  }

  return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + number + ".png";
}

function PokemonListView() {
  const pagesize = 893;
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
    return <div>Loading...</div>;
  } else {
    return (
      <section className="container-fluid">
        <PokemonFilter />
        <div className="row">
          {items.map(item => (
            <div key={item.name} className="pokeyItem col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <PokemonView name={item.name} image={getPokeUrl(item.url)} />
            </div>         
            ))}
        </div>
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