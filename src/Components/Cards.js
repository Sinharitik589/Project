import React from "react";
import "../App.css";
import { Paper, Hidden } from "@material-ui/core";

const Cards = (props) => {
  return (
    <div>
      <Paper variant="outlined">
        {
          <div
            className="cards"
            style={{
              height: 80,
              paddingTop: 0,
              paddingLeft: 10,
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={props.image} style={{ height: 60, margin: 10 }} />
            </div>
            <div
              style={{
                flex: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}
              >
                {props.post}
              </div>
              <div>{props.company}</div>
            </div>
          </div>
        }
      </Paper>
    </div>
  );
};

export default Cards;
