import React, { useState, useEffect } from 'react';
import "./styles/fonts.css";
import "./styles/style.css";
import TradingCard from "./components/tradingCard";



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
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
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
        {items.map(item => (
          <TradingCard name={item.name} image={getPokeUrl(item.url)} />
          ))}        
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

