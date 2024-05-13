import React from "react";
import './newmember.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Newmember({name1, job1, name2, job2, name3, job3}){
    return (
        <div className="newmember">
            <span className="newtitle">New Join Member</span>
            <ul className="newlist">
                <li className="newitem">
                    <div className="newuser">
                        <span className="newname">{name1}</span>
                        <span className="newteam">{job1}</span>
                    </div>
                    <button className="newbutton">
                        <AssignmentIndIcon/>Info</button>
                </li>
            </ul>
            <ul className="newlist">
                <li className="newitem">
                    <div className="newuser">
                        <span className="newname">{name2}</span>
                        <span className="newteam">{job2}</span>
                    </div>
                    <button className="newbutton">
                        <AssignmentIndIcon/>Info</button>
                </li>
            </ul>
            <ul className="newlist">
                <li className="newitem">
                    <div className="newuser">
                        <span className="newname">{name3}</span>
                        <span className="newteam">{job3}</span>
                    </div>
                    <button className="newbutton">
                        <AssignmentIndIcon/>Info</button>
                </li>
            </ul>

    </div>
    )
}