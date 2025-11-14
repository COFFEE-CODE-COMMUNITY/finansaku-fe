import React from 'react'
import ImageCalendar from '../assets/img-calendar.svg'
import {NavLink} from 'react-router-dom'

function DefaultSurveyPage(){
  return(
    <div className='flex justify-center relative items-center '>
        <div className='flex absolute top-24 flex-col items-center justify-center'>
            <img src={ImageCalendar} alt="Icon" className='w-64 h-auto'/>
            <p className='text-center text-lg text-white'>Silakan isi survey <br/>terlebih dahulu <span className='text-blue-600'>
                <NavLink to="/survey">di sini</NavLink></span>
            </p>
        </div>
    </div>

  )
}

export default DefaultSurveyPage;
