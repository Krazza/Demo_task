import React from "react";
import TeamEntry from "./TeamEntry";
import "./styles/TeamList.css";

function TeamList()
{
    return(
    <div className="teamListContainer">
        <h1>{"JOIN A TEAM"}</h1>
        <h3>{"Apply for a role that suits you the most and join a team"}</h3>
        <div className="teamList">
            <TeamEntry/>
            <TeamEntry/>
        </div>
    </div>)
}

export default TeamList;