import React from "react";
import { Container } from "@material-ui/core";
import logo from "../img/Kobo360.png";

const Ffooter = (props) => {
  return (
    <div className="f_footer">
      <div className="header_logo">
        <img style={{ height: 100, borderRadius: 60 }} src={logo} />
      </div>
      <div className={props.label}>
        <div className="footer_content">
          <h3>EXPLORE</h3>
          <h4>Communites</h4>
          <h4>Students</h4>
          <h4>Recruits</h4>
          <h4>Discover</h4>
        </div>
        <div className="footer_content">
          <h3>COMPANY</h3>
          <h4>Teams</h4>
          <h4>Careers</h4>
        </div>
        <div className="footer_content">
          <h3>Follow</h3>
          <h4>Instagram</h4>
          <h4>Facebook</h4>
          <h4>LinkedIn</h4>
        </div>
        <div className="footer_content">
          <h3>EXPLORE</h3>
          <h4>Communites</h4>
          <h4>Students</h4>
          <h4>Recruits</h4>
          <h4>Discover</h4>
        </div>
      </div>
    </div>
  );
};

export default Ffooter;
