import React, { Component } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import styles from "./styles.module.scss";
import { endpoint, makeTicketEndPoint } from "../../ultils/EndPoints";
import Spinner from "../../components/Spinner";
import axios from "axios";
export default class ViewTicket extends Component {
  state = {
    isShow: this.props.isOpen,
    isLoading: false,
    ticket: {},
    id: ""
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {};
    if (nextProps.match.params.id !== prevState.id) {
      update.id = nextProps.match.params.id;
    }
    if (nextProps.isOpen !== prevState.isShow) {
      update.isShow = nextProps.isOpen;
    }
    return update;
  }
  componentDidUpdate(nextProps, prevState) {
    if (this.state.id !== prevState.id) {
      this.getTicket(this.state.id);
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.getTicket(id);
  }
  getTicket = id => {
    this.resetState();
    let ticketEndPoint = endpoint.tickets.getTicket;
    ticketEndPoint = makeTicketEndPoint(ticketEndPoint, id);

    axios
      .get(ticketEndPoint)
      .then(res => {
        this.setState({ ticket: res.data.ticket, isLoading: false });
      })
      .catch(err => {
        this.setState({
          error: err.response.data.error,
          isLoading: false
        });
        if (err.response.status === 500) {
          ToastsStore.error(err.response.statusText);
        } else ToastsStore.error(err.response.data.error.msg);
        console.log(err.response);
      });
  };
  resetState = () => {
    this.setState({
      isLoading: true,
      ticket: {}
    });
  };
  render() {
    const { subject, description } = this.state.ticket;
    const { id } = this.props.match.params;
    let spinner = this.state.isLoading ? <Spinner isShow /> : null;
    return (
      <div
        className={`${styles.viewTicket} ${
          this.state.isShow ? styles.show : ""
        }`}
      >
        <h3>Ticket: {id}</h3>
        <hr className="my-4" />
        <h5>Subject: </h5>
        {spinner}
        <p>{subject}</p>
        <hr className="my-4" />
        <h5>Description: </h5>
        {spinner}
        <p>{description}</p>
        <div className={styles.closeTicket}>
          <button
            className="btn btn-primary"
            onClick={() => this.props.closeTicket()}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
