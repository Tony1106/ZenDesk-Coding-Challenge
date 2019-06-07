import React, { Component } from "react";
import styles from "./styles.module.scss";
import Ticket from "../Ticket/";
import { endpoint } from "../../ultils/EndPoints";
import axios from "axios";
export default class Tickets extends Component {
  state = {
    isFilter: false
  };
  componentDidMount() {
    let { isFilter } = this.state;
    const urlParams = this.props.params;
    const { tickets } = endpoint;
    // if (urlParams) {
    //   isFilter = true;

    // }
    // const url = zendesk.services.getPaginateTickets;

    axios
      .get(tickets.getAllTickets)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className={styles.tickets}>
        <h3>View tickets</h3>
        <div className={styles.ticket}>
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    );
  }
}
