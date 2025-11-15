import React from 'react'
import FinansakuLogo from '../assets/finanSaku-logo.svg'
import {PieChart, Clipboard, Calendar, Clock, LogOut, Settings, Book, Bell} from 'react-feather'
import {NavLink, useNavigate} from 'react-router-dom'
import { useUser } from "../hooks/useUser";
import toast from 'react-hot-toast'

function Sidebar(){

    const navigate = useNavigate()
    const { clearUser } = useUser() 
    const { user } = useUser()

    const handleLogOut = async() => {
        await clearUser()
        toast.success("logout successful", {autoClose: 2000,})
        navigate('/login')
        localStorage.removeItem(`reminders_${user.id}`);
    }
    return(
        <div className='bg-[#0D1B2A] flex flex-col gap-4 h-screen'>
           <div className='flex justify-center items-center h-[100px]'>
                <img src={FinansakuLogo} alt="" className='h-[300px]'/>
           </div>

            <div className='text-white flex flex-col gap-6'>
                <NavLink to="/dashboard" className="flex gap-2.5 text-xl items-center justify-start ml-8"><PieChart/>Dashboard</NavLink>
                <NavLink to="/survey" className="flex gap-2.5 text-xl items-center justify-star ml-8"><Clipboard/>Survey</NavLink>
                <NavLink to="/calendar" className="flex gap-2.5 text-xl items-center justify-start ml-8"><Calendar/>Calendar</NavLink>
                <NavLink to={'/history'} className="flex gap-2.5 text-xl items-center justify-start ml-8"><Clock/>History</NavLink>
                <NavLink to="/article" className="flex gap-2.5 text-xl items-center justify-start ml-8"><Book/>Article</NavLink>
                <NavLink to={'/notification'} className="flex gap-2.5 text-xl items-center justify-start ml-8"><Bell/>Notifications</NavLink>
                <NavLink to={'/setting'} className="flex gap-2.5 text-xl items-center justify-start ml-8"><Settings/>Settings</NavLink>
            </div>

            <div className=' h-[100px] mt-auto flex flex-col items-center justify-center gap-6'>
                {/* <div className='flex items-center justify-start gap-4 pl-8'>
                    <img src={ImagePerson} alt="Image Profile" className="w-[20%] rounded-full" />
                    <p className='text-white text-lg'>Ucup Surucup</p>
                </div> */}

                {/* <button onClick={handleLogOut} className='bg-[#DC2626] flex border border-white justify-start items-center w-[200px] text-white p-3 text-center gap-4 rounded-2xl text-xl hover:bg-[#ba2121]'><LogOut/> Log Out</button> */}

                <button  onClick={handleLogOut}  className='bg-[#DC2626] flex border border-white justify-center items-center w-[250px] text-white p-3 gap-4 rounded-2xl text-xl hover:bg-[#ba2121]'><LogOut/> Log Out</button>

            </div>
        </div>
    )
}

export default Sidebar
