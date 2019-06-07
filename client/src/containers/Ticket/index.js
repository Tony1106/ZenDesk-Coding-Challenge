import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
export default class Body extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.container}>
        <h5>aliquip mollit quis laborum incididunt</h5>
        <p>
          Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla.
          In in Lorem minim dolor laboris reprehenderit{" "}
        </p>

        <div className={styles.footer}>
          <div>
            {" "}
            Status
            <span>
              <span class="badge badge-pill badge-success">Open</span>
            </span>
          </div>
          <div>
            Priority
            <span class="badge badge-pill badge-success">danger</span>
          </div>
        </div>
        <div className={styles.action}>
          {" "}
          <a class="btn btn-primary btn-sm">View Ticket</a>
        </div>
      </div>
    );
  }
}
