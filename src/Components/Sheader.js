import React, { Component } from "react";

import "../App.css";
import logo from "../img/Kobo360.png";
class Sheader extends Component {
  render() {
    return (
      <div>
        <div className="header_logo">
          <img src={logo} style={{ height: 150 }} />
        </div>
        <div style={{ marginTop: 0 }}>
          <h1
            style={{ textAlign: "center", fontWeight: "bolder", fontSize: 40 }}
          >
            Kobo 360
          </h1>
        </div>
      </div>
    );
  }
}

export default Sheader;
