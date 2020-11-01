import React, { useState, useEffect } from 'react';
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/style.css";
import "./styles/animations.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import MainView from "./components/mainView";
import * as cart from './functions/cartHandler';

setTimeout(() => {
  cart.updateCartViews();
}, 0);

function MainBox() {
  const [step, setStep] = useState(0);
  const stepper = <input type="text" onChange={(e) => setStep(e.target.value)} />

  switch (step) {
    case 1: return <h3>Hej lille tulipan!</h3>
    default: return <div>
        <MainView />
      </div>
  }
}

export default function App() {
  return (    
    <div>
      <Navigation></Navigation>
      <Header title="PokéShop" extra="- gotta buy 'em all!" />   
      <MainBox/> 
      <Footer />      
    </div>
  );
}

