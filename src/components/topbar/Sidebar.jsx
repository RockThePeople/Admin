import React from "react";
import './sidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { renderToPipeableStream } from "react-dom/server";

export default function sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Main</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" onClick="sidebarColor">Home</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Today Sales</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Morning</li>
                        <li className="sidebarListItem">Lunch</li>
                        <li className="sidebarListItem">Dinner</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Order</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Total</li>
                        <li className="sidebarListItem">Year</li>
                        <li className="sidebarListItem">Month</li>
                    </ul>
                </div> 
                <div className="sidebarIconContainer">
                    <SettingsIcon className="sidebarIcon" />
                </div>
            </div>
            
        </div>
        
    )
}