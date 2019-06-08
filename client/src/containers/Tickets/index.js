import React, { Component } from "react";
import styles from "./styles.module.scss";
import Ticket from "../Ticket/";
import Pagination from "../../components/Pagination";
import { constant } from "../../constant/";
import { endpoint } from "../../ultils/EndPoints";
import axios from "axios";
export default class Tickets extends Component {
  state = {
    ticketsEndPoint: endpoint.tickets.getPaginateTickets,
    count: 0,
    page: 1,
    tickets: []
  };
  componentDidMount() {
    let { ticketsEndPoint } = this.state;
    let page = this.state.page;
    this.getTicket(ticketsEndPoint, page);
  }
  makePaginationEndPoint(endpoint, per_page, page) {
    return endpoint.replace("%per_page%", per_page).replace("%page%", page);
  }
  getTicket = (endpoint, page) => {
    let { per_page } = constant.pagination;

    endpoint = this.makePaginationEndPoint(endpoint, per_page, page);
    axios
      .get(endpoint)
      .then(res => {
        let { tickets, count } = res.data;
        console.log(res.data);

        this.setState({
          count,
          tickets
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChangePage = page => {
    this.getTicket(this.state.ticketsEndPoint, page);
    this.setState({ page });
  };
  render() {
    const { tickets, count, per_page, page } = this.state;
    return (
      <div className={styles.tickets}>
        <h3>View tickets</h3>
        <div className={styles.ticket}>
          {tickets &&
            tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
        <Pagination
          count={count}
          per_page={constant.pagination.per_page}
          page={page}
          handleChange={this.handleChangePage}
        />
      </div>
    );
  }
}
