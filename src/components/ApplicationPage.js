import { useParams } from "react-router-dom";
import React from "react";

function ApplicationPage()
{
    const { teamTitle, openRole} = useParams();

    return(
    <div className="teamListContainer">
    <section id="listSection">
        <h1>{"APPLY"}</h1>
        <h3>{`Send your profile information and motivation to ${teamTitle.toUpperCase().replaceAll("-"," ")}.`}</h3>
    </section>
    <div className="application"></div>
    </div>)
}

export default ApplicationPage;