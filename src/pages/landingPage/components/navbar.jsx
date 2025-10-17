import React from 'react';
import FinansakuLogo from '../../../assets/finansaku-logo.svg'
import {Home, Info, MessageSquare, Book} from 'react-feather'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import Finansaku from '../../../assets/finansaku.svg'


function Navbar(){
    const location = useLocation();
    const Nav = useNavigate();

    const handleScrollorNav = (id) => {
        if(location.pathname === "/"){
            const section = document.querySelector(id);
            if (section){
                section.scrollIntoView({behavior: "smooth"});
            } 
        } else {
            Nav(`/${id}`);
        }
    }
    
    return(
        <div className='flex py-4 bg-[#0D1B2A] justify-between sticky top-0 z-2000000 px-16 items-center text-white h-[10vh] font-bold'>
            <div>
                <img src={Finansaku} alt="Finansaku Logo" className='h-[15rem]'/>
            </div>

            <div className='flex gap-16'>
                <button onClick={() => handleScrollorNav("#home")} className='flex justify-center gap-2.5'><Home/>Home</button>
                <button onClick={() => handleScrollorNav("#aboutUs")} className='flex justify-center gap-2.5'><Info/>About Us</button>
                <button onClick={() => handleScrollorNav("#Faq")} className='flex justify-center gap-2.5'><MessageSquare/>FAQ</button>
                <NavLink to="/Article" className='flex justify-center gap-2.5'><Book/>Article</NavLink>
            </div>

            <div className='flex gap-3'>
                <NavLink to="/login"  className='bg-[#415A77] border border-white rounded-2xl py-2 px-4 font-bold'>Login</NavLink>
                <NavLink to="/login"  className='bg-[#778DA9] border border-white rounded-2xl py-2 px-4 font-bold'>Sign Up</NavLink>
            </div>


        </div>
    )
}

export default Navbar