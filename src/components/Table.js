import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faSort} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {Form} from "react-bootstrap";
import TableItem from "./TableItem";
import {useForm} from "react-hook-form";



const Table = () => {
    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [directionSort, setDirectionSort] = useState(true)

    const onSubmit = data => {
        addUser(data)
        setShowModal(false)
        reset()
    }

    const [user, setUser] = useState({})

    const {reset} = useForm();

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        axios('https://605c24c46d85de00170d9532.mockapi.io/users')
            .then(rec => {
                setContacts(rec.data)
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`https://605c24c46d85de00170d9532.mockapi.io/users/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(rec => rec.id !== id))
            })
    }

    const addUser = () => {
        axios.post('https://605c24c46d85de00170d9532.mockapi.io/users', user)
            .then(({data}) => setContacts([...contacts, user]))
    }

    const updateUser = (id, newName, newPhone, newAmount, newPaid, newNotebook, newGroup, newComment, newStatus) => {
        console.log(newName)
        axios.put(`https://605c24c46d85de00170d9532.mockapi.io/users/${id}`, {name: newName, phone: newPhone, amount: newAmount, paid: newPaid, notebook: newNotebook, group: newGroup, comment: newComment, status: newStatus})
            .then(({data}) => setContacts(contacts.map(el => el.id === id ? data : el)))
    }
    const sortData = (field) => {
        const copyData = contacts.concat()
        let sortData
        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => {
                    return a[field] < b[field] ? 1 : -1
                }
            )
        }
        sortData = copyData.reverse(
            (a, b) => {
                return a[field] < b[field] ? 1 : -1
            }
        )
        setContacts(sortData)
        setDirectionSort(!directionSort)
    }
    const sortStrings = (field) => {
        const copyData = contacts.concat()
        let sortData
        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => {
                    return +a[field] < +b[field] ? 1 : -1
                }
            )
        }
        sortData = copyData.reverse(
            (a, b) => {
                return +a[field] < +b[field] ? 1 : -1
            }
        )
        setContacts(sortData)
        setDirectionSort(!directionSort)
    }

    return (
        <div>
            <div className="overflow-x-scroll">
                <div
                    className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6 text-right">
                            <table className="min-w-max w-full table-auto ">
                                <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Name <FontAwesomeIcon icon={faSort} onClick={() => sortData('name')} /></th>
                                    <th className="py-3 px-6 text-left">Number</th>
                                    <th className="py-3 px-6 text-center">Contract<FontAwesomeIcon icon={faSort} onClick={() => sortStrings('amount')}/></th>
                                    <th className="py-3 px-6 text-center">Paid <FontAwesomeIcon icon={faSort} onClick={() => sortStrings('paid')}/></th>
                                    <th className="py-3 px-6 text-center">Notebook</th>
                                    <th className="py-3 px-6 text-center">Group</th>
                                    <th className="py-3 px-6 text-center">Comments</th>
                                    <th className="py-3 px-6 text-center">Status <FontAwesomeIcon icon={faSort} onClick={() => sortData('status')}/></th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                {
                                    contacts.map(rec => (
                                        <TableItem updateUser={updateUser} deleteUser={deleteUser} rec={rec} />
                                    ))
                                }
                                </tbody>
                            </table>
                            <button
                                className="inline-flex items-center m-4 px-4 py-1.5 border border-transparent text-xs font-medium
                                     rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                Add new contact
                            </button>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div
                                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="relative p-6 flex-auto">
                                                    <div className='grid lg:grid-cols-2 gap-6 mb-5'>
                                                        <div className='text-left'>
                                                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                                                            <input
                                                                name='name'
                                                                value={user.name}
                                                                onChange={handleChange}
                                                                type='text'
                                                                className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                                                placeholder='enter your name'
                                                            />
                                                        </div>
                                                        <div className='text-left'>
                                                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Phone Number</label>
                                                            <input
                                                                name='phone'
                                                                value={user.phone}
                                                                onChange={handleChange}
                                                                type="text"
                                                                className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                                                placeholder='enter your phone'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='grid lg:grid-cols-2 gap-6 mb-5'>
                                                        <div className='text-left'>
                                                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Contract Amount</label>
                                                            <input
                                                                name='amount'
                                                                value={user.amount}
                                                                onChange={handleChange}
                                                                type="text"
                                                                className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                                            />
                                                        </div>
                                                        <div className='text-left'>
                                                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Paid</label>
                                                            <input
                                                                name='paid'
                                                                value={user.paid}
                                                                onChange={handleChange}
                                                                type="text"
                                                                className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='text-left mb-5'>
                                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Notebook</label>
                                                        <input
                                                            name='notebook'
                                                            value={user.notebook}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                                        />
                                                    </div>
                                                    <div className="grid lg:grid-cols-3 gap-3 mb-5">
                                                        <div>
                                                            <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Group</p>
                                                            <Form.Control size="sm" as="select"
                                                                          name='group'
                                                                          className='border rounded-lg bg-white text-gray-600 px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                                          value={user.group}
                                                                          onChange={handleChange}
                                                            >
                                                                <option value="" disabled selected>sort by</option>
                                                                <option value="Morning">Morning</option>
                                                                <option value="Day">Day</option>
                                                                <option value="Evening">Evening</option>
                                                            </Form.Control>
                                                        </div>
                                                        <div>
                                                            <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Status</p>
                                                            <Form.Control size="sm" as="select"
                                                                          name='status'
                                                                          className='border bg-white text-gray-600 rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                                          value={user.status}
                                                                          onChange={handleChange}
                                                            >
                                                                <option value="" disabled selected>sort by</option>
                                                                <option value="Active">Active</option>
                                                                <option value="Completed">Completed</option>
                                                                <option value="Pending">Pending</option>
                                                            </Form.Control>
                                                        </div>
                                                        <div>
                                                            <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Gender</p>
                                                            <Form.Control size="sm" as="select"
                                                                          className='border bg-white text-gray-600 rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-100'
                                                                          name='gender'
                                                                          value={user.gender}
                                                                          onChange={handleChange}
                                                            >
                                                                <option value="" disabled selected>gender</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </Form.Control>
                                                        </div>
                                                    </div>
                                                    <div className='text-left mb-5'>
                                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Comment</label>
                                                        <input
                                                            name='comment'
                                                            value={user.comment}
                                                            onChange={handleChange}
                                                            type="message"
                                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"/>
                                                    </div>
                                                </div>
                                                {/*footer*/}
                                                <div
                                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        className="bg-green-400 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={onSubmit }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"> </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;