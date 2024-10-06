import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "Product 1",
        price: 29.99,
        urlImage: "https://picsum.photos/200",
      },
      {
        id: 2,
        title: "Product 2",
        price: 19.99,
        urlImage: "https://picsum.photos/250",
      },
      {
        id: 3,
        title: "Product 3",
        price: 9.99,
        urlImage: "https://picsum.photos/300",
      },
      {
        id: 4,
        title: "Product 4",
        price: 49.99,
        urlImage: "https://picsum.photos/350",
      },
      {
        id: 5,
        title: "Product 5",
        price: 80.99,
        urlImage: "https://picsum.photos/300",
      },
    ],
  };

  render() {
    return (
      <>
        <Navbar totalItems={this.state.products.length} />
        <Products products={this.state.products} />
        <Cart />
      </>
    );
  }
}

export default App;
