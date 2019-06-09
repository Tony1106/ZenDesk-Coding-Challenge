import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Ticket extends Component {
  render() {
    let { subject, description, status, priority, id } = this.props.ticket;
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
          <Link
            class="btn btn-primary btn-sm"
            to={`/tickets/${id}`}
            onClick={() => this.props.openTicket()}
          >
            View Ticket
          </Link>
        </div>
      </div>
    );
  }
}
