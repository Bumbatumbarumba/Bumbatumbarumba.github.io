import React from "react";
import { InfoBlock } from "../components/infoBlock";
import { InfoBlockProps } from "../definitions";
import eduData from "../data/edu.json";

export const Education = () => {
    return (
        <div
            className="content"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
            }}>
            {eduData.map((item, idx) => {
                return <InfoBlock key={idx} {...item as unknown as InfoBlockProps} />;
            })}
        </div>
    );
};