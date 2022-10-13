import React from "react"
import { Link } from "react-router-dom";

class DollarButton extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonMessages: ["Let me get a dollar", "C'mon, son", "bruh", "I see your wallet", "what're you broke?", "who doesn't have one dollar?", "what're you even gonna spend that on?"],
      message: "Let me get a dollar"
    }

    this.nahButton = this.nahButton.bind(this);
  };


  nahButton() {
    let { buttonMessages } = this.state;
    this.setState({
      message: buttonMessages[Math.floor(Math.random() * buttonMessages.length)]
    })
  }

  render() {

    let { message } = this.state;
    return (
      <div className="payButton" >
        <Link to={"/pay-me"}>
          <button>{message}</button>
        </Link>
        <button onClick={this.nahButton}>Nahhh</button>
      </div>
    )
  }
}

export default(DollarButton)
