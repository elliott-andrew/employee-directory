// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Employee Directory</Link>
      </nav>
    );
};

export default Navbar;