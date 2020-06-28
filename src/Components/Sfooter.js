import React, { Component } from "react";
import { Grid, Divider } from "@material-ui/core";
import Scards from "./Scards";
import logo from "../img/Kobo360.png";

class Sfooter extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Scards
                  image={logo}
                  post="Supply chain Intern"
                  company="Kobo360"
                />
              </Grid>
              <Grid item xs={12}>
                <Scards
                  image={logo}
                  post="Supply chain Intern"
                  company="Kobo360"
                />
              </Grid>
              <Grid item xs={12}>
                <Scards
                  image={logo}
                  post="Supply chain Intern"
                  company="Kobo360"
                />
              </Grid>
              <Grid item xs={12}>
                <Scards
                  image={logo}
                  post="Supply chain Intern"
                  company="Kobo360"
                />
              </Grid>
              <Grid item xs={12}>
                <Scards
                  image={logo}
                  post="Supply chain Intern"
                  company="Kobo360"
                />
              </Grid>
              <Grid item xs={12}>
                <Scards
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

export default Sfooter;
