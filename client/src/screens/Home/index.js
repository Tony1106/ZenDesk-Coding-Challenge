import React from "react";
import styles from "./styles.module.scss";
import SideMenu from "../../components/SideMenu";
import Tickets from "../../containers/Tickets/";

import { Route, BrowserRouter as Router } from "react-router-dom";
export default function Home(props) {
  return (
    <div className={styles.layout}>
      <div className={styles["side-menu"]}>
        <SideMenu />
      </div>
      <Route path="/tickets" component={Tickets} />

      {/* <Route path="/tickets/filter/:option" component={Tickets} /> */}
    </div>
  );
}
