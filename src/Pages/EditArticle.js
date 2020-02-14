import React, { Component } from "react";
import {
  Button,
  Input,
  Dropdown,
  Form,
  Divider,
  Header,
  Icon,
  Label
} from "semantic-ui-react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "../App.css";
import axios from "axios";

export default class EditArticle extends Component {
  state = {
    editorContent: "",
    title: "",
    categories: [],
    selectedCategories: [],
    keywords: [],
    keyword: ""
  };

  componentDidMount() {
    axios.get("categories").then(res => {
      this.setState({ categories: res.data });
      console.log("cat:", this.state);
    });
    axios
      .get("articles/5e454835b63d2288dc22e8fc")
      .then(res => {
        console.log("gelen article: ", res.data);
        this.setState({ editorContent: res.data.Text });
      })
      .catch(err => {});
  }

  //Input changed
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChangeEditor = content => {
    localStorage.setItem("editorContent", content);
    this.setState({ editorContent: content });
  };

  generateMultipleDropdownOptions = () => {
    let options = [];

    this.state.categories.forEach(cat => {
      options.push({
        key: cat._id,
        text: cat.CategoryName,
        value: cat._id
      });
    });

    return options;
  };

  handleDropdownChange = event => {
    const { value } = event.target;
    console.log(value);
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
        this.state.keywords.push(value);
        this.setState({ keyword: "" });
      }
    }
  };

  render() {
    return (
      <div>
        <h1 className="title">{this.state.title}</h1>
        <Input
          fluid
          label="Başlık"
          name="title"
          placeholder="Makalenizin başlığını giriniz..."
          style={{ marginBottom: 25 }}
        />
        <Dropdown
          placeholder="Kategoriler"
          fluid
          multiple
          selection
          value={this.state.selectedCategories}
          options={this.generateMultipleDropdownOptions()}
          onChange={this.handleDropdownChange}
          style={{ marginBottom: 25 }}
        />
        <Form>
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
            <br />
            <br />
            <br />
          </Form.Field>
        </Form>
        <SunEditor
          setContents={this.state.editorContent}
          onChange={this.handleChangeEditor}
          onImageUpload={this.handleImageUpload}
          setOptions={{
            charCounter: true,
            buttonList: [
              ["undo", "redo"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript"
              ],
              ["font", "fontSize"],
              ["fontColor", "hiliteColor", "textStyle"],
              ["removeFormat"],
              ["paragraphStyle"],
              ["table", "link", "image"],
              ["fullScreen", "codeView"],
              ["save", "template"]
            ]
          }}
        />
        <Button
          primary
          style={{ marginTop: 10 }}
          onClick={this.handleClickSave}
        >
          Kaydet
        </Button>
      </div>
    );
  }
}
