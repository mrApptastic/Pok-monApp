import React from 'react';
import { captainCanvas } from '../functions/captainCanvas';

setTimeout(() => {
  const canvas = new captainCanvas("pokeCanvas", "pokeTools");
}, 0);

class PokePaint extends React.Component {
    render() {
      return <div id="pokePaint" className="container-fluid pokeSection">
            <h2>PokéPaint</h2>
            <div className="row">
                <div className="col-sm-2">
                    <div id="pokeTools"></div>
                </div>
                <div className="col-sm-10" style={{ overflow: 'hidden' }}>
                    <canvas id="pokeCanvas"></canvas>
                </div>
            </div>
          </div>
    }
  }

  export default PokePaint;