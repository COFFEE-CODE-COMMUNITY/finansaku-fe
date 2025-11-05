import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verify } from '../../api/authApi'

export default function OAuthSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    verify()
      .then(() => navigate('/dashboard'))
      .catch(() => navigate('/login'))
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg font-medium text-gray-600">
        Signing you in, please wait...
      </p>
    </div>
  )
}
