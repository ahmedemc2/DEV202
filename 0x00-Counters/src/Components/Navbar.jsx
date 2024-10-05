import React, { Component } from "react";
import ReactDOM from "react-dom";

class Navbar extends Component {
  render() {
    const { totalItems } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar <span className="badge text-bg-primary">{totalItems}</span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
