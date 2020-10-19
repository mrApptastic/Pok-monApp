import React, { useState, useEffect } from 'react';
import "./fonts.css";
import "./style.css";

const element = <h1>Pokéshop</h1>;

function getPokeUrl(url) {
  let number = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');

  while (number.length < 3) {
    number = "0" + number;
  }

  return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + number + ".png";
}

function PokemonList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=20")
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
      <div>
        <div>{count}</div>
        <ul>
          {items.map(item => (
            <li key={item.name}>
              <span>{item.name}</span> 
              <img src={getPokeUrl(item.url)} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function Uha() {
  return (
    <ul>
      <li>
        Hej hej
      </li>
    </ul>
  );
}

export default function App() {
  return (    
    <div>
    {element}
    <PokemonList />
    <Uha />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

