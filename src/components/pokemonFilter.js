import React from 'react';


class PokemonFilter extends React.Component {
  constructor (props) {
    super(props);
    this.filterList = this.filterList.bind(this);
  }

  filterList() {
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

  render() {
      return <div className="filterBox row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <input id="pokeySearch" className="form-control" type="text" placeholder="PokéFilter" />
        </div>
        <div className="col-md-2">
          <button className="btn btn-success" type="button" onClick={this.filterList}>
            Filter
          </button>
        </div>     
        <div className="col-md-2"></div>
      </div>
    }
  }

  export default PokemonFilter;