import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div className="not_found">
      <h1>Error 404</h1>
      <Link to="./">
        <button>Login Page</button>
      </Link>
    </div>
  );
}

export default NotFound;
