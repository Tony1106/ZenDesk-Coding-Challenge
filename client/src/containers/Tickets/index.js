import React, { Component } from "react";
import styles from "./styles.module.scss";
import Ticket from "../Ticket/";
import axios from "axios";
export default class Tickets extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.container}>
        <h3>View tickets</h3>
        <Ticket />
      </div>
    );
  }
}
