import React, { Component } from "react";
import ReactDom from "react-dom/client";

import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { value: 10, id: 5 },
      { value: 0, id: 6 },
      { value: 3, id: 7 },
      { value: 16, id: 8 },
    ],
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
