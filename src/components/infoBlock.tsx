import React from "react";
import Accordion from "@mui/material/Accordion";
import { DownCaret, InfoBlockProps } from "../definitions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const InfoBlock = (props: InfoBlockProps) => {
    const { title, content, enableAccordian, subtitle, startDate, endDate } = props;

    const formatDate = (startDate?: string,
        endDate?: string) => {
        const separator = startDate || endDate ? " - " : "";
        const formattedStart = (startDate ? startDate + " to " : "");
        const formattedEnd = endDate ? endDate : "";
        console.log("=========", startDate, endDate);
        return separator + formattedStart + formattedEnd;
    };

    const displayTitles = (title: string,
        subtitle?: string,
        startDate?: string,
        endDate?: string) => {
        return (
            <div>
                <h2 className="info-title">{title}</h2>
                <h4 style={{ display: subtitle ? "block" : "none" }}>{(subtitle || "") + formatDate(startDate, endDate)}</h4>
            </div>
        );
    };

    const displayContent = (content: string[]) => {
        return (
            <ul>
                {content.map((info, idx) => {
                    return (
                        <li key={idx}>{info}</li>
                    );
                })}
            </ul>
        );
    };

    const accordianMode = (title: string,
        content: string[],
        subtitle?: string,
        startDate?: string,
        endDate?: string) => {
        return (
            <Accordion
                disableGutters={true}
                sx={{
                    backgroundColor: "#161616",
                    color: "#ecdbba",
                    boxShadow: "none",
                }}>
                <AccordionSummary expandIcon={<DownCaret />}>
                    {displayTitles(title, subtitle, startDate, endDate)}
                </AccordionSummary>
                <AccordionDetails>
                    {displayContent(content)}
                </AccordionDetails>
            </Accordion>
        );
    };

    const displayBlockMode = (title: string,
        content: string[],
        subtitle?: string,
        startDate?: string,
        endDate?: string) => {
        return (
            <div>
                {displayTitles(title, subtitle, startDate, endDate)}
                {displayContent(content)}
            </div>
        );
    };

    return (
        <>
            {enableAccordian
                ? accordianMode(title, content, subtitle, startDate, endDate)
                : displayBlockMode(title, content, subtitle, startDate, endDate)}
            <br />
        </>
    );
};