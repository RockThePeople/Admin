import React from "react";
import './request.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Modal from "./Modal";
import { useState } from "react";
export default function Request({name1, date1, email1, name2, date2, email2, name3, date3, email3, name4, date4, email4}){
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);

    const openModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(true);
                break;
            case 'member2':
                setModalOpen2(true);
                break;
            case 'member3':
                setModalOpen3(true);
                break;
            case 'member4':
                setModalOpen4(true);
                break;
            default:
                break;
        }
    }
    const closeModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(false);
                break;
            case 'member2':
                setModalOpen2(false);
                break;
            case 'member3':
                setModalOpen3(false);
                break;
            case 'member4':
                setModalOpen4(false);
                break;
            default:
                break;
        }
    }

        const Button = ({ type, member,email }) => {
            let buttonClassName = 'restatus';
            if (type === 'Accept') {
                buttonClassName += ' Accept';
            } else if (type === 'Reject') {
                buttonClassName += ' Reject';
            }
            const handleClick=()=>{
                openModal(member)
            }
            
            return (
                <div className="buttonContainer">
                    <button className={buttonClassName} onClick={() => openModal(member)}>
                        {type}
                    </button>
                </div>
            );
        }    

    return (
        <div className="request">
            <h3 className="retitle">Request to Accept </h3>
            <table className="retable">
                <tr className="retr">
                    <th className="reth">Customer</th>
                    <th className="reth">Date</th>
                    <th className="reth">Email</th>
                    <th className="reth">Status</th>
                </tr>
                <tr className="retr">
                    <td className="reuser">
                        <AssignmentIndIcon/>
                        <span className="rename">{name1}</span>
                    </td>
                    <td className="redate">{date1}</td>
                    <td className="remenu">{email1}</td>
                    <td className="restatus">
                        <div className="buttonContainer">
                            <Button type="Accept" member="member1" />
                            <Button type="Reject" member="member1" />
                        </div>
                    </td>
                </tr>
                <tr className="retr">
                    <th className="reth">Customer</th>
                    <th className="reth">Date</th>
                    <th className="reth">Email</th>
                    <th className="reth">Status</th>
                </tr>
                <tr className="retr">
                    <td className="reuser">
                        <AssignmentIndIcon/>
                        <span className="rename">{name2}</span>
                    </td>
                    <td className="redate">{date2}</td>
                    <td className="remenu">{email2}</td>
                    <td className="restatus">
                        <div className="buttonContainer">
                            <Button type="Accept" />
                            <Button type="Reject" />
                        </div>
                    </td>
                </tr>
            
            
        </table>
    </div>
    )
}