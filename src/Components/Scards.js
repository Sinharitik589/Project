import React from "react";
import { Paper } from "@material-ui/core";

const Scards = (props) => {
  return (
    <div>
      <Paper square variant="outlined">
        <div
          className="cards"
          style={{
            height: 80,
            paddingTop: 0,
            paddingLeft: 10,
            paddingBottom: 15,
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
            <img
              src={props.image}
              style={{ height: 45, marginTop: 15, marginBottom: 15 }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>{props.post}</h3>

            <h5 style={{ fontWeight: "lighter" }}>{props.company}</h5>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Scards;
