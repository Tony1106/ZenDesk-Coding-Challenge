import React from "react";
import styles from "./styles.module.scss";
export default function Spinner(props) {
  if (!props.isShow) return null;
  return (
    <div className={styles.wrapper}>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
