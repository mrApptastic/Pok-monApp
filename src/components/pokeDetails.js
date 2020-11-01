import React from 'react';
import * as cart from '../functions/cartHandler';


class PokeDetails extends React.Component {
  handleClick() {
    cart.addItem({
      name: document.getElementById("pokeShowName").innerHTML.toLowerCase()
    })
  }

    render() {
      return <div>        
        <input id="pokeShow" type="hidden" data-toggle="modal" data-target="#pokeShowModal" />
        <div id="pokeShowModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 id="pokeShowName" className="modal-title text-capitalize text-center"></h2>
                    <div className="w-100" id="pokeShowImage"></div> 
                    <button type="button" className="close" data-dismiss="modal">&times;</button>                   
                </div>
                <div id="pokeContent" className="modal-body"></div>
                <div className="modal-footer">
                    <button className="btn btn-lg pokeyButton" type="button" data-dismiss="modal" onClick={this.handleClick}>Buy</button>
                </div>
                </div>
            </div>
        </div>
      </div>
    }
  }

  export default PokeDetails;


