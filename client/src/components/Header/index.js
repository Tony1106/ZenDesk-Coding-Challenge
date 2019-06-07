import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default function Home(props) {
  return (
    <div className={styles.header}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/readme">
              Readme
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="">Profile</div>
      </nav>
    </div>
  );
}
