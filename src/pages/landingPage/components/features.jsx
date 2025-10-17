import React from 'react'
import IconAlarm from '../../../assets/icon-alarm.svg'
import IconFinancial from '../../../assets/icon-financial.svg'
import IconPaper from '../../../assets/icon-kertas.svg'
import IconStatistic from '../../../assets/icon-statistic.svg'


function Features(){

    const wrap = [
        {img : IconFinancial, title : "Budget Otomatis Berdasarkan UMK", paragraph : "Dapatkan rekomendasi alokasi pengeluaran yang pas dengan pendapatanmu."},
        {img : IconPaper, title : "Artikel Keuangan", paragraph : "Baca tips dan wawasan seputar keuangan biar makin paham cara ngatur uang dengan bijak."},
        {img : IconStatistic, title : "Laporan Keuangan Bulanan", paragraph : "Pantau hasil survei keuangan pengguna setiap bulan untuk tahu kondisi finansial terkini."},
        {img : IconFinancial, title : "Pengingat Keuangan", paragraph : "Jangan khawatir lupa bayar tagihan atau cicilan. Dapatkan pengingat otomatis agar keuanganmu tetap teratur."}
    ];

    return(
        <div className='flex flex-col justify-center gap-12 items-center h-screen w-full overflow-hidden'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-white text-5xl font-bold'>Features</h1>
                <p className='text-white text-2xl'>Fitur Finansaku bantu kamu kelola keuangan lebih mudah dan teratur.</p>
            </div>
            
            <div className='flex flex-wrap gap-x-16 justify-center items-center w-[1200px] gap-y-12'>
                {wrap.map((features, index) => (
                <div key={index} className='flex bg-white justify-center items-center rounded-xl h-[28vh] w-[60vh] gap-x-4 p-8'>
                    <img src={features.img} alt="Icon" className='h-[70%]'/>

                    <div className=' flex flex-col'>
                        <h2 className='font-bold text-2xl'>{features.title}</h2>
                        <p className='text-xl'>{features.paragraph}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Features