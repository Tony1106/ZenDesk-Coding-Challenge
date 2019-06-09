import React, { Component } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import styles from "./styles.module.scss";
import Ticket from "../../components/Ticket";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import ViewTicket from "../ViewTicket";
import { constant } from "../../constant/";
import { endpoint } from "../../ultils/EndPoints";
import axios from "axios";
import { Route } from "react-router-dom";
export default class Tickets extends Component {
  state = {
    ticketsEndPoint: endpoint.tickets.getPaginateTickets,
    isLoading: false,
    count: 0,
    page: 1,
    isOpenTicket: false,
    tickets: [],
    errors: {}
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

    this.setState({ isLoading: true });
    axios
      .get(endpoint)
      .then(res => {
        let { tickets, count } = res.data;
        this.setState({ isLoading: false });
        this.setState({
          count,
          tickets
        });
        ToastsStore.success("Load all tickets success");
      })
      .catch(err => {
        this.setState({
          error: err.response.data.error,
          isLoading: false
        });
        ToastsStore.error(err.response.data.error.msg);
        console.log(err.response.data.error);
      });
  };
  handleChangePage = page => {
    this.setState({ page, tickets: [] });
    this.getTicket(this.state.ticketsEndPoint, page);
  };
  handleOpenTicket = () => {
    this.setState({ isOpenTicket: true });
  };
  handleCloseTicket = () => {
    this.setState({ isOpenTicket: false });
  };
  render() {
    const { tickets, count, page } = this.state;
    return (
      <div className={styles.tickets}>
        <Spinner isShow={this.state.isLoading} />
        <ToastsContainer store={ToastsStore} />
        <h3>View tickets</h3>
        <div className={styles.ticket}>
          {tickets &&
            tickets.map(ticket => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                openTicket={this.handleOpenTicket}
              />
            ))}
        </div>
        <Route
          exact
          path="/tickets/:id"
          render={props => (
            <ViewTicket
              isOpen={this.state.isOpenTicket}
              closeTicket={this.handleCloseTicket}
              {...props}
            />
          )}
        />
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
