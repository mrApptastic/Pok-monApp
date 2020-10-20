import React, { useState, useEffect } from 'react';
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/style.css";
import PokemonList from "./components/pokemonList";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (    
    <div>
    <Header title="PokéShop" extra="- gotta buy 'em all!" />
    <PokemonList />
    <Footer />    
    </div>
  );
}

