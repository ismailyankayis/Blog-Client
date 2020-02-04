import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default class AddArticle extends Component {

    state = {
        editorContent : ""
    }

  componentDidMount() {
    this.setState({ editorContent: localStorage.getItem("editorContent") });
  }

  handleChangeEditor = (content) => {
    localStorage.setItem("editorContent", content);
    this.setState({ editorContent : content });
  }

  render() {
    return (
      <div>
        <SunEditor
        setContents={this.state.editorContent}
        onChange={this.handleChangeEditor} />
        <Button primary >Kaydet</Button>
      </div>
    );
  }
}
