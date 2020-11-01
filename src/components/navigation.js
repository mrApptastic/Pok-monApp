import React from 'react';
import PokemonFilter from "./pokemonFilter";

class Navigation extends React.Component {
    render() {
      return <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <a className="navbar-brand" href="#">PokéShop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#pokemonList">Pokémon</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#itemList">Items</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pokePong">PokéPong</a>
          </li>    
          <li className="nav-item">
            <a className="nav-link" href="#pokePaint">PokéPainter</a>
          </li>   
        </ul>
        <ul className="navbar-nav ml-auto">
          <li>
            <PokemonFilter />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span id="cartCount"></span>
              <span style={{marginLeft: '8px'}} >Cart</span>              
            </a>
          </li>  
        </ul>
      </div>  
    </nav>
    }
  }

  export default Navigation;