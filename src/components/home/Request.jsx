import React, { useState } from "react";
import './request.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Accept from "./Accept";
import Modal from "./Modal";

export default function Request({ name1, date1, email1, name2, date2, email2 }) {
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const openModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(true);
                break;
            case 'member2':
                setModalOpen2(true);
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
            default:
                break;
        }
    }

    const members = [
        { name: name1, date: date1, email: email1 },
        { name: name2, date: date2, email: email2 }
    ];

    return (
        <div className="request">
            <h3 className="retitle">Request to Accept</h3>
            <table className="retable">
                <thead>
                    <tr className="retr">
                        <th className="reth">Customer</th>
                        <th className="reth">Date</th>
                        <th className="reth">Email</th>
                        <th className="reth">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index} className="retr">
                            <td className="reuser">
                                <AssignmentIndIcon/>
                                <span className="rename">{member.name}</span>
                            </td>
                            <td className="redate">{member.date}</td>
                            <td className="remenu">{member.email}</td>
                            <td className="restatus">
                                <div className="buttonContainer">
                                    <button className="Accept">Accept</button>
                                    <button className="Reject" onClick={() => openModal(`member${index + 1}`)}>Reject</button>
                                    <Modal open={index === 0 ? modalOpen1 : modalOpen2} close={() => closeModal(`member${index + 1}`)}>
                                        <div>
                                            <p><span className="boldText">"거절하시겠습니까?"</span></p>
                                        </div>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
