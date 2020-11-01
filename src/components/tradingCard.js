import React from 'react';

const cardBody = <div class="infobox">
<p class="funfact"></p>
<ul class="list-info">
    <li><span></span></li>
    <li><span></span></li>
    <li><span></span></li>
    <li><span></span></li>
</ul>
<p></p>
</div>;

class TradingCard extends React.Component {
  render() {
    return <div>
        <h3 className="pokemonName">{this.props.name}</h3>
        <img className="pokemonPicture" src={this.props.image} alt={this.props.name} />
        {this.cardBody}
      </div>
  }
}

export default TradingCard;