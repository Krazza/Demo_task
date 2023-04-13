import React from "react";
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import "./styles/App.css";

function Header()
{
    return(
        <header>
            <Icon icon="material-symbols:menu-rounded" color="#adadad" width="48" height="48" />
            <div className="headerClass">
                <nav>
                    <ul>
                        <li><Link to="/">{"TEAMS LIST"}</Link></li>
                    </ul>
                </nav>
                <Icon icon="mdi:user-circle" color="#adadad" width="48" height="48" />
            </div>
        </header>
    )
}

export default Header;