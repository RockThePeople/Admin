import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from './Sidebar';
export default function Topbar(){
    return(
        <div className="topbar">
        
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className='logo'>CryptoCoffee</span>
                </div>
                <div className='topright'>
                    <PersonIcon></PersonIcon>
                </div> 
                
            </div> 
        </div>
    )
}