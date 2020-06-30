import React from "react";

const Scards = (props) => {
  return (
    <div>
      <div className="scards">
        <div className="card_container">
          <img src={props.image} className="small_cards" />
        </div>
        <div className="card_text">
          <div className="spost">{props.post}</div>
          <div className="company">{props.company}</div>
        </div>
      </div>
    </div>
  );
};

export default Scards;
