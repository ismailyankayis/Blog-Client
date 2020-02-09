import React, { Component } from "react";
import axios from "axios";
import { Header, Table, Button, Icon } from "semantic-ui-react";

export default class ListCategories extends Component {
  state = {categories : []};

  componentDidMount() {
    axios
      .get("categories")
      .then(response => {
        this.setState({ categories: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Kategori Adı</Table.HeaderCell>
            <Table.HeaderCell>Keyword</Table.HeaderCell>
            <Table.HeaderCell>İşlem</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {categories.map(cat => {
              console.log("cat: ", cat)
            return (
              <Table.Row>
                <Table.Cell>
                  <Header as="h3" textAlign="center">
                    {cat.CategoryName}
                  </Header>
                </Table.Cell>
                <Table.Cell>{cat.Keywords}</Table.Cell>
                <Table.Cell textAlign="center">
                <Button >Düzenle</Button>
                <Button negative><Icon name="trash alternate" />Sil</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
