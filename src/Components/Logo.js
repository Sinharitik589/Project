import React, { Component } from "react";
import * as image from "../img";
import { Hidden, Button } from "@material-ui/core";

const Logo = () => {
  const { fb, airbnb, ibm, google, mongo, react } = image;
  var count = 0;
  var s = 0;
  var y = [mongo, react, google, fb, airbnb];
  var x = [fb, airbnb, mongo];
  const fadeOut = () => {
    let interval = setInterval(function () {
      let img = document.getElementById(`${count}`);
      let opacity = Number(
        window.getComputedStyle(img).getPropertyValue("opacity")
      );

      document.getElementById(`${count}`).style.opacity = opacity - 1;

      if (opacity <= 0) {
        var flag = 1;
        clearInterval(interval);
        for (let i = 0; i < y.length; i++) {
          if (document.getElementById(`${i}`).src == `${x[s]}`) {
            flag = 0;
          }
        }
        if (flag == 1) {
          document.getElementById(`${count}`).src = `${x[s]}`;
          fadeIn();
        } else {
          fadeIn();
        }
      }
    }, 500);
  };
  const fadeIn = () => {
    console.log(count);
    var interval = setInterval(function () {
      var img = document.getElementById(`${count}`);
      var opacity = Number(
        window.getComputedStyle(img).getPropertyValue("opacity")
      );

      document.getElementById(`${count}`).style.opacity = opacity + 1;

      if (opacity >= 1) {
        clearInterval(interval);

        count = Math.floor(Math.random() * y.length);
        s = Math.floor(Math.random() * x.length);

        fadeOut();
      }
    }, 500);
  };
  const renderImage = () => {
    var z = [];
    z = y.map((img, index) => {
      let z = <img className="logo_image" src={img} id={index} />;
      return z;
    });
    fadeOut();
    return z;
  };

  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <div className="logo_containers">{renderImage()}</div>
      </Hidden>
      <Hidden only={["xs", "xl"]}>
        <div className="logo_container">{renderImage()}</div>
      </Hidden>
    </div>
  );
};

export default Logo;
