import React from "react";
import "../App.css";
import { Paper, Grid } from "@material-ui/core";

const Cards = (props) => {
  return (
    <div>
      <Paper elevation={3}>
        <div className="cards">
          <div style={{ flex: 1 }}>
            <img src={props.image} style={{ width: 50, marginTop: 20 }} />
          </div>
          <div style={{ flex: 6 }}>
            <div style={{ flex: 1 }}>
              <h3>{props.post}</h3>
              <h4 style={{ fontWeight: "lighter" }}>{props.company}</h4>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Cards;
