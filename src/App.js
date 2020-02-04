import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddArticle from "./Pages/AddArticle";
import { Grid } from "semantic-ui-react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Navbar />
          <Grid padded>
            <Grid.Column width={3}>
              <p>deneme kolonu</p>
            </Grid.Column>
            <Grid.Column width={10}>
              <Route exact path="/" component={Home} />
              <Route path="/AddArticle" component={AddArticle} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Contact" component={Contact} />
            </Grid.Column>
          </Grid>
        </Router>
      </Container>
    );
  }
}
