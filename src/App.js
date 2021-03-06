import React, { Component } from "react";
import { Hidden, Divider, Container } from "@material-ui/core";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Sheader from "./Components/Sheader";
import Sfooter from "./Components/Sfooter";
import Description from "./Components/Description";
import Buttons from "./Components/Buttons";
class App extends Component {
  render() {
    return (
      <div>
        <Hidden only={["xs"]}>
          <div className="container">
            <Sheader />
            <Main />
          </div>

          <Footer />
        </Hidden>
        <Hidden only={["lg", "md", "sm"]}>
          <Container>
            <Sheader />
            <Description />
            <br />
            <Buttons />
          </Container>

          <Sfooter />
        </Hidden>
      </div>
    );
  }
}

export default App;
