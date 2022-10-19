import React, { Component } from 'react';



class Nav extends Component {
  render() {
    return(
      <nav className="navbar bg-dark">
      <div className="container-fluid">
        <div className="container">
        <a className="navbar-brand navbar-dark " href="#">
          <i class={this.props.icon}></i> Git
        </a>
        </div>
      </div>
    </nav>
)
  }
}

export default Nav