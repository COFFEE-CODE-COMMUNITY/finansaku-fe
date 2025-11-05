// import React from "react";
// import Background from '../assets/bg-login.png'
// import LogoFinansaku from '../assets/fix-Logo.svg'

// function WaitPage(){
    
//     return(
//         <div className="flex h-screen w-full text-white overflow-hidden">
//             <div className="flex h-screen w-1/2 flex-col gap-8 justify-center items-center text-black bg-white">
//                 <h1 className="font-bold text-5xl">Cek email kamu</h1>
//                 <p className="text-xl text-center">Kami telah mengirim tautan untuk mengatur <br/> ulang kata sandi ke alamat email kamu. <br/>Silakan buka email dan ikuti petunjuk di sana</p>
//             </div>

//             <div className="relative w-1/2 h-full flex justify-center items-center">
//                 <div>
//                     <img src={Background} alt="Background Finansaku" className="absolute inset-0 w-full h-full object-cover" />
//                 </div>
//                 <div className="relative z-2 gap-2.5 flex flex-col items-start justify-around text-white">
//                         <img src={LogoFinansaku} alt="Logo Finansaku" className="mb-6 h-[60px]" />
//                     <h1 className="text-4xl font-bold mb-8 text-center"> Kelola keuanganmu <br /> capai impianmu </h1>
//                     <p className="text-lg text-white text-center">Dari gaji ke alokasi kebutuhan, Finansaku <br /> mempermudahmu membagi uang dengan <br /> bijak tanpa repot menghitung manual.  </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WaitPage

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../config/script' // pastikan ini ada dan benar BASE_URL-nya

export default function VerifyEmail() {
  const [status, setStatus] = useState('Sedang memverifikasi email...')
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (!token) {
      setStatus('❌ Token verifikasi tidak ditemukan.')
      return
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(`${config.BASE_URL}/auth/verify-email?token=${token}`, {
          method: 'GET',
        })

        if (response.ok) {
          setStatus('✅ Email kamu berhasil diverifikasi! Kamu akan diarahkan ke halaman login...')
          setTimeout(() => navigate('/login'), 3000)
        } else {
          const data = await response.json()
          setStatus(`❌ Verifikasi gagal: ${data.message || 'Token tidak valid.'}`)
        }
      } catch (error) {
        console.error(error)
        setStatus('❌ Terjadi kesalahan saat memverifikasi email.')
      }
    }

    verifyEmail()
  }, [navigate])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Verifikasi Email</h2>
      <p>{status}</p>
    </div>
  )
}
