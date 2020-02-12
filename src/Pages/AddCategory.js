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
    console.log("girdi:");
    axios
      .post("categories", {
        CategoryName: this.state.categoryName,
        Keywords: this.state.keywords
      })
      .then(response => {
        console.log(response);
        this.setState({ categoryName: "", keywords: [] });
      })
      .catch(error => {});
  };

  handleClickDelete = (keyword, event) => {
    let keys = this.state.keywords;
    keys = keys.filter(key => key !== keyword);
    this.setState({ keywords: keys });
  };

  handleKeyPress = event => {
    if (event.which === 13) {
      event.preventDefault();
    }
    var code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      const { value } = event.target;
      if (value !== "") {
        if (!this.state.keywords.some(key => key === value)) {
          this.state.keywords.push(value);
          this.setState({ keyword: "" });
        }
      }
    }
  };

  //Input changed
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
              name="categoryName"
              label="Kategori İsmi"
              placeholder="Kategori ismini giriniz..."
              style={{ marginBottom: 25 }}
              onChange={this.handleChange}
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
              name="keyword"
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
                  <Label onClick={() => this.handleClickDelete(keyword)}>
                    <Icon name="delete" />
                    {keyword}
                  </Label>
                );
              })}
          </Form.Field>
          <div style={{ textAlign: "center" }}>
            <Button
              key="saveCategoryButton"
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
