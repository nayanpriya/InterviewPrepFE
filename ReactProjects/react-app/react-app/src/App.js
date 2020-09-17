import React from "react";
import "./index.css";

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    };
    this.increaseCounter = this.increaseCounter.bind(this)
  }

  increaseCounter() {
    console.log(this)
    let counter = this.state.counter
    counter++
    console.log(counter)
    this.setState({ counter: counter })

  }

  printName() {
    return this.props.greetings;
  }

  render() {
    return (
      <div className="App">
        <div class="name">{this.printName()}</div>
        <button id="counter" onClick={this.increaseCounter}>
          Counter
        </button>
      </div>
    );
  }
}
