import React from 'react';

class PokemonView extends React.Component {

  handleClick(val) {
    alert(val);
  }

  render() {
      return <div onClick={() => { this.handleClick(this.props.name) }}>
      <h3 className="pokemonName">{this.props.name}</h3>
      <img className="pokemonPicture" src={this.props.image} alt={this.props.name} />
    </div>
    }
  }

  export default PokemonView;