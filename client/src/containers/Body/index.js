import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
export default class Body extends Component {
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://tony1106.zendesk.com/api/v2/users.json",
      auth: {
        username: "buiminhtien06@gmail.com",
        password: "tien1106"
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div className={styles.header}>{this.props.children}</div>;
  }
}
