import React from 'react'
import FinansakuLogo from '../../../assets/finanSaku-Logo.svg'
import {PieChart, Clipboard, Calendar, Clock, LogOut} from 'react-feather'
import {NavLink} from 'react-router-dom'
import ImagePerson from '../../../assets/person-img.svg'

function Sidebar(){
    return(
        <div className='bg-[#0D1B2A] flex flex-col gap-0 w-[20%] h-screen'>
           <div className='flex justify-center items-center h-[20%]'>
             <img src={FinansakuLogo} alt=""/>
           </div>

            <div className='text-white flex flex-col gap-12'>
                <NavLink to="/" className="flex gap-2.5 text-2xl items-center justify-start ml-8"><PieChart/>Dashboard</NavLink>
                <NavLink to="/survey" className="flex gap-2.5 text-2xl items-center justify-star ml-8"><Clipboard/>Survey</NavLink>
                <NavLink to="/calendar" className="flex gap-2.5 text-2xl items-center justify-start ml-8"><Calendar/>Calendar</NavLink>
                <NavLink to="/clock" className="flex gap-2.5 text-2xl items-center justify-start ml-8"><Clock/>History</NavLink>
            </div>

            <div className='bg-[#152a40] h-[20%] mt-auto flex flex-col items-center justify-center gap-4'>
                <div className='bg-white w-[250px] p-3 rounded-xl'>
                    <p className='text-center font-bold'>Hallo World</p>
                </div>

                <button className='bg-white flex justify-start items-center w-[250px] text-red-600 p-3 text-center gap-4 rounded-2xl hover:bg-red-300 hover:outline-red-900/50 hover:outline-4 text-xl '><LogOut/> Log Out</button>
            </div>
        </div>
    )
}

export default Sidebar
