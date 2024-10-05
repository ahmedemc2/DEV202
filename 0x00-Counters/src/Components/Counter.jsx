import React, { Component, Fragment } from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {};

  setSpanClass = () => {
    let count = this.props.counter.value;
    let classes = "badge text-bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    let { counter } = this.props;

    return (
      <div className="row g-2 align-items-center">
        <div className="col-1">
          <span className={this.setSpanClass()}>
            {counter.value === 0 ? "Zero" : counter.value}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={() => this.props.onDecrement(counter)}
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={() => this.props.onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-sm btn-danger m-2"
            onClick={() => this.props.onDelete(counter)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
