import React, { Component } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button, Paper } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
class Buttons extends Component {
  render() {
    return (
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <Paper elevation={4}>
          <div style={{ padding: 10 }}>
            <div style={{ padding: 10 }}>
              <Button variant="contained" color="secondary" size="large">
                Get Employee Refferal
              </Button>
            </div>
            <div style={{ paddingLeft: 10 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsAppIcon />}
              >
                Share on whatsapp
              </Button>
            </div>
            <div style={{ padding: 10 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<LinkedInIcon />}
              >
                Share on Linkedin
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Buttons;
