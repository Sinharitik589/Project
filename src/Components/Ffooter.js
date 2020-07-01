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
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            EXPLORE
          </a>
          <a href="#" className="link">
            Communities
          </a>
          <a href="#" className="link">
            Students
          </a>
          <a href="#" className="link">
            Recruits
          </a>
          <a href="#" className="link">
            Discover
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            COMPANY
          </a>
          <a href="#" className="link">
            Teams
          </a>
          <a href="#" className="link">
            Careers
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            FOLLOW
          </a>
          <a href="#" className="link">
            Instagram
          </a>
          <a href="#" className="link">
            Facebook
          </a>
          <a href="#" className="link">
            LinkedIn
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            CONTACT
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
        </div>

        <div className={props.tlabel}></div>
      </div>
    </div>
  );
};

export default Ffooter;
