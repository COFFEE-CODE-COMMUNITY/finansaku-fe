import React from 'react'
import ImageCalendar from '../../../assets/img-calendar.svg'
import {NavLink} from 'react-router-dom'

function DefaultPage(){
    return(
        <div className='w-[80%]'>
            <img src={ImageCalendar} alt="Icon" />
            <p className=''>Belum ada dashboard baru untuk kamu. Silakan isi survey <br/> terlebih dahulu <span className='text-blue-600'><NavLink>di sini</NavLink></span></p>

        </div>
    )
}

export default DefaultPage