import React from "react";
import { InfoBlock } from "../components/infoBlock";
import { InfoBlockProps } from "../definitions";
import empData from "../data/emp.json";

export const Employment = () => {
    return (
        <>
            <div
                className="content"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                {empData.map((item, idx) => {
                    return <InfoBlock key={idx} {...item as unknown as InfoBlockProps} />;
                })}
            </div>
        </>
    );
};