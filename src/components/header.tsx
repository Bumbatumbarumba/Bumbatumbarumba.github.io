import React from "react";
import { Navbar } from "./navbar";

export const Header = () => {
    return (
        <div
            className="header"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <h1 className="title">Bartosz Kosakowski</h1>
            <div style={{ width: "50%" }}>
                <Navbar />
            </div>
        </div>
    );
};