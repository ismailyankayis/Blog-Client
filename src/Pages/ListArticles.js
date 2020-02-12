import React, { Component } from "react";
import axios from "axios";
import { Header, Table, Button, Icon } from "semantic-ui-react";

export default class ListArticles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get("articles")
      .then(response => {
        this.setState({ articles: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <h1 className="title">Makaleler</h1>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Başlık</Table.HeaderCell>
              <Table.HeaderCell>Keyword</Table.HeaderCell>
              <Table.HeaderCell>İşlem</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {articles.map(article => {
              console.log("cat: ", article);
              return (
                <Table.Row>
                  <Table.Cell>
                    <Header as="h3" textAlign="center">
                      {article.Title}
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{article.Keywords}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button>Düzenle</Button>
                    <Button
                      negative
                      onClick={() => this.handleClickDelete(article._id)}
                    >
                      <Icon name="trash alternate" />
                      Sil
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </>
    );
  }
}
