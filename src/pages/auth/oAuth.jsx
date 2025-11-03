import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OAuthSuccess() {
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
        localStorage.setItem('access_token', token)
        navigate('/dashboard') // redirect after saving token
        } else {
        navigate('/login')
        }
    }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg font-medium text-gray-600">
        Signing you in, please wait...
      </p>
    </div>
  )
}

// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import config from '../../api/authApi'

// export default function OAuthSuccess() {
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Cek ke server apakah cookie login valid
//     fetch(`${config.BASE_URL}/auth/check`, {
//       method: 'GET',
//       credentials: 'include', // penting: kirim cookie HttpOnly
//     })
//       .then(async res => {
//         if (res.ok) {
//           navigate('/dashboard') // cookie valid, redirect ke dashboard
//         } else {
//           navigate('/login') // cookie tidak valid
//         }
//       })
//       .catch(() => navigate('/login'))
//   }, [navigate])

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <p className="text-lg font-medium text-gray-600">
//         Signing you in, please wait...
//       </p>
//     </div>
//   )
// }
