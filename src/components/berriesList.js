import React, { useState, useEffect } from 'react';
import PokeSpinner from "./pokeSpinner";

function BerriesListView() {
  const pagesize = 64;
  const offset = 0;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/berry?limit=" + pagesize+ "&offset=" + offset)
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
    return <PokeSpinner text="Loading Berries" />;
  } else {
    return (
      <section className="container-fluid">
        <div className="row">
            <ul>
                {items.map(item => (
                <li key={item.name}>
                    {item.name}
                </li>         
                ))}
            </ul>
        </div>
      </section>
    );
  }
}

class BerriesList extends React.Component {

    render() {
      return <BerriesListView />
    }
  }

export default BerriesList;