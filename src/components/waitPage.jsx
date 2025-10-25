import React from "react";
import Background from '../assets/bg-login.png'
import LogoFinansaku from '../assets/fix-Logo.svg'

function WaitPage(){
    
    return(
        <div className="flex h-screen w-full text-white overflow-hidden">
            <div className="flex h-screen w-1/2 flex-col gap-8 justify-center items-center text-black bg-white">
                <h1 className="font-bold text-5xl">Cek email kamu</h1>
                <p className="text-xl text-center">Kami telah mengirim tautan untuk mengatur <br/> ulang kata sandi ke alamat email kamu. <br/>Silakan buka email dan ikuti petunjuk di sana</p>
            </div>

            <div className="relative w-1/2 h-full flex justify-center items-center">
                <div>
                    <img src={Background} alt="Background Finansaku" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative z-2 gap-2.5 flex flex-col items-start justify-around text-white">
                        <img src={LogoFinansaku} alt="Logo Finansaku" className="mb-6 h-[60px]" />
                    <h1 className="text-4xl font-bold mb-8 text-center"> Kelola keuanganmu <br /> capai impianmu </h1>
                    <p className="text-lg text-white text-center">Dari gaji ke alokasi kebutuhan, Finansaku <br /> mempermudahmu membagi uang dengan <br /> bijak tanpa repot menghitung manual.  </p>
                </div>
            </div>
        </div>
    )
}

export default WaitPage