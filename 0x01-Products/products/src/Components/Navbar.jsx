import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Navbar extends Component {
  render() {
    const { totalItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Products
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <span className="badge text-bg-primary">{totalItems}</span>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
