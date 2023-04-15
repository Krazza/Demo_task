import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/ApplicationPage.css";

function ApplicationPage()
{
    const [applicationData, setApplicationData] = useState([]);
    const [formWasSubmitted, setFormWasSubmitted] = useState(false);

    const { teamID, role } = useParams();
    const teamData = require("../teamData.json");
    const currentTeam = teamData.find((team) => team.teamID === teamID);

    useEffect(() => 
    { 
        axios.get("http://localhost:4001/teamApplications").then((res) => setApplicationData(res.data));
    }, []);

    function SubmitHandler(event)
    {
        event.preventDefault();
        AddNewApplication(event.target[0].value);
        setFormWasSubmitted(true);
    }

    function AddNewApplication(motivationLetter)
    {
        const newApplication = {
            id : (applicationData[teamID].applications.length).toString(),
            role : role,
            name : "Test",
            motivation : motivationLetter
        }

        const tempTeamObj = applicationData[teamID];
        tempTeamObj.applications.push(newApplication);
        
        axios.patch(`http://localhost:4001/teamApplications/${teamID}`, tempTeamObj);
    }

    return(
    <div className="applicationContainer">
        <section id="listSection">
            <h1>{"APPLY"}</h1>
            <h3>{`Send your profile information and motivation message to ${currentTeam.teamTitle.toUpperCase().replaceAll("-"," ")}.`}</h3>
        </section>
        {!formWasSubmitted ? <form className="applicationFormContainer" onSubmit={SubmitHandler}>
            <h2>{currentTeam.teamTitle}</h2>
            <aside>
                <section>
                    {currentTeam.teamChallenges.map((challenge)=> <a key={challenge} href="www.chanllenge.com">{challenge}</a>)}
                </section>
            </aside>
            <p id="prompt">{`Why do you want to apply for the position of a "${role}" and work with "${currentTeam.teamTitle}"?`}</p>
            <textarea className="applicationField" maxLength={10000}/>
            <p id="explanation">{"*Your profile information is automatically included in the application"}</p>
            <input type="submit" className="formButton" value={"Send"}/>
        </form> 
        : 
        <div className="applicationALT">
            <h2>{currentTeam.teamTitle}</h2>
            <aside>
                <section>
                    {currentTeam.teamChallenges.map((challenge)=> <a key={challenge} href="www.chanllenge.com">{challenge}</a>)}
                </section>
            </aside>
        <h2 className="confirmation">{"Done :)"}<br/>{"Form sent succesfully"}</h2>
        <a href={"www.applications.com"} className="instructions link">{"View the form"}</a> 
        <p className="instructions">{"Please wait for the team's response in your mail."}</p>  
        </div>}
    </div>)
}

export default ApplicationPage;