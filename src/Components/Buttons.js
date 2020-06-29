import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button, Paper, Hidden } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  sbutton1: {
    margin: 10,
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Hidden>
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
    </div>
  );
};

export default Buttons;
