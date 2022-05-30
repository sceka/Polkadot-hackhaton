import React from "react";
import "./navbar.scss";
const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar-title">Logo</div>
            <div className="navbar-menu">
                <div className="navbar-about">About</div>
                <div className="navbar-explore">Explore</div>
                <div className="navbar-create">Create</div>
                <div className="navbar-connect">Connect</div>
            </div>
        </div>
    );
};

export default Navbar;
