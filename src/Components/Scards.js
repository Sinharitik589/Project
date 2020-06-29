import React from "react";
import { Paper } from "@material-ui/core";

const Scards = (props) => {
  return (
    <div>
      <Paper elevation={3} square>
        <div style={{ height: 80 }}>
          <div className="cards">
            <div
              style={{
                flex: 3,
              }}
            >
              <img src={props.image} alt="logo" style={{ height: 80 }} />
            </div>
            <div style={{ flex: 6 }}>
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
