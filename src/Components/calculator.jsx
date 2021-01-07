import React, { Component } from "react";
import RollInput from "./rollInput";

class Calculator extends Component {
  state = {
    rolls: new Array(7).fill("")
  };

  handleRollChange = e => {
    const index = parseInt(e.target.id);
    const newRolls = [...this.state.rolls];
    newRolls[index] = e.target.value;
    this.setState({ rolls: newRolls });
    if (index < 6) {
      this[`roll-${index + 1}`].focus();
    }
  };

  render() {
    const { rolls } = this.state;
    return rolls.map((roll, index) => {
      return (
        // <input
        //   type="text"
        //   vallue={rolls[index]}
        //   ref={input => (this[`roll-${index}`] = input)}
        //   onChange={this.handleRollChange}
        //   key={index}
        //   id={index}
        // />
        <RollInput
          rolls={rolls}
          index={index}
          roll={roll}
          onChange={this.handleRollChange}
          that={this}
        ></RollInput>
      );
    });

    // <>
    //   <h1>Calculator</h1>
    //   <input
    //     name="sad"
    //     id="asas"
    //     type="text"
    //     value="work pending"
    //     className="form-control col-2"
    //   />
    // </>
  }
}

export default Calculator;
