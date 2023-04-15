import React, { useState } from "react";
import TeamEntry from "./TeamEntry";
import "./styles/TeamList.css";

function TeamList()
{
    const teamData = require("../teamData.json");
    const [search, setSearch] = useState("");

    return(
    <div className="teamListContainer">
        <section id="listSection">
            <h1>{"JOIN A TEAM"}</h1>
            <h3>{"Apply for a role that suits you the most and join a team"}</h3>
            <input type="text" placeholder="Find your dream team!" onChange={(e)=>setSearch(e.target.value)}/>
        </section>
        <div className="teamList">
            {teamData.filter((team) => { return team.searchParams.toLowerCase().includes(search.toLowerCase())}).map((team) => 
            <TeamEntry key={team.teamID} teamID={team.teamID} teamTitle={team.teamTitle} teamDescription={team.teamDescription}
            teamChallenges={team.teamChallenges} teamOpenRoles={team.teamOpenRoles} teamMembers={team.teamMembers}/>)}
        </div>
    </div>)
}

export default TeamList;