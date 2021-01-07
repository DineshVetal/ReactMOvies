import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // constructor() {
  //super();
  //tthis.handleIncreement = this.handleIncreement.bind(this);
  // }

  state = {
    counterArray: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreement = counterObj => {
    const counterArray = [...this.state.counterArray];
    const index = counterArray.indexOf(counterObj);
    counterArray[index] = { ...counterObj };
    counterArray[index].value++;
    this.setState({ counterArray });
  };
  handleSub = counterObj => {
    const counterArray = [...this.state.counterArray];
    const index = counterArray.indexOf(counterObj);
    counterArray[index] = { ...counterObj };
    counterArray[index].value--;
    this.setState({ counterArray });
  };
  handleReset = () => {
    const counterArray = this.state.counterArray.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counterArray });
  };

  handleDelete = counterObj => {
    const counterArray = [...this.state.counterArray];
    const index = counterArray.indexOf(counterObj);
    counterArray[index] = { ...counterObj };
    counterArray.splice(index, 1);
    this.setState({ counterArray });
  };

  render() {
    const styles = { fontSize: 30 };
    return (
      <div>
        <button
          className="btn btn-warning m-2"
          style={styles}
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
        {this.state.counterArray.map(counter => (
          <Counter
            key={counter.id}
            counterObj={counter}
            handleAdd={this.handleIncreement}
            handleSub={this.handleSub}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
