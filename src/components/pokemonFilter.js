import React from 'react';

function filterList() {
  const val = document.getElementById("pokeySearch").value.toLowerCase();
  const list = document.getElementsByClassName("pokeyItem");
  for (const item of list) {
    const name = item.getElementsByClassName("pokemonName")[0].innerHTML.toLowerCase();

    if (val.length === 0 || name.indexOf(val) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

class PokemonFilter extends React.Component {
  handleClick() {
    filterList();
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      filterList();
    }
  }

  render() {
      return <div className="filterBox row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <input id="pokeySearch" className="form-control" type="text" onKeyUp={this.handleKeyUp} placeholder="PokéFilter" />
        </div>
        <div className="col-md-2">
          <button className="btn pokeyButton" type="button" onClick={this.handleClick}>
            Filter
          </button>
        </div>     
        <div className="col-md-2"></div>
      </div>
    }
  }

  export default PokemonFilter;