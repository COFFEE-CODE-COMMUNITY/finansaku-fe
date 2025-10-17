import React from 'react'
import Image from '../../assets/aboutUs.svg'
import Background from '../../assets/Rectangle.svg'

function AboutUs(){
    const cardAboutUs = [
        {
            id : 1,
            title : "Mudah mengelola keuangan",
            paragraph : "Finansaku membantu kamu mengatur pendapatan dan pengeluaran dengan cepat. Dapatkan alokasi anggaran secara otomatis hanya lewat website"
        },
        {
            id : 2,
            title : "Budgeting tanpa ribet",
            paragraph : "Masukkan penghasilanmu, dan finansaku akan menampilkan rekomendasi alokasi anggaran secara instan. Hidup lebih terencana tanpa stress finansial."
        },
        {
            id : 3,
            title : "Cerdas mengatur uang",
            paragraph : "Gunakan finansaku untuk membagi pendapatanmu dengan bijak. Dapatkan panduan alokasi anggaran instan agar hidup lebih nyaman dan terencana"
        }
    ];

    return(
        <>
            <div id='aboutUs' className='flex justify-between h-screen w-full'>
                <div className='flex flex-col justify-between items-center text-white w-[56.5%'>
                    <h1 className='text-5xl font-bold mt-35'>About Us</h1>
                    <div className='flex items-end'>
                        <img src={Image} alt="Image About us" className='h-[90%]'/>
                    </div>
                </div>

                <div className='relative h-full w-[43.7%]'>
                    <div className='absolute inset-0 z-10'>
                        <img src={Background} alt="Background Blue" className='h-full w-full object-cover'/>
                    </div>

                    <div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-full p-8 z-20 flex flex-col gap-8'>
                        {cardAboutUs.map((card) =>(
                            <div key={card.id} className='text-black bg-white p-6 rounded-lg shadow-2xl '>
                                <h2 className='text-3xl font-bold mb-4'>{card.title}</h2>
                                <p>{card.paragraph}</p>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs