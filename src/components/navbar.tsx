import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}>
            <Link to="/"><span className="navbar-link">Home</span></Link>
            <Link to="/edu"><span className="navbar-link">Education</span></Link>
            <Link to="/emp"><span className="navbar-link">Employment</span></Link>
            <Link to="/prj"><span className="navbar-link">Projects</span></Link>
            <Link to="/ctt"><span className="navbar-link">Contact</span></Link>
        </div>
    );
};