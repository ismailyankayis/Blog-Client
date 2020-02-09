import React, { Component } from "react";
import {
  Button,
  Input,
  Form,
  Divider,
  Header,
  Icon,
  Label
} from "semantic-ui-react";
import axios from "axios";

export default class AddCategory extends Component {
  state = {
    categoryName: "",
    keywords: []
  };

  handleClickSave = event => {
    console.log("girdi");
    /*axios
      .post("categories", {
        CategoryName: this.state.categoryName,
        Keywords: this.state.keywords
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {});*/
  };

  handleClickDelete = event => {
    const { value } = event.target;

    let keys = this.state.keywords;
    console.log("val", value)
    keys = keys.filter(key => key !== value);
    this.setState({ keywords: keys });
    console.log("girdi:",this.state.keywords)
  };

  handleKeyPress = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      const { value } = event.target;
      if (value !== "") {
        this.state.keywords.push(value);
        this.setState({ keyword: "" });
      }
    }
  };

  //Input changed
  handleChange = e => {
    const { value } = e.target;
    this.setState({ keyword: value });
  };

  render() {
    const { keywords } = this.state;
    return (
      <div>
        <h1 className="title">Yeni Kategori</h1>
        <Form>
          <Form.Field>
            <Input
              fluid
              label="Kategori İsmi"
              placeholder="Kategori ismini giriniz..."
              style={{ marginBottom: 25 }}
            />
          </Form.Field>
          <Form.Field>
            <Input
              icon="tags"
              iconPosition="left"
              label={{ tag: true, content: "Keyword" }}
              labelPosition="right"
              placeholder="Keyword Gir"
              value={this.state.keyword}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </Form.Field>
          <Form.Field>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="tag" />
                Keyword
              </Header>
            </Divider>
            {keywords &&
              keywords.map(keyword => {
                return (
                  <Label value={keyword} onClick={this.handleClickDelete}>
                    <Icon name="delete" />
                    {keyword}
                  </Label>
                );
              })}
          </Form.Field>
          <div style={{ textAlign: "center" }}>
            <Button
              content="Kaydet"
              color="green"
              onClick={this.handleClickSave}
            />
          </div>
        </Form>
      </div>
    );
  }
}
