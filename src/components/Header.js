import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-indigo-200 p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight text-indigo-900">CRM</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <NavLink to='/'
                           className="block mt-4 lg:inline-block lg:mt-0 text-indigo-900 hover:text-white mr-4">
                            Students
                        </NavLink>
                    </div>
                    <div>
                        <a href="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-400 hover:bg-white mt-4 lg:mt-0">Log In</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;