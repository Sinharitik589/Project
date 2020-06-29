import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import "../App.css";
import logo from "../img/Kobo360.png";
class Header extends Component {
  render() {
    return (
      <div>
        <Grid container disableGutters>
          <Grid item xs={5} />
          <Grid item xs={2}>
            <img src={logo} />
          </Grid>
          <Grid item xs={5} />
        </Grid>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography variant="h1" component="h2" gutterBottom>
              KOBO 360
            </Typography>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default Header;
