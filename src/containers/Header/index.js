import React from "react";
import styles from "./styles.module.scss";
export default function Home(props) {
  return <div className={styles.header}>{props.children}</div>;
}
