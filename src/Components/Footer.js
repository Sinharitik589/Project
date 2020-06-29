import React, { Component } from "react";
import { Grid, Divider, Container, Typography } from "@material-ui/core";
import Cards from "./Cards";
import logo from "../img/Kobo360.png";

class Footer extends Component {
  render() {
    return (
      <Container disableGutters>
        <div style={{ marginLeft: 0 }}>
          <Grid container disableGutters>
            <Grid item sm={12}>
              <Grid container spacing={5}>
                <Grid item sm={3} xs={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>

                <Grid item sm={3} xs={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Footer;
