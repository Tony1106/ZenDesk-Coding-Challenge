import React from "react";
import styles from "./styles.module.scss";
import SideMenu from "../../components/SideMenu";
import Tickets from "../../containers/Tickets/";

import { Route } from "react-router-dom";
export default function Home(props) {
  return (
    <div className={styles.layout}>
      <div className={styles["side-menu"]}>
        <SideMenu />
      </div>
      <Route path="/" component={Tickets} />
    </div>
  );
}
