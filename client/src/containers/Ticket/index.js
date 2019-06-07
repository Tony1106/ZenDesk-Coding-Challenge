import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
export default class Body extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.container}>
        <h5>Subject</h5>
        <p>
          Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla.
          In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat
          laborum qui mollit nostrud magna ullamco.{" "}
        </p>
        <div className={styles.footer}>
          <div>
            {" "}
            Status
            <span>
              <i className="fas fa-lightbulb" />
            </span>
          </div>
          <div>
            Priority
            <span class="badge badge-pill badge-success">danger</span>
          </div>
        </div>
      </div>
    );
  }
}
