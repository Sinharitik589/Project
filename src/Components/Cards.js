import React from "react";
import "../App.css";
import { Paper, Hidden } from "@material-ui/core";

const Cards = (props) => {
  return (
    <div>
      <Paper elevation={3}>
        <div style={{ height: 100 }}>
          <div className="cards">
            <div style={{ flex: 1 }}>
              <img src={props.image} alt="logo" style={{ height: 100 }} />
            </div>
            <div style={{ flex: 6 }}>
              <h3>{props.post}</h3>
              <h4>{props.company}</h4>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Cards;
