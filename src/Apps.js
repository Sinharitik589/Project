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
        <Hidden only={["lg", "md", "sm"]}>
          <Container>
            <InputCard />
            <Logo />
          </Container>
          <Ffooter label="footer_container" />
        </Hidden>
        <Hidden only={["xl", "xs"]}>
          <Container>
            <Grid container>
              <Grid item sm={7}>
                <Logo />
              </Grid>
              <Grid item sm={5}>
                <InputCard />
              </Grid>
            </Grid>
          </Container>
          <Ffooter label="footer_containers" />
        </Hidden>
      </div>
    );
  }
}

export default Apps;
