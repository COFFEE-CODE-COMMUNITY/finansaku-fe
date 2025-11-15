import React from 'react'
import ImageCalendar from '../assets/img-calendar.svg'
import {NavLink} from 'react-router-dom'

function DefaultPage(){
  return(
    <div className='flex justify-center relative items-center '>
        <div className='flex flex-col absolute top-24 items-center justify-center'>
            <img src={ImageCalendar} alt="Icon" className='w-64 h-auto'/>
            <p className='text-center text-lg text-white'>Lihat gambaran keuanganmu di sini. Mulai dari alokasi tiap kategori hingga notes dalam kalender. <br/>Silahkan isi Survey terlebih dahulu <span className='text-blue-600'>
              <NavLink to="/survey">di sini</NavLink></span>
            </p>
        </div>
    </div>

  )
}

export default DefaultPage;
