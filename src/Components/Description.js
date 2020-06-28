import React, { Component } from "react";
import { Divider, Typography, Chip, Grid } from "@material-ui/core";

class Description extends Component {
  render() {
    return (
      <div>
        <h2
          style={{
            marginLeft: 20,
            marginTop: 30,
            fontWeight: "lighter",
          }}
        >
          NIGERIA
        </h2>
        <Divider />
        <p style={{ fontSize: 22, padding: 15 }}>
          Kobo360, is a privately owned, pan-african technology company
          disrupting and leading African third-party logistics industry. Through
          an all-in-one robust platform that instantly connects cargo owners to
          trucks and drivers, Kobo uses big data and agile technology to reduce
          friction and scale efficiency in the African logistics ecosystem. The
          company has designed effective solutions for the challenges in the
          logistics space by connecting asset owners in the industry with the
          MSMEs that need their services. Kobo is also preparing to enter the
          agro-trading space by developing a marketplace that connects farmers
          with buyers all over the world. The marketplace will effectively
          eliminate the high cost of middlemen for smallholder farmers and
          significantly increase their profits.
        </p>
      </div>
    );
  }
}

export default Description;
