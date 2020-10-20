import React from 'react';

class Header extends React.Component {
    render() {
      return <header class="jumbotron">
          <h1>{this.props.title}</h1><br/>
          <h3>{this.props.extra}</h3>
      </header>
    }
  }

  export default Header;