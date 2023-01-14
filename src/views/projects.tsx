import React from "react";
import { InfoBlock } from "../components";
import { InfoBlockProps } from "../definitions";
import prjData from "../data/prj.json";

export const Projects = () => {
    return (
        <div
            className="content"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
            }}>
            {prjData.map((item, idx) => {
                return <InfoBlock key={idx} {...item as unknown as InfoBlockProps} />;
            })}
        </div>
    );
};