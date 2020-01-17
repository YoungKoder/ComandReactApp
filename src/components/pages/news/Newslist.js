import React from "react";
import "./Newslist.css";
import { Link } from "react-router-dom";

function Newslist() {
  return (
    <React.Fragment>
      <aside>
        <h3>Logo</h3>
        <ul>
          <Link to="/newslist">
            <li>News</li>
          </Link>
          <Link to="/eventslist">
            <li>Events</li>
          </Link>
          <Link to="/userprofile">
            <li>Profile</li>
          </Link>
        </ul>
      </aside>
      <h1> NewsList</h1>
    </React.Fragment>
  );
}

export default Newslist;
