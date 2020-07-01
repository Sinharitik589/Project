import React, { Component } from "react";
import { Hidden, Container, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import InputCard from "./Components/InputCard";
import Logo from "./Components/Logo";
import Ffooter from "./Components/Ffooter";
class Apps extends Component {
  render() {
    return (
      <div>
        <Hidden only={["lg", "md", "sm", "xl"]}>
          <div className="main_containers">
            <div>
              <div className="first_header">Schedule your demo.</div>
              <p>
                Fill out the form, and one of our experts will personally walk
                you through what Jumpstart can do for your company.
              </p>
            </div>
            <InputCard label="input_card" />

            <div>
              <div className="second_header">Trusted by the world's best.</div>
              <p>
                Join hundreds of companies that discover passionate and diverse
                talent with Jumpstart.
              </p>
            </div>
          </div>
          <Logo />
          <Ffooter label="footer_container" tlabel="footer_content" />
        </Hidden>
        <Hidden only={["xs"]}>
          <div className="main_container">
            <Grid container>
              <Grid item sm={6}>
                <div>
                  <div className="first_header">Schedule your demo.</div>
                  <p className="para">
                    Fill out the form, and one of our experts will personally
                    walk you through what Jumpstart can do for your company.
                  </p>
                </div>
                <div>
                  <div className="second_header">
                    Trusted by the world's best.
                  </div>
                  <p className="para">
                    Join hundreds of companies that discover passionate and
                    diverse talent with Jumpstart.
                  </p>
                </div>
                <Logo />
              </Grid>
              <Grid item sm={1} />
              <Grid item sm={5}>
                <InputCard label="input_cards" />
              </Grid>
            </Grid>
          </div>
          <Ffooter label="footer_containers" tlabel="footer_contents" />
        </Hidden>
      </div>
    );
  }
}

export default Apps;
