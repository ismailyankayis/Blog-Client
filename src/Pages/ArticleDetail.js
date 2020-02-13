import React, { Component } from "react";
import axios from "axios";

export default class ArticleDetail extends Component {
  state = { articles: [] };

  componentDidMount() {
    axios
      .get("articles")
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>dasdas</h1>
        {articles &&
          articles.map(art => {
            return <div dangerouslySetInnerHTML={{__html: art.Text}} />;
          })}
      </div>
    );
  }
}
