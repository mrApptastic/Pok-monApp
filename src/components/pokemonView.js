import React from 'react';

class PokemonView extends React.Component {
    render() {
      return <div>
      <h3 className="pokemonName">{this.props.name}</h3>
      <img className="pokemonPicture" src={this.props.image} alt={this.props.name} />
    </div>
    }
  }

  export default PokemonView;