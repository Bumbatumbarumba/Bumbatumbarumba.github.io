import React from "react";

export const Contact = () => {
    return (
        <div className="content">
            {/* <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li>bartkosa24(at symbol)gmail.com</li>
                <li><a className="other-links" href="https://github.com/Bumbatumbarumba" target={"_blank"} rel="noreferrer">GitHub</a></li>
                <li><a className="other-links" href="https://www.linkedin.com/in/bartosz-kosakowski/" target={"_blank"} rel="noreferrer">LinkedIn</a></li>
            </ul> */}

            {/* this is just easier to center on mobile than on desktop lmao */}
            <p style={{ textAlign: "center" }}>
                bartkosa24(at symbol)gmail.com
                <br /><br />
                <a className="other-links" href="https://github.com/Bumbatumbarumba" target={"_blank"} rel="noreferrer">GitHub</a>
                <br /><br />
                <a className="other-links" href="https://www.linkedin.com/in/bartosz-kosakowski/" target={"_blank"} rel="noreferrer">LinkedIn</a>
            </p>
        </div>
    );
};