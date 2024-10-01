import React, { Component, Fragment } from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: this.props.count,
  };

  decrement = () => {
    let { count } = this.state;
    count--;
    this.setState({ count });
  };

  increment = () => {
    {
      this.setState({ count: this.state.count + 1 });
    }
  };

  setSpanClass = () => {
    let { count } = this.state;
    let classes = "badge text-bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    let { count } = this.state;

    return (
      <div className="row g-2 align-items-center">
        <div className="col-1">
          <span className={this.setSpanClass()}>
            {count === 0 ? "Zero" : count}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={this.decrement}
            disabled={count === 0}
          >
            -
          </button>
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={this.increment}
          >
            +
          </button>
          <button className="btn btn-sm btn-danger m-2">Delete</button>
        </div>
      </div>
    );
  }
}

export default Counter;
