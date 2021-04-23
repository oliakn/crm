import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSort} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import AddForm from "./AddForm";
import {data} from "autoprefixer";

const Table = () => {
    const [contacts, setContacts] = useState([])
    // const [editable, setEditable] = useState(false)
    // const [newName, setNewName] = useState()
    // const [newPhone, setNewPhone] = useState(phone)
    // const handleSave = ()=> {
    //     updateUser(user.id, newName, newPhone)
    //     setEditable(false)
    // }
    const [isShowForm, setIsShowForm] = useState(false)

    useEffect(() => {
        axios('https://605c24c46d85de00170d9532.mockapi.io/users')
            .then(rec => {
                setContacts(rec.data)
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`https://605c24c46d85de00170d9532.mockapi.io/users/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(rec => rec.id !== data.id))
            })
    }

    const addUser = (user) => {
        console.log(user)
        axios.post('https://605c24c46d85de00170d9532.mockapi.io/users', user)
            .then(({data}) => setContacts([...contacts, data]))
    }

    const updateUser = (id, name, phone) => {
        axios.put(`https://607539e80baf7c0017fa5850.mockapi.io/users/${id}`, {name, phone})
            .then(({data}) => setContacts(contacts.map(el => el.id === data.id ? data : el)))

    }

    return (
        <div className=''>
            <div className="overflow-x-auto">
                {isShowForm && <AddForm addUser={addUser} setIsShowForm={setIsShowForm}/>}
                <div
                    className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">

                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6 text-right">

                            <table className="min-w-max w-full table-auto">
                                <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left" onClick={addUser}>Name <FontAwesomeIcon icon={faSort}/></th>
                                    <th className="py-3 px-6 text-left">Number</th>
                                    <th className="py-3 px-6 text-center">Contract<FontAwesomeIcon icon={faSort}/></th>
                                    <th className="py-3 px-6 text-center">Paid <FontAwesomeIcon icon={faSort}/></th>
                                    <th className="py-3 px-6 text-center">Notebook</th>
                                    <th className="py-3 px-6 text-center">Group</th>
                                    <th className="py-3 px-6 text-center">Comments</th>
                                    <th className="py-3 px-6 text-center">Status <FontAwesomeIcon icon={faSort}/></th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                {
                                    contacts.map(rec => (
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
                                                        {rec.phone}
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
                                                    {rec.comment}
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                        <span
                                            className="bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-xs">Active</span>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center">
                                                    <div
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
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                            <button type="button"
                                    className="inline-flex items-center m-4 px-4 py-1.5 border border-transparent text-xs font-medium
                                     rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={setIsShowForm}
                            >
                                Add new contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;