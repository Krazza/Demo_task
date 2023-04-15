import React from "react";
import "./styles/PendingApplications.css";

function ApplicationEntry(props)
{
    const {role, name, motivation} = props;

    return(
    <div className="applicationCardContainer">
        <h2>{name}<span>{`/${role}`}</span></h2>
        <p className="motivationLetter">{motivation}</p>
        <ul>
            <li>{"Skill #1"}</li>
            <li>{"Skill #2"}</li>
            <li>{"Skill #3"}</li>
            <li>{"Skill #4"}</li>
            <li>{"Skill #5"}</li>
            <li>{"Skill #6"}</li>
        </ul>
        <section className="buttonHolder">
            <button className="decisionButton accept">{"Accept"}</button>
            <button className="decisionButton decline">{"Decline"}</button>
        </section>
    </div>)
}

export default ApplicationEntry;