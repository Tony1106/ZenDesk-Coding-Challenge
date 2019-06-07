import React from "react";
import styles from "./styles.module.scss";
export default function Home(props) {
  return (
    <div className={styles.header}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
        <div className="">Profile</div>
      </nav>
    </div>
  );
}
