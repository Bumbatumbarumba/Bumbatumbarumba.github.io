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
            <Link to="/" className={selectedLink === "home" ? "active" : ""} onClick={() => setSelectedLink("home")}>
                <span className={"navbar-link"}>
                    Home
                </span>
            </Link>
            <Link to="/edu" className={selectedLink === "edu" ? " active" : ""}>
                <span className={"navbar-link"} onClick={() => setSelectedLink("edu")}>
                    Education
                </span>
            </Link>
            <Link to="/emp" className={selectedLink === "emp" ? " active" : ""}>
                <span className={"navbar-link"} onClick={() => setSelectedLink("emp")}>
                    Employment
                </span>
            </Link>
            <Link to="/prj" className={selectedLink === "prj" ? " active" : ""}>
                <span className={"navbar-link"} onClick={() => setSelectedLink("prj")}>
                    Projects
                </span>
            </Link>
            <Link to="/ctt" className={selectedLink === "ctt" ? " active" : ""}>
                <span className={"navbar-link"} onClick={() => setSelectedLink("ctt")}>
                    Contact
                </span>
            </Link>
        </div>
    );
};