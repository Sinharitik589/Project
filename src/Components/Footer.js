import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import Cards from "./Cards";
import logo from "../img/Kobo360.png";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: 0,
          width: "100vw",
          backgroundColor: "grey",
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        <Container>
          <Grid container>
            <Grid item sm={12}>
              <Grid container spacing={1}>
                <Grid item xl={6} sm={4} lg={3}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xl={6} sm={4} lg={3}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xl={6} sm={4} lg={3}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>

                <Grid item xl={6} sm={4} lg={3}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xl={6} sm={4} lg={3}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;
