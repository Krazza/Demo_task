import React, { useState, useEffect} from "react";
import axios from "axios";
import ApplicationEntry from "./ApplicationEntry";
import "./styles/PendingApplications.css";

function PendingApplications()
{

    const [applicationData, setApplicationData] = useState();
    const [teamWasChosen, setTeamWasChosen] = useState(false);
    const [chosenTeam, setChosenTeam] = useState({});
    
    const teamData = require("../teamData.json");
    
    useEffect(() => 
    { 
        axios.get("http://localhost:4001/teamApplications").then((res) => setApplicationData(res.data));
    }, []);

    function ChooseTheTeam(teamID)
    {
        const currentTeam = applicationData.find((team) => team.teamID === teamID)
        setChosenTeam(currentTeam);
    }
   
    return(
    <div className="pendingContainer">
        <section id="listSection">
            <h1>{"PENDING APPLICATIONS"}</h1>
            <h2 className="teamNames">{"Choose the team: "}</h2>
            <div className="teamNamesContainer">
                {teamData.map((team) => { 
                    return(
                    <button key={team.teamID} onClick={()=>{ChooseTheTeam(team.teamID); setTeamWasChosen(true)}}>
                        {team.teamTitle}
                    </button>)})}
            </div>
        </section>
        <div className="applicationList">
            {teamWasChosen && chosenTeam.applications.map((application) => 
            <ApplicationEntry key={application.teamID} role={application.role} name={application.name} motivation={application.motivation}/>)}
        </div>
    </div>)
}

export default PendingApplications;