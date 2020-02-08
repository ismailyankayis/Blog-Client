import React, { Component } from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import img1 from "../images/3229.jpg";

export default class Home extends Component {
  state = {
    article: {
      id: "asdsa",
      title: "yeni makale",
      text: "adsahdjkhasjkdashdjkashdkjhask",
      brief: "Bu bir özet açıklamadır.",
      author: "ismail",
      created_date: "05.02.2020",
      view: 123
    }
  };

  render() {
    return (
      <div>
        <h1>Ana Sayfa</h1>
        <Card>
          <Image
            fluid
            label={{
              color: "black",
              content: "Kategori",
              icon: "folder open",
              ribbon: true
            }}
            src={img1}
            wrapped
            ui={false}
          />

          <Card.Content>
            <Card.Meta>
              <Label>
                <Icon name="calendar" />
                {this.state.article.created_date}
              </Label>
              <Label>
                <Icon name="eye" />
                {this.state.article.view}
              </Label>
            </Card.Meta>
            <br/>
            <Card.Header>
              <h3>{this.state.article.title}</h3>
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a to="/Contact">
              Devamını Oku
              <Icon name="arrow right" />
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
