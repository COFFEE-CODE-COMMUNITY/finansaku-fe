import React from 'react'
import FinansakuLogo from '../../../assets/finanSaku-Logo.svg'
import {PieChart, Clipboard, Calendar, Clock, LogOut, Settings, Book, Bell} from 'react-feather'
import {NavLink, useNavigate} from 'react-router-dom'
import ImagePerson from '../../../assets/person-img.svg'

function Sidebar(){

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    return(
        <div className='bg-[#0D1B2A] flex flex-col gap-0 h-screen'>
           <div className='flex justify-center items-center h-[15%]'>
             <img src={FinansakuLogo} alt="" className='h-[300px]'/>
           </div>

            <div className='text-white flex flex-col gap-8'>
                <NavLink to="/dashboard" className="flex gap-2.5 text-xl items-center justify-start ml-8"><PieChart/>Dashboard</NavLink>
                <NavLink to="/survey" className="flex gap-2.5 text-xl items-center justify-star ml-8"><Clipboard/>Survey</NavLink>
                <NavLink to="/calendar" className="flex gap-2.5 text-xl items-center justify-start ml-8"><Calendar/>Calendar</NavLink>
                <NavLink className="flex gap-2.5 text-xl items-center justify-start ml-8"><Clock/>History</NavLink>
                <NavLink to="/article" className="flex gap-2.5 text-xl items-center justify-start ml-8"><Book/>Article</NavLink>
                <NavLink className="flex gap-2.5 text-xl items-center justify-start ml-8"><Bell/>Notifications</NavLink>
                <NavLink className="flex gap-2.5 text-xl items-center justify-start ml-8"><Settings/>Settings</NavLink>
            </div>

            <div className=' h-[100px] mt-auto flex flex-col items-center justify-center gap-6'>
                {/* <div className='flex items-center justify-start gap-4 pl-8'>
                    <img src={ImagePerson} alt="Image Profile" className="w-[20%] rounded-full" />
                    <p className='text-white text-lg'>Ucup Surucup</p>
                </div> */}

                <button onClick={handleLogOut} className='bg-white flex justify-start items-center w-[250px] text-red-600 p-3 text-center gap-4 rounded-2xl text-xl hover:bg-red-300  hover:outline-red-900/50 hover:outline-4'><LogOut/> Log Out</button>
            </div>
        </div>
    )
}

export default Sidebar
