import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "../App.css";
import logo from "../img/Kobo360.png";
class Sheader extends Component {
  render() {
    return (
      <div>
        <div className="header_logo">
          <img src={logo} style={{ height: 150 }} />
        </div>
        <div style={{ marginTop: 0, marginLeft: 30 }}>
          <Typography
            variant="h2"
            component="h3"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            KOBO 360
          </Typography>
        </div>
      </div>
    );
  }
}

export default Sheader;
