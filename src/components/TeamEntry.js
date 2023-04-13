import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import autoAnimate from '@formkit/auto-animate'
import "./styles/TeamEntry.css";

function TeamEntry(props)
{   
    const parentRef = useRef(null);
    const childRef = useRef(null)
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const title = props.teamTitle;
    const description = props.teamDescription; 
    const challenge = props.teamChallenges;
    const roles = props.teamOpenRoles;
    const teamMembers = props.teamMembers;

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
        <h2>{title}</h2>
        <aside>
            <section>
                {challenge.map((challenge)=> <a key={challenge} href="www.chanllenge.com">{challenge}</a>)}
            </section>
        </aside>
        <p>{description}</p>
        <section className="teamRoles">
            <h3>{"WE ARE LOOKING FOR"}</h3>
            <div className="teamRoleContainer">
                {roles.map((role) => <div key={role} className="role openRole"><Link to={`/application/${title.toLowerCase().replaceAll(" ","-")}/${role.toLowerCase()}`}>{role}</Link></div>)}
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
                <p id="email">{"pinkunicorn@junction.fi"}</p>
            </section>
        </div>}

        {showAdditionalContent ? <button onClick={() => setShowAdditionalContent(false)}>{"Show less"}</button> : <button onClick={() => setShowAdditionalContent(true)}>{"Show more"}</button>}
    </div>)
}

export default TeamEntry;