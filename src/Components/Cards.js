import React from "react";
import "../App.css";

const Cards = (props) => {
  return (
    <div>
      <div
        className="cards"
        style={{
          height: 80,
          paddingTop: 0,
          paddingLeft: 15,
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "black",
          backgroundColor: "white",
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
            style={{
              fontSize: 20,
              marginBottom: 5,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            {props.post}
          </div>
          <div
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "unset",
            }}
          >
            {props.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
