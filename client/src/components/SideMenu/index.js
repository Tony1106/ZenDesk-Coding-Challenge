import React from "react";
import { Link } from "react-router-dom";
export default function SideMenu(props) {
  return (
    <div className="list-group">
      <Link
        to="/tickets"
        className="list-group-item list-group-item-action active"
      >
        Show all tickets
      </Link>
      <Link to="#" className="list-group-item list-group-item-action disabled">
        Pending tickets - disabled
      </Link>
      <Link to="#" className="list-group-item list-group-item-action disabled">
        Solved tickets -disabled
      </Link>
    </div>
  );
}
