import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import TicketFooter from "./TicketFooter";
import { constant } from "../../constant";

export default class Ticket extends Component {
  render() {
    let { subject, description, status, priority, id } = this.props.ticket;
    const { maxDescriptionLength } = constant.ticket;
    if (description && description.length > maxDescriptionLength)
      description = description.substring(0, maxDescriptionLength);
    return (
      <div className={styles.container}>
        <h5 data-test="subject">{subject}</h5>
        <p data-test="description">{description} ...</p>
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
            data-test="actionButton"
          >
            View Ticket
          </Link>
        </div>
      </div>
    );
  }
}
