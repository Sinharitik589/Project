import React from "react";

const InputCard = (props) => {
  const changeBorder = (id) => {
    const { style, value } = document.getElementById(`${id}`);
    if (value == "") {
      style.borderColor = "red";
    } else {
      style.borderColor = "#2dc5a1";
    }
  };

  return (
    <div className={props.label}>
      <div className="input_name" style={{ marginTop: 30 }}>
        Full Name
      </div>
      <input
        id="name"
        onChange={(e, id) => changeBorder(e.target.id)}
        className={props.tlabel}
        placeholder="John Smith"
      ></input>
      <div className="input_name">Work Email Address</div>
      <input
        onChange={(e, id) => changeBorder(e.target.id)}
        id="email"
        className={props.tlabel}
        placeholder="John@gmail.com"
      ></input>
      <div className="input_name">Your Company Name</div>
      <input
        onChange={(e, id) => changeBorder(e.target.id)}
        id="company"
        className={props.tlabel}
        placeholder="AmazingSoftware"
      ></input>
      <div className="input_name">
        Phone Number
        <span
          style={{
            fontSize: 12,
            color: "grey",
            fontWeight: "normal",
            marginLeft: 4,
          }}
        >
          (Optional)
        </span>
      </div>
      <input
        id="phone"
        className={props.tlabel}
        placeholder="620-216-5155"
      ></input>

      <div className="button">Request a demo</div>
    </div>
  );
};

export default InputCard;
