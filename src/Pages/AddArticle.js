import React, { Component } from "react";
import { Button, Input, Dropdown } from "semantic-ui-react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "../App.css";
import axios from "axios";

axios.interceptors.request.use(
  async config => {
    config.headers.Authorization =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA5LzA5L2lkZW50aXR5L2NsYWltcy9hY3RvciI6IjdhZTJmY2EwLTEwMTYtNDcxNS04NzlmLWJkYTdiMjFiMzIxNSIsImp0aSI6IjA2MDYxYzVkLWJlYzUtNDZhMC05ZjhjLWExODEyM2NkY2QwYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiIzNGFlOTY5Mi00OWRmLTQzNjctODAxYS02YjBhZGNhMWQzOGIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTU4MTA4NjY3N30.juxhkM9T-Qa1Uw87r4WIJeUzRDl3-8KmVFU5FAfdogc";

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default class AddArticle extends Component {
  state = {
    editorContent: "",
    categories: [
      { id: "sad21easdas", categoryName: "kategori1", keywords: [] },
      { id: "sad21e32sdas", categoryName: "kategori2", keywords: [] },
      { id: "sad21easd21s", categoryName: "kategori3", keywords: [] }
    ],
    selectedCategories:[]
  };

  componentDidMount() {
    this.setState({ editorContent: localStorage.getItem("editorContent") });
    axios.get("categories").then(res => {
      this.setState({ categories: res.data });
      console.log("cat:", this.state);
    });
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

  handleImageUpload(
    targetImgElement,
    index,
    state,
    imageInfo,
    remainingFilesCount
  ) {
    console.log(imageInfo);
  }

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

  handleDropdownChange = (event) => {
    const {value} = event.target;
    console.log(value);
  };

  render() {
    return (
      <div>
        <h1 className="title">Yeni Makale</h1>
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
        <Button primary>Kaydet</Button>
      </div>
    );
  }
}
