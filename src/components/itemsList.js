import React, { useState, useEffect } from 'react';
import PokeSpinner from "./pokeSpinner";
import PokemonView from "./pokemonView";

function getItemUrl(name) {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + name + ".png";
}

function ItemsListView() {
  const pagesize = 954;
  const offset = 0;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const excludeList = new Array();

  excludeList.push("hm08");

  for (let i = 0; i <= 100; i++) {
    let j = i.toString();

    while (j.length < 2) {
      j = "0" + j;
    }

    excludeList.push("tm" + j);
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/item?limit=" + pagesize+ "&offset=" + offset)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);      
          let items = result.results;
          items = items.filter(x => excludeList.indexOf(x.name) === -1).sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });

          setItems(items);
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
      <section id="itemList" className="container-fluid pokeSection">
        <div className="row">
          {items.map(item => (
            <div key={item.name} className="pokeyItem col-lg-2 col-md-3 col-sm-4 col-6">              
              <PokemonView name={item.name} url={item.url} image={getItemUrl(item.name)} />
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