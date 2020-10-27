import React from 'react';

class Navigation extends React.Component {
    render() {
      return <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <a className="navbar-brand" href="#">PokéShop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
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
          <li className="nav-item">
            <a className="nav-link" href="#cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span style={{marginLeft: '8px'}} >Cart</span>              
            </a>
          </li>  
        </ul>
      </div>  
    </nav>
    }
  }

  export default Navigation;