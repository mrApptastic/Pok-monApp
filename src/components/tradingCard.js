import React from 'react';

const cardBody = <div class="infobox">
<p class="funfact">While extremely agile, sea otters are slow swimmers. They spend the majority of their lives on their backs, only flipping over onto their fronts when greater speed is required.</p>
<ul class="list-info">
    <li><span>Scientific Name</span>: Enhydra lutris</li>
    <li><span>Average Length</span>: 4 Feet</li>
    <li><span>Average Lifespan</span>: 10-12 Years</li>
    <li><span>Habitat</span>: Coasts of the Pacific Ocean in North America and Asia</li>
</ul>
<p>The sea otter is an aquatic member of the weasel family found along the coasts of the Pacific Ocean in North America and Asia. Sea otters often float on their backs at the water's surface.</p>
</div>;

class TradingCard extends React.Component {
  render() {
    return <div>
        <h3 class="pokemonName">{this.props.name}</h3>
        <img class="pokemonPicture" src={this.props.image} alt={this.props.name} />
      </div>
  }
}

export default TradingCard;