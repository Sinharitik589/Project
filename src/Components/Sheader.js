import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "../App.css";
import logo from "../img/Kobo360.png";
class Sheader extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <div className="header_logo">
          <img src={logo} alt="logo" style={{ height: 150 }} />
        </div>
        <div
          style={{
            marginTop: 0,
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Typography
            variant="h2"
            component="h3"
            gutterBottom
            style={{
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            KOBO 360
          </Typography>
        </div>
      </div>
    );
  }
}

export default Sheader;
