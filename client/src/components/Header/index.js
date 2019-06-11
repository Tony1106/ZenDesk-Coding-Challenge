import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/tickets">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/readme">
              Readme
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="">Profile</div>
      </nav>
    </div>
  );
}
