import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default class Pagination extends React.PureComponent {
  handleChangePage(page) {
    this.props.handleChange(page);
  }
  render() {
    let { count, per_page, page } = this.props;
    let totalPage = Math.ceil(count / per_page);
    let listPage = [];
    for (let i = 1; i <= totalPage; i++) {
      listPage.push(
        <li
          className={i == page ? "page-item active" : "page-item"}
          key={i}
          value={i}
          onClick={() => this.handleChangePage(i)}
        >
          <div className="page-link">{i}</div>
        </li>
      );
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <div className="page-link">Previous</div>
          </li>
          {listPage}
          <li className="page-item">
            <div className="page-link">Next</div>
          </li>
        </ul>
      </nav>
    );
  }
}
