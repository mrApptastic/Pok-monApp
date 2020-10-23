import React, { useState, useEffect } from 'react';
import PokeSpinner from "./pokeSpinner";

function ItemsListView() {
  const pagesize = 954;
  const offset = 0;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/item?limit=" + pagesize+ "&offset=" + offset)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);          
          setItems(result.results);
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
    return <PokeSpinner text="Loading Items" />;
  } else {
    return (
      <section className="container-fluid">
        <div className="row">
          {items.map(item => (
            <div key={item.name} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <h3 className="pokemonName">{item.name}</h3>
              <img className="pokemonPicture" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/' + item.name + '.png'} alt={item.name} />
          </div>        
          ))}
        </div>
      </section>
    );
  }
}

class ItemsList extends React.Component {

    render() {
      return <ItemsListView />
    }
  }

export default ItemsList;