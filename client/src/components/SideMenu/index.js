import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default function SideMenu(props) {
  return (
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
        Show all items
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Pending tickets
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Solved tickets
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        Deleted tickets
      </a>
    </div>
  );
}
