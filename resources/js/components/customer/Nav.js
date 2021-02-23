import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div class="collapse navbar-collapse" id="navbarsExample09">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/customer/index">
              List{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/customer/form">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
