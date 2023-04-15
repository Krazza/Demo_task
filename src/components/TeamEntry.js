import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import autoAnimate from '@formkit/auto-animate'
import "./styles/TeamEntry.css";

function TeamEntry(props)
{   
    const parentRef = useRef(null);
    const childRef = useRef(null)
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const { teamID, teamTitle, teamDescription, teamChallenges, teamOpenRoles, teamMembers } = props;

    useEffect(() => {
        if(parentRef.current){
            autoAnimate(parentRef.current);
        }
        if(childRef.current){
            autoAnimate(childRef.current);
        }
    }, [parentRef, childRef]);

    return(
    <div className="teamContainer" ref={parentRef}>
        <h2>{teamTitle}</h2>
        <aside>
            <section>
                {teamChallenges.map((challenge)=> <Link key={challenge} to="/">{challenge}</Link>)}
            </section>
        </aside>
        <p>{"Our idea is to design a digital solution for mobile phones, which would focus on helping teenagers access free therapy sessions."}</p>
        <p>{teamDescription}</p>
        <section className="teamRoles">
            <h3>{"WE ARE LOOKING FOR"}</h3>
            <div className="teamRoleContainer">
                {teamOpenRoles.map((role) => <div key={role} className="role openRole"><Link to={`/application/${teamID}/${role}`}>{role}</Link></div>)}
            </div>
        </section>
        {showAdditionalContent && <div className="additionalContent" ref={childRef}>
            <section className="meetTheTeam">
                <h3>{"WHO ARE WE"}</h3>
                <div className="portraitContainer">
                    {teamMembers.map((member) => 
                    <div key={member.name} className="portrait"><p>{member.name}<br/>{member.role}</p></div> )}
                </div>
            </section>
            <section className="contactInfo">
                <p id="inTouch">{"Get in touch"}</p>
                <p id="email" onClick={()=>window.location.href = "mailto:pinkunicorn@junction.fi?subject=Team%20Application&body=Hello_World;"}>{"pinkunicorn@junction.fi"}</p>
            </section>
        </div>}
        {showAdditionalContent ? <button onClick={() => setShowAdditionalContent(false)}>{"Show less"}</button> : <button onClick={() => setShowAdditionalContent(true)}>{"Show more"}</button>}
    </div>)
}

export default TeamEntry;