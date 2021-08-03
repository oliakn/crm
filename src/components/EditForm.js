import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import { useForm } from "react-hook-form"

const EditForm = ({rec, updateUser, setEditForm, handleChange}) => {
    const { register, handleSubmit , formState: {errors}, reset} = useForm();

    const onSubmit = () => {
        updateUser(rec.id, newName, newPhone, newAmount, newPaid, newNotebook, newGroup, newComment, newStatus)
        setEditForm(false)
        reset()
    }
    const [newName, setNewName] = useState(rec.name)
    const [newPhone, setNewPhone] = useState(rec.phone)
    const [newAmount, setNewAmount] = useState(rec.amount)
    const [newPaid, setNewPaid] = useState(rec.paid)
    const [newNotebook, setNewNotebook] = useState(rec.notebook)
    const [newGroup, setNewGroup] = useState(rec.group)
    const [newComment, setNewComment] = useState(rec.comment)
    const [newStatus, setNewStatus] = useState(rec.status)
    return (
        <>
            <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="relative p-6 flex-auto">
                                <div className='grid lg:grid-cols-2 gap-6 mb-5'>
                                    <div className='text-left'>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                                        <input
                                            name='name'
                                            defaultValue={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            type='text'
                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                            placeholder='enter your name'
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span className='text-red-500'>Enter your name</span>}
                                    </div>
                                    <div className='text-left'>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Phone
                                            Number</label>
                                        <input
                                            name='phone'
                                            defaultValue={newPhone}
                                            onChange={(e) => setNewPhone(e.target.value)}
                                            type="text"
                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                            placeholder='enter your phone'
                                            {...register("phone", { required: true })}
                                        />
                                        {errors.name && <span className='text-red-500'>Enter your phone</span>}
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-6 mb-5'>
                                    <div className='text-left'>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Contract
                                            Amount</label>
                                        <input
                                            name='amount'
                                            defaultValue={newAmount}
                                            onChange={(e) => setNewAmount(e.target.value)}
                                            type="text"
                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                            {...register("amount", { required: true })}
                                        />
                                        {errors.name && <span className='text-red-500'>Enter your contract amount</span>}
                                    </div>
                                    <div className='text-left'>
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Paid</label>
                                        <input
                                            name='paid'
                                            defaultValue={newPaid}
                                            onChange={(e) => setNewPaid(e.target.value)}
                                            type="text"
                                            className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                            {...register("paid", { required: true })}
                                        />
                                        {errors.name && <span className='text-red-500'>Enter your paid</span>}
                                    </div>
                                </div>
                                <div className='text-left mb-5'>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Notebook</label>
                                    <input
                                        name='notebook'
                                        defaultValue={newNotebook}
                                        onChange={(e) => setNewNotebook(e.target.value)}
                                        type="text"
                                        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                                        {...register("notebook", { required: true })}
                                    />
                                </div>
                                <div className="grid lg:grid-cols-3 gap-3 mb-5">
                                    <div>
                                        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Group</p>
                                        <Form.Control size="sm" as="select"
                                                      name='group'
                                                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                      defaultValue={newGroup}
                                                      onChange={(e) => setNewGroup(e.target.value)}                                            {...register("paid", { required: true })}
                                                      {...register("group")}
                                        >

                                            <option defaultValue="Morning">Morning</option>
                                            <option defaultValue="Day">Day</option>
                                            <option defaultValue="Evening">Evening</option>
                                        </Form.Control>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Status</p>
                                        <Form.Control size="sm" as="select"
                                                      name='status'
                                                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'
                                                      defaultValue={newStatus}
                                                      onChange={(e) => setNewStatus(e.target.value)}
                                                      {...register("status")}
                                        >
                                            <option defaultValue="Active">Active</option>
                                            <option defaultValue="Completed">Completed</option>
                                            <option defaultValue="Pending">Pending</option>
                                        </Form.Control>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Gender</p>
                                        <Form.Control size="sm" as="select"
                                                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-100'
                                                      name='gender'
                                                      defaultValue={rec.gender}
                                                      onChange={handleChange}
                                                      {...register("gender")}
                                        >
                                            <option defaultValue="male">Male</option>
                                            <option defaultValue="female">Female</option>
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className='text-left mb-5'>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Comment</label>
                                    <input
                                        name='comment'
                                        defaultValue={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
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
                                    onClick={() => setEditForm(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-green-400 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"> </div>
            </form>
        </>
    );
};


export default EditForm;