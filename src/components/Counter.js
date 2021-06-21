import React from "react";
import "../styles/About.css"

export default class Counter extends React.Component {
  state = {
    count: 0,
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
}

  componentWillUnmount() {
    console.log("unmounting...");
  }

  componentDidMount() {
    console.log("mounting...");
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    var {items } = this.state;
    return (
      <div>
        <p>count: {this.state.count}</p>
        <p>count: {items[1].id}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}