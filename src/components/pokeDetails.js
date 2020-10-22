import React from 'react';

class PokeDetails extends React.Component {
    render() {
      return <div>        
        <input id="pokeShow" type="hidden" data-toggle="modal" data-target="#pokeShowModal" />
        <div id="pokeShowModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 id="pokeShowName" className="modal-title"></h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>                    
                </div>
                <div className="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
      </div>
    }
  }

  export default PokeDetails;


