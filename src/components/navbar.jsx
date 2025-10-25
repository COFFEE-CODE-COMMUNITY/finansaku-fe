import React from 'react';
import FinansakuLogo from '../assets/finansaku-logo.svg'
import {Home, Info, MessageSquare, Book} from 'react-feather'
import {NavLink} from 'react-router-dom'
import Finansaku from '../assets/finansaku.svg'

//sticky top-0 z-50
function Navbar(){
    
    return(
        <div className='flex py-4 bg-[#0D1B2A] justify-between fixed w-full z-50 px-16 items-center text-white h-[10vh] font-bold'>

            <div>
                <img src={Finansaku} alt="Finansaku Logo" className='h-[15rem]'/>
            </div>

            <div className='flex gap-16 justify-center items-center'>
                <a href="#home" className='flex gap-2.5'><Home/>Home</a>
                <a href="#Features" className='flex gap-2.5'><Info/>Features</a>
                <a href="#Faq" className='flex gap-2.5'><MessageSquare/>FAQ</a>
                <a href="#article" className='flex gap-2.5' ><Book/>Article</a>

                {/*<NavLink to="/Article" className='flex justify-center gap-2.5'><Book/>Article</NavLink> */}
            </div>

            <div className='flex gap-3'>
                <NavLink to="/login"  className='bg-[#415A77] border border-white rounded-2xl py-2 px-4 font-bold'>Login</NavLink>
                <NavLink to="/SignUp"  className='bg-[#778DA9] border border-white rounded-2xl py-2 px-4 font-bold'>Sign Up</NavLink>
            </div>


        </div>
    )
}

export default Navbar