// Dependencies
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Employee Directory</Link>
        </nav>
    );
};

export default Navbar;