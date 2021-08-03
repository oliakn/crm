import React, {useState} from 'react';
import EditForm from "./EditForm";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TableItem = ({rec, deleteUser ,updateUser , student}) => {
    const [editForm, setEditForm] = useState(false)
    return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="mr-2">
                        </div>
                        <span className="font-medium">{rec.name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <FontAwesomeIcon icon={faPhoneAlt}/>{rec.phone}
                        </div>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                        {rec.amount}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                        {rec.paid}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                        {rec.notebook}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                        {rec.group}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                        {rec.comments}
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                                        <span
                                            className={`${rec.status === 'Active' ? 'bg-pink-200'
                                                : rec.status === 'Pending' ? 'bg-yellow-200'
                                                    : rec.status === 'Completed' ? 'bg-green-200' : 'bg-pink-200'} text-black py-1 px-3 rounded-full text-xs`}>{rec.status}</span>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <div
                            onClick={() => setEditForm(true)}
                            className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                            </svg>
                        </div>
                        <div
                            className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 onClick={() => deleteUser(rec.id)}
                            >
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </div>
                    </div>
                    {editForm &&
                    <EditForm updateUser={updateUser} rec={rec} setEditForm={setEditForm}/>}
                </td>
            </tr>
    );
};

export default TableItem;