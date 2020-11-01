import React from 'react';
import { rectAngular } from '../functions/rectAngular';

setTimeout(() => {
  const pong = new rectAngular("pokePong", window.innerWidth, window.innerHeight, "PokéPong", "#EF5350", "30px 'Pokemon'");
}, 0);

class PokePong extends React.Component {
    render() {
      return <canvas id="pokePong"></canvas>
    }
  }

  export default PokePong;