import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaCodeBranch
} from "react-icons/fa";
import { 
    TiChartArea,
    TiBusinessCard,
    TiInputChecked,
    TiInputCheckedOutline,
    TiKeyboard,
    TiUser,
    TiThList


 } from "react-icons/ti";
import { NavLink, useNavigate } from 'react-router-dom';


const Sidebar = ({ children }) => {

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <TiChartArea />
        },
        {
            path: "/allrequests",
            name: "Requests",
            icon: <TiThList />
        },
        {
            path: "/manager",
            name: "Manager",
            icon: <TiBusinessCard />
        },
        {
            path: "/tech",
            name: "Tech",
            icon: <TiKeyboard />
        },
        {
            path: "/admin",
            name: "Admin",
            icon: <TiUser />
        },
        {
            path: "/websites",
            name: "Websites",
            icon: <TiInputCheckedOutline />
        },
        {
            path: "/donewebsites",
            name: "Done Websites",
            icon: <TiInputChecked />
        },
    ]


    const navigate = useNavigate();
    const userLogOut = () => {
        localStorage.clear('auth-token');
        navigate('/login', { replace: true });
    }

    return (
        <div className="flex">
            <div className=" bg-[#FFF5F0] text-white h-full p-2 border-solid border-r-2 border-slate-400 w-[240px]">
                <div class="flex justify-center mt-[-25px] -mb-[10px]">
                    <img class="w-36 h-16 mt-4" src="/Fulllogo.png" alt="" />
                </div>
                <div className="">

                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="flex text-black px-3 py-1 gap-1 my-3 transition-all hover:bg-slate-900 hover:text-white hover:rounded-md" >
                            <div style={{fontSize:"25px"}} className="mx-2 mt-1 ">{item.icon}</div>
                            <div className="text-xl">{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
                <div className=' text-sm text-white px-6 hover:bg-red-600 py-2 mr-2 text-center border-red mx-3 bg-[#c3423f] border-1 rounded-xl font-bold uppercase border-black cursor-pointer'>
                    <p className='cursor-pointer hover:font-bold hover:text-gray-300 ease-in duration-100' title='Log out' onClick={userLogOut}>Logout</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;