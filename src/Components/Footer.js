import React, { Component } from "react";
import { Grid, Divider } from "@material-ui/core";
import Cards from "./Cards";
import logo from "../img/Kobo360.png";

class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Grid container>
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
    );
  }
}

export default Footer;
