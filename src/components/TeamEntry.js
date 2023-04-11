import React from "react";
import "./styles/TeamEntry.css";

function TeamEntry()
{
    return(
    <div className="teamContainer">
        <h2>{"PINK UNICORN"}</h2>
        <aside>
            <section>
                <a href="www.chanllenge.com">{"#Fazer"}</a>
                <a href="www.chanllenge.com">{"#Super Cell"}</a>
            </section>
        </aside>
        <p>{"We are a team of three friends studying at Aalto University. We have several ideas for the upcoming project but we are sure that we would like to approach the topic from a user centered point of ciew. We aim to develop a feasible and useful idea that is based on empathy and understanding of human psychology."}</p>
        <section className="teamRoles">
            <h3>{"WE ARE LOOKING FOR"}</h3>
            <div className="teamRoleContainer">
                <div className="role openRole">{"Designer"}</div>
                <div className="role openRole">{"Engineer 1"}</div>
                <div className="role closedRole">{"Engineer 2"}</div>
            </div>
        </section>
        <a href="www.google.com">{"Show more"}</a>
    </div>)
}

export default TeamEntry;