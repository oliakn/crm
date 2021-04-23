import React from 'react';
import {useForm} from "react-hook-form";
import {Form} from "react-bootstrap";
import {data} from "autoprefixer";

const AddForm = ({addUser, setIsShowForm, user}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = data => {
        addUser(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center'>
            <div className="bg-white shadow rounded-lg p-6 w-3/6 text-right">
                <div className='grid lg:grid-cols-2 gap-6 mb-5'>
                    <div className='text-left'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                        <input type="name" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                               placeholder='enter your name'
                               {...register("name", {required: true, pattern: /[A-Za-z]{3}/})}
                        /> {errors.name && <span className='text-pink-600'>*enter your name</span>}
                    </div>
                    <div className='text-left'>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Phone Number</label>
                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                               placeholder='enter your phone'
                               {...register("phone", {required: true})}
                        /> {errors.phone && <span className='text-pink-600'>*enter your phone</span>}
                    </div>
                </div>
                {/*<div className='grid lg:grid-cols-2 gap-6 mb-5'>*/}
                {/*    <div className='text-left'>*/}
                {/*        <label className="font-semibold text-sm text-gray-600 pb-1 block">Contract Amount</label>*/}
                {/*        <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"*/}
                {/*               {...register("amount", {required: true})}*/}
                {/*        /> {errors.amount && <span className='text-pink-600'>*enter your amount</span>}*/}
                {/*    </div>*/}
                {/*    <div className='text-left'>*/}
                {/*        <label className="font-semibold text-sm text-gray-600 pb-1 block">Paid</label>*/}
                {/*        <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"*/}
                {/*               {...register("paid", {required: true})}*/}
                {/*        /> {errors.amount && <span className='text-pink-600'>*enter your paid</span>}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='text-left mb-5'>*/}
                {/*    <label className="font-semibold text-sm text-gray-600 pb-1 block">Notebook</label>*/}
                {/*    <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"*/}
                {/*           {...register("notebook", {required: true})}*/}
                {/*    /> {errors.amount && <span className='text-pink-600'> </span>}*/}
                {/*</div>*/}
                {/*<div className="grid lg:grid-cols-3 gap-3 mb-5">*/}
                {/*    <div>*/}
                {/*        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Group</p>*/}
                {/*        <Form.Control size="sm" as="select"*/}
                {/*                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'>*/}
                {/*            <option value="morning">Morning</option>*/}
                {/*            <option value="day">Day</option>*/}
                {/*            <option value="evening">Evening</option>*/}
                {/*        </Form.Control>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Status</p>*/}
                {/*        <Form.Control size="sm" as="select"*/}
                {/*                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'*/}
                {/*                      {...register("status", {required: true})}*/}
                {/*        >*/}
                {/*            <option value="active">Active</option>*/}
                {/*            <option value="completed">Completed</option>*/}
                {/*            <option value="pending">Pending</option>*/}
                {/*        </Form.Control>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <p className='font-semibold text-sm text-gray-600 pb-1 text-left'>Gender</p>*/}
                {/*        <Form.Control size="sm" as="select"*/}
                {/*                      className='border rounded-lg px-3 py-2 mt-1 text-sm w-full focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative p-1 mb-5 w-full h-10'>*/}
                {/*            <option value="male">Male</option>*/}
                {/*            <option value="female">Female</option>*/}
                {/*        </Form.Control>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='text-left mb-5'>*/}
                {/*    <label className="font-semibold text-sm text-gray-600 pb-1 block">Comment</label>*/}
                {/*    <input type="message" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"/>*/}
                {/*</div>*/}
                <div className="border-t mt-6 pt-3">
                    <div className="inline-block  mt-2">
                        <button type="button"
                                className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50"
                                onClick={() => {
                                    setIsShowForm(false)
                                }}
                        >Close
                        </button>
                    </div>
                    <div className="inline-block mt-2">
                        <button
                            type="button"
                                className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md border border-green-600 hover:bg-green-50 ml-2"
                        >Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddForm