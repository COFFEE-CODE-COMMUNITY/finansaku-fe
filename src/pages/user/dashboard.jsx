import React from 'react'
import ImageCalendar from '../../assets/img-calendar.svg'
import {NavLink} from 'react-router-dom'
import Sidebar from './components/sidebar'
import Topbar from './components/topBar'

function DefaultPage(){
    return(
        <>
        <div className='flex h-screen'>
            <Sidebar/>
            <div className='w-[80%] flex flex-col justify-center items-center'>
                 <Topbar title="Dashboard" />

                <div>
                    <img src={ImageCalendar} alt="Icon" className='h-[30%]'/>
                    <p className='text-center text-lg text-white'>Belum ada dashboard baru untuk kamu. Silakan isi survey <br/> terlebih dahulu <span className='text-blue-600'><NavLink>di sini</NavLink></span></p>

                </div>
            </div>
        </div>
        </>
    )
}

export default DefaultPage