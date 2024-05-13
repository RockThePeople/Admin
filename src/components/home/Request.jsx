import React from "react";
import './request.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Request({name1, date1, menu1, status1, name2, date2, menu2, status2, name3, date3, menu3, status3,name4, date4, menu4, status4}){
    const Button=({ type }) => {
        return <button className={'rebutton' + type}>{type}</button>
    }
    return (
    <div className="request">
        <h3 className="retitle">Request to Accept </h3>
        <table className="retable">
            <tr className="retr">
                <th className="reth">Customer</th>
                <th className="reth">Date</th>
                <th className="reth">Menu</th>
                <th className="reth">Status</th>
            </tr>
            <tr className="retr">
                <td className="reuser">
                    <AssignmentIndIcon/>
                    <span className="rename">{name1}</span>
                </td>
                <td className="redate">{date1}</td>
                <td className="remenu">{menu1}</td>
                <td className="restatus.Declined">
                    <Button type="Declined" />
                </td>
            </tr>
            <tr className="retr">
                <th className="reth">Customer</th>
                <th className="reth">Date</th>
                <th className="reth">Menu</th>
                <th className="reth">Status</th>
            </tr>
            <tr className="retr">
                <td className="reuser">
                    <AssignmentIndIcon/>
                    <span className="rename">{name2}</span>
                </td>
                <td className="redate">{date2}</td>
                <td className="remenu">{menu2}</td>
                <td className="restatus.Approved">
                    <Button type="Approved" />
                </td>
            </tr>
            <tr className="retr">
                <th className="reth">Customer</th>
                <th className="reth">Date</th>
                <th className="reth">Menu</th>
                <th className="reth">Status</th>
            </tr>
            <tr className="retr">
                <td className="reuser">
                    <AssignmentIndIcon/>
                    <span className="rename">{name3}</span>
                </td>
                <td className="redate">{date3}</td>
                <td className="remenu">{menu3}</td>
                <td className="restatus.panding">
                    <Button type="Panding" />
                </td>
            </tr>
            <tr className="retr">
                <th className="reth">Customer</th>
                <th className="reth">Date</th>
                <th className="reth">Menu</th>
                <th className="reth">Status</th>
            </tr>
            <tr className="retr">
                <td className="reuser">
                    <AssignmentIndIcon/>
                    <span className="rename">{name4}</span>
                </td>
                <td className="redate">{date4}</td>
                <td className="remenu">{menu4}</td>
                <td className="restatus.Approved">
                    <Button type="Approved" />
                </td>
            </tr>
        </table>
    </div>
    )
}