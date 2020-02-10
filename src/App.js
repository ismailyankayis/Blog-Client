import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddArticle from "./Pages/AddArticle";
import { Grid, Responsive } from "semantic-ui-react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import AddCategory from "./Pages/AddCategory";
import SubNavbar from "./Components/SubNavbar";
import ListCategories from "./Pages/ListCategories";
import axios from "axios";

axios.defaults.baseURL =
  "http://localhost:5000/";

axios.interceptors.request.use(
  async config => {
    /*if (user) {
      config.headers.Authorization = "Bearer " + user.user.token;
    }*/
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Navbar />
          <br/><br/><br/><br/>
          <Grid padded>
            <Grid.Column width={3}>
              <SubNavbar/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Route exact path="/" component={Home} />
              <Route path="/AddArticle" component={AddArticle} />
              <Route path="/AddCategory" component={AddCategory} />
              <Route path="/ListCategories" component={ListCategories} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Contact" component={Contact} />
            </Grid.Column>
          </Grid>
        </Router>
      </Container>
    );
  }
}
