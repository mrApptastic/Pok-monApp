import React from 'react';

class Footer extends React.Component {
    render() {
      return <div>
        <input id="pokeySearch" className="form-control" type="text" placeholder="PokéFilter" />
        <button className="button" type="button" onClick={this.filterList}>Spank the monkey!</button>
      </div>
    }
  }

  export default Footer;