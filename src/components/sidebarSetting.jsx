import React from 'react'
import FinansakuLogo from '../assets/finanSaku-Logo.svg'
import {User, Info} from 'react-feather'
import {NavLink} from 'react-router-dom'
import ImagePerson from '../assets/person-img.svg'
import {LogOut} from 'react-feather'

function Sidebar(){

    return(
        <div className='bg-[#0D1B2A] border border-r-white/15 border-l-white/15 flex flex-col gap-4 h-screen'>
            <div className='flex justify-center items-center h-[100px]'>
                <h1 className='text-2xl font-semibold text-white'>Setting</h1>
            </div>

            <div className='text-white flex flex-col gap-6'>
                <NavLink to={'/setting'} className="flex gap-2.5 text-xl items-center justify-start ml-8"><User/>Profile</NavLink>
                <NavLink to={'/account-information'} className="flex gap-2.5 text-xl items-center justify-star ml-8"><Info/>Account Info</NavLink>
            </div>

        </div>
    )
}

export default Sidebar
