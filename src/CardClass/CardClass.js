import React from "react";
import "./CardClass.css";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ ...this.state, seconds: this.state.seconds + 1 });
    }, 1000);
  }

  handleClick = () => {
    this.setState({ ...this.state, clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="card">
        <p>You've clicked {this.state.clicks} times</p>
        <p>{this.state.seconds}seconds have passed</p>
        <button onClick={this.handleClick}>Add click</button>
      </div>
    );
  }
}

export default CardClass;
