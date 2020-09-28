import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data.map(columns => (
          <tr>
            <td>{columns.id}</td>
            <td>{columns.userId}</td>
            <td>{columns.title}</td>
            <td>{columns.body}</td>
          </tr>
        ))
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Posts </h1>

        <table>
          <th> PostId</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Post</th>
          {this.state.posts}{" "}
        </table>
      </div>
    );
  }
}
ReactDOM.render(
  <App url="https://jsonplaceholder.typicode.com/comments?" />,
  document.getElementById("root")
);
