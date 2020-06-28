import React, { Component } from "react";
import { Hidden, Divider, Container } from "@material-ui/core";
import Header from "./Components/Header";
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
        <Hidden only={"xs"}>
          <Container>
            <Header />
            <Main />
            <br />
            <Divider />
            <Footer />
          </Container>
        </Hidden>
        <Hidden only={["lg", "md", "sm", "xl"]}>
          <Sheader />
          <Description />
          <Buttons />
          <Sfooter />
        </Hidden>
      </div>
    );
  }
}

export default App;
