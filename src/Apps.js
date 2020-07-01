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
          <Container>
            <div>
              <div
                style={{
                  fontWeight: "bolder",
                  fontSize: 30,
                  marginBottom: 20,
                  marginTop: 30,
                }}
              >
                Schedule your demo.
              </div>
              <p>
                Fill out the form, and one of our experts will personally walk
                you through what Jumpstart can do for your company.
              </p>
            </div>
            <InputCard />
            <Logo />
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 20,
                  marginTop: 30,
                }}
              >
                Trusted by the world's best.
              </div>
              <p>
                Join hundreds of companies that discover passionate and diverse
                talent with Jumpstart.
              </p>
            </div>
          </Container>
          <Ffooter label="footer_container" tlabel="footer_content" />
        </Hidden>
        <Hidden only={["xs"]}>
          <Container>
            <Grid container>
              <Grid item sm={7}>
                <div>
                  <div
                    style={{
                      fontWeight: "bolder",
                      fontSize: 30,
                      marginBottom: 20,
                      marginTop: 30,
                    }}
                  >
                    Schedule your demo.
                  </div>
                  <p>
                    Fill out the form, and one of our experts will personally
                    walk you through what Jumpstart can do for your company.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginBottom: 20,
                      marginTop: 30,
                    }}
                  >
                    Trusted by the world's best.
                  </div>
                  <p>
                    Join hundreds of companies that discover passionate and
                    diverse talent with Jumpstart.
                  </p>
                </div>
                <Logo />
              </Grid>
              <Grid item sm={5}>
                <InputCard />
              </Grid>
            </Grid>
          </Container>
          <Ffooter label="footer_containers" tlabel="footer_contents" />
        </Hidden>
      </div>
    );
  }
}

export default Apps;
