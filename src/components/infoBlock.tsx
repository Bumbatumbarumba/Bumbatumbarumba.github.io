import React from "react";
import { InfoBlockProps } from "../definitions";

export const InfoBlock = (props: InfoBlockProps) => {
    const { title } = props;
    return (
        <div>
            <h2 className="info-title">{title}</h2>
        </div>
    );
};