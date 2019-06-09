import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import TicketFooter from "./TicketFooter";

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
          <TicketFooter name="Status" status={status} />
        </div>
        <div className={styles.footer}>
          <TicketFooter name="Priority" status={priority} />
        </div>
        <div className={styles.action}>
          {" "}
          <Link
            className="btn btn-primary btn-sm"
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
