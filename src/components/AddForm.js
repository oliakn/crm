import React from 'react';
import {Form} from "react-bootstrap";
import { useForm } from "react-hook-form";


const AddForm = ({addUser, setShowModal, user, handleChange}) => {

    const { register, handleSubmit , formState: {errors}, reset} = useForm();

    const onSubmit = data => {
        addUser(data)
        setShowModal(false)
        reset()
    }



    return (
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
                                                  className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                  value={user.group}
                                                  onChange={handleChange}
                                    >

                                        <option value="morning">Morning</option>
                                        <option value="day">Day</option>
                                        <option value="evening">Evening</option>
                                    </Form.Control>
                                </div>
                                <div>
                                    <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Status</p>
                                    <Form.Control size="sm" as="select"
                                                  name='status'
                                                  className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                  value={user.status}
                                                  onChange={handleChange}
                                    >
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                        <option value="pending">Pending</option>
                                    </Form.Control>
                                </div>
                                <div>
                                    <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Gender</p>
                                    <Form.Control size="sm" as="select"
                                                  className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-100'
                                                  name='gender'
                                                  value={user.gender}
                                                  onChange={handleChange}
                                    >
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
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

    )
}

export default AddForm