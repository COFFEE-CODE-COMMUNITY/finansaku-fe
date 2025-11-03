import React from 'react'
import ImageCalendar from '../assets/img-calendar.svg'
import {NavLink} from 'react-router-dom'

function DefaultPage(){
  return(
    <div className='flex justify-center h-full items-center '>
        <div className='flex flex-col items-center justify-center'>
            <img src={ImageCalendar} alt="Icon" className='w-64 h-auto'/>
            <p className='text-center text-lg text-white'>
            Belum ada dashboard baru untuk kamu. Silakan isi survey <br/>
            terlebih dahulu <span className='text-blue-600'>
            <NavLink to="/survey">di sini</NavLink></span>
            </p>
        </div>
    </div>

  )
}

export default DefaultPage;
