import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import logo from "../images/logo192.png"

export default class Navbar extends Component {
  state = { activeItem: "Ana Sayfa" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive" tabular color="teal" fixed="top">
        <Menu.Item as="a" header >
          <Image
            size="mini"
            src={logo}
            style={{ marginRight: "1.5em" }}
          />
          Project Name
        </Menu.Item>
        <Menu.Item
          name="Ana Sayfa"
          active={activeItem === "Ana Sayfa"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="Makale Ekle"
          active={activeItem === "Makale Ekle"}
          onClick={this.handleItemClick}
          as={Link}
          to="/AddArticle"
        />
        <Menu.Item
          name="Kategori Ekle"
          active={activeItem === "Kategori Ekle"}
          onClick={this.handleItemClick}
          as={Link}
          to="/AddCategory"
        />
        <Menu.Item
          name="Hakkımızda"
          active={activeItem === "Hakkımızda"}
          onClick={this.handleItemClick}
          as={Link}
          to="/AboutUs"
        />
        <Menu.Item
          name="İletişim"
          active={activeItem === "İletişim"}
          onClick={this.handleItemClick}
          as={Link}
          to="/Contact"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="Login"
            active={activeItem === "Login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
