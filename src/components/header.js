import React from 'react';

class Header extends React.Component {
    render() {
      return <div class="jumbotron">
          <h1>{this.props.title}</h1><br/>
          <h3>{this.props.extra}</h3>
      </div>
    }
  }

  export default Header;