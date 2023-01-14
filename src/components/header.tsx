import React from "react";
import { HeaderProps } from "../definitions";
import { Navbar } from "./navbar";

export const Header = (props: HeaderProps) => {
    const { viewWidth } = props;
    /*
        note to self: this might look redundant but that's only because originally
        this contained some additional stuff that I later decided was not ideal to
        keep. 
    */
    return (
        <div className="header">
            <div style={{ width: "100%" }}>
                <Navbar showDefaultNav={viewWidth >= 1024} />
            </div>
        </div>
    );
};