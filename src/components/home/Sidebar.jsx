import React, { useState } from "react";
import './sidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { renderToPipeableStream } from "react-dom/server";
import { useNavigate } from "react-router-dom";


export default function Sidebar(){
    
    const navigate = useNavigate();
    const move_morning=()=>{
        navigate("/morning")
    }
    const move_home=()=>{
        navigate("/home")
    }
    const move_lunch=()=>{
        navigate("/lunch")
    }
    const move_dinner=()=>{
        navigate("/dinner")
    }
    const move_total=()=>{
        navigate("/total")
    }
    const move_year=()=>{
        navigate("/year")
    }
    const move_month=()=>{
        navigate("/month")
    };
    
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Main</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" onClick={move_home}>Home</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Today Sales</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" onClick={move_morning}>Morning</li>
                        <li className="sidebarListItem" onClick={move_lunch}>Lunch</li>
                        <li className="sidebarListItem" onClick={move_dinner}>Dinner</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Order</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" onClick={move_total}>Total</li>
                        <li className="sidebarListItem" onClick={move_year}>Year</li>
                        <li className="sidebarListItem" onClick={move_month}>Month</li>
                    </ul>
                </div> 
                <div className="sidebarIconContainer">
                    <SettingsIcon className="sidebarIcon" />
                </div>
            </div>
        </div>
    );
}


