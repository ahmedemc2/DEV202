import React, { Component } from "react";
import ReactDom from "react-dom/client";

import Counter from "./Counter";

class Counters extends Component {
  state = {};
  render() {
    let { counters } = this.props;

    return (
      <main className="container">
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </main>
    );
  }
}

export default Counters;
