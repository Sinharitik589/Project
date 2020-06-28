import React from "react";
import { Paper } from "@material-ui/core";

const Scards = (props) => {
  return (
    <div>
      <Paper elevation={3}>
        <div className="cards">
          <div style={{ flex: 1 }}>
            <img src={props.image} style={{ width: 40, marginTop: 20 }} />
          </div>
          <div style={{ flex: 6 }}>
            <div style={{ flex: 1 }}>
              <h4>{props.post}</h4>
              <h5 style={{ fontWeight: "lighter" }}>{props.company}</h5>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Scards;
