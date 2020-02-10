import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Accordion } from "semantic-ui-react";

export default class SubNavbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Accordion as={Menu} vertical >
        <Menu.Item>
          <Menu.Header>Kategoriler</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="Kategori Listele"
              active={activeItem === "Kategori Listele"}
              onClick={this.handleItemClick}
              as={Link}
              to="/ListCategories"
            />
            <Menu.Item
              name="Kategori Ekle"
              active={activeItem === "Kategori Ekle"}
              onClick={this.handleItemClick}
              as={Link}
              to="/AddCategory"
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Makaleler</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="Makale Listele"
              active={activeItem === "Makale Listele"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Makale Ekle"
              active={activeItem === "Makale Ekle"}
              onClick={this.handleItemClick}
              as={Link}
              to="/AddArticle"
            />
          </Menu.Menu>
        </Menu.Item>
      </Accordion>
    );
  }
}
