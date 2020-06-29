import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button, Paper, Hidden } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  sbutton1: {
    margin: 10,
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
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

            <ColorButton
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              color="primary"
              className={classes.sbutton1}
            >
              Share on whatsapp
            </ColorButton>

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
