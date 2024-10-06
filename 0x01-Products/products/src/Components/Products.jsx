import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products } = this.props;

    return (
      <main className="m-4 row gap-2 justify-content-center">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </main>
    );
  }
}

export default Products;
