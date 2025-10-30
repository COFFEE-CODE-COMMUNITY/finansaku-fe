import React, {useEffect} from 'react'
import Navbar from '../../components/navbar' 
import LandingPageIcon from '../../assets/landingPage.svg'
import {NavLink} from 'react-router-dom'
import Faq from '../../components/faq'
import Footer from '../../components/footer'
import Features from '../../components/features'
import ArticlePage from '../../components/article'

function LandingPage(){

    useEffect(() => {
            window.scrollTo(0,0)
        }, [])
    return(
        <>
            <Navbar/>
            <div id='home' className='flex justify-center items-center gap-24  h-screen'>

                <div className='text-white flex flex-col justify-center items-center h-full w-full'>
                    <div className='flex flex-col text-left w-auto gap-4'>
                        <h1 className='text-6xl font-bold mb-2.5'>Kelola uangmu <br></br> hidup lebih <br></br> terencana </h1>
                        <p>Dengan finansaku, budgeting jadi cepat dan <br /> praktis. Atur uangmu agar setiap rupiah digunakan <br />dengan bijak.</p>
                        <div className='bg-[#3A86FF] rounded-2xl border border-white py-2 px-4 mt-6 w-45 text-center'>
                            <NavLink to='/login' className='font-bold'>Atur finansialmu</NavLink>
                        </div>
                    
                    </div>
                </div>

                <div className='h-full w-full flex items-end justify-end relative'>
                    <img src={LandingPageIcon} alt="Icon" className='absolute top-20 right-25 z-10'/>
                </div>
            </div>

            {/* Pages Lain */}
            <Features/>
            <Faq/>
            <ArticlePage/>
            <Footer/>

        </>
    )
}

export default LandingPage