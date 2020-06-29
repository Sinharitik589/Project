import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button, Paper, Hidden, Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  sbutton1: {
    margin: 10,
  },

  buttons: {
    paddingRight: 52,
  },
  button1: {
    paddingRight: 37,
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Hidden /* only={["lg", "md", "sm", "xl"]} */>
        <Paper elevation={4}>
          <div
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className={classes.sbutton1}
            >
              Get Employee Refferal
            </Button>

            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              color="secondary"
              className={classes.sbutton1}
            >
              Share on whatsapp
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<LinkedInIcon />}
              className={classes.sbutton1}
            >
              Share on Linkedin
            </Button>
          </div>
        </Paper>
      </Hidden>
      {/* <Hidden only={["xs"]}>
        <Paper elevation={4}>
          <div style={{ padding: 10 }}>
            <div style={{ padding: 10, marginLeft: 20 }}>
              <Button variant="outlined" color="primary" size="large">
                Get Employee Refferal
              </Button>
            </div>
            <div style={{ padding: 10, marginLeft: 20 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                color="secondary"
                className={classes.button1}
              >
                Share on whatsapp
              </Button>
            </div>
            <div style={{ padding: 10, marginLeft: 20 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttons}
                startIcon={<LinkedInIcon />}
              >
                Share on Linkedin
              </Button>
            </div>
          </div>
        </Paper>
      </Hidden> */}
    </div>
  );
};

export default Buttons;
