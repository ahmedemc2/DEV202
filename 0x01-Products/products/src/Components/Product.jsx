import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Product extends Component {
  state = {};
  render() {
    const { product } = this.props;

    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
