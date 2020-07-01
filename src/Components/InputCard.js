import React, { Component } from "react";
import { Paper, Button } from "@material-ui/core";
class InputCard extends Component {
  render() {
    return (
      <div className={this.props.label}>
        <div className="input_name">Full Name</div>
        <input className="input_field" placeholder="John"></input>
        <div className="input_name">Work Email Address</div>
        <input className="input_field" placeholder="John@gmail.com"></input>
        <div className="input_name">Your Company Name</div>
        <input className="input_field" placeholder="AmazingSoftware"></input>
        <div className="input_name">
          Phone Number
          <span
            style={{
              fontSize: 12,
              color: "grey",
              fontWeight: "normal",
              marginLeft: 4,
            }}
          >
            (Optional)
          </span>
        </div>
        <input className="input_field" placeholder="620-216-5155"></input>

        <div className="button">Request a demo</div>
      </div>
    );
  }
}

export default InputCard;
