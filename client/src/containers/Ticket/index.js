import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
export default class Ticket extends Component {
  render() {
    let { subject, description, status, priority } = this.props.ticket;
    const maxDescriptionLength = 150;
    if (description.length > maxDescriptionLength)
      description = description.substring(0, maxDescriptionLength);
    return (
      <div className={styles.container}>
        <h5>{subject}</h5>
        <p>{description} ...</p>

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
