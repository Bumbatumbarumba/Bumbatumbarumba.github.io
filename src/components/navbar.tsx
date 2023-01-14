import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}>
            <Link to="/" className={"navbar-link " + (selectedLink === "home" ? "active" : "")} onClick={() => setSelectedLink("home")}>
                Home
            </Link>
            <Link to="/edu" className={"navbar-link " + (selectedLink === "edu" ? " active" : "")} onClick={() => setSelectedLink("edu")}>
                Education
            </Link>
            <Link to="/emp" className={"navbar-link " + (selectedLink === "emp" ? " active" : "")} onClick={() => setSelectedLink("emp")}>
                Employment
            </Link>
            <Link to="/prj" className={"navbar-link " + (selectedLink === "prj" ? " active" : "")} onClick={() => setSelectedLink("prj")}>
                Projects
            </Link>
            <Link to="/ctt" className={"navbar-link " + (selectedLink === "ctt" ? " active" : "")} onClick={() => setSelectedLink("ctt")}>
                Contact
            </Link>
        </div>
    );
};