import React from "react";
import Accordion from "@mui/material/Accordion";
import { DownCaret, InfoBlockProps } from "../definitions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const InfoBlock = (props: InfoBlockProps) => {
    const { title, content, enableAccordian, subtitle, startDate, endDate, imgSrc } = props;

    const formatDate = (startDate?: string,
        endDate?: string) => {
        // const separator = startDate || endDate ? " - " : "";
        const formattedStart = (startDate ? startDate + " to " : "");
        const formattedEnd = endDate ? endDate : "";
        //return separator + formattedStart + formattedEnd;
        return formattedStart + formattedEnd;
    };

    const displayTitles = (title: string,
        subtitle?: string,
        startDate?: string,
        endDate?: string,
        imgSrc?: string) => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                {/* TO DO: figure out this image malarkey */}
                {/* {imgSrc ? <img style={{ marginRight: "1em" }} src={imgSrc} alt=""></img> : <></>} */}
                <div>
                    <h2 className="info-title">{title}</h2>
                    <h4 style={{ display: subtitle ? "block" : "none" }}>{(subtitle || "")}</h4>
                    {formatDate(startDate, endDate) ? <h5 style={{ fontStyle: "italic" }}>{formatDate(startDate, endDate)}</h5> : <></>}
                </div>
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
        endDate?: string,
        imgSrc?: string) => {
        return (
            <Accordion
                disableGutters={true}
                sx={{
                    backgroundColor: "#161616",
                    color: "#ecdbba",
                    boxShadow: "none",
                }}>
                <AccordionSummary expandIcon={<DownCaret />}>
                    {displayTitles(title, subtitle, startDate, endDate, imgSrc)}
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
        endDate?: string,
        imgSrc?: string) => {
        return (
            <div>
                {displayTitles(title, subtitle, startDate, endDate, imgSrc)}
                {displayContent(content)}
            </div>
        );
    };

    return (
        <>
            {enableAccordian
                ? accordianMode(title, content, subtitle, startDate, endDate, imgSrc)
                : displayBlockMode(title, content, subtitle, startDate, endDate, imgSrc)}
            <br />
        </>
    );
};