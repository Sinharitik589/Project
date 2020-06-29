import React from "react";
import { Hidden } from "@material-ui/core";

const Chip = (props) => {
  return (
    <div>
      <Hidden only={["xs"]}>
        <div
          style={{
            padding: 11,
            borderRadius: 10,
            backgroundColor: "#ececec",
            marginRight: 13,
          }}
        >
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 18 }}>
            {props.label}
          </div>
        </div>
      </Hidden>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <div
          style={{
            padding: 9,
            borderRadius: 10,
            backgroundColor: "#D3D3D3",
            marginRight: 15,
            marginBottom: 15,
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15 }}>
            {props.label}
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default Chip;
