import React, { useState, useEffect } from 'react';
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/style.css";
import "./styles/animations.css";
import Header from "./components/header";
import PokemonList from "./components/pokemonList";
import ItemsList from './components/itemsList';
import BerriesList from './components/berriesList';

export default function App() {
  return (    
    <div>
    <Header title="PokéShop" extra="- gotta buy 'em all!" />    
    <PokemonList />
    <ItemsList />
    <BerriesList />
    </div>
  );
}

