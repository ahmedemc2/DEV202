import { Component } from "react";
import Counters from "./Components/Counters";
import Navbar from "./Components/Navbar";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    counters: [
      { value: 2, id: 5 },
      { value: 0, id: 6 },
      { value: 4, id: 7 },
      { value: 6, id: 8 },
    ],
  };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   for (const c of counters) {
  //     if (counter.id === c.id) {
  //       c.value++;
  //     }
  //   }
  //   this.setState({ counters });
  // };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    const idx = this.state.counters.findIndex((c) => c.id === counter.id);
    counters[idx].value++;
    this.setState({ counters });
  };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   for (const c of counters) {
  //     if (counter.id === c.id) {
  //       c.value--;
  //     }
  //   }
  //   this.setState({ counters });
  // };

  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    const idx = this.state.counters.findIndex((c) => c.id === counter.id);
    counters[idx].value--;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    for (const c of counters) {
      c.value = 0;
    }
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <>
        <Navbar totalItems={counters.length} />
        <Counters
          counters={counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
