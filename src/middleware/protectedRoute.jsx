import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {verify} from '../api/authApi'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await verify()
                if (response.ok){
                    setIsValid(true)
                } else {
                    setIsValid(false)
                    navigate('/login', {replace: true}) // replace true itu agar si usernya tidak bisa back ke halaman sebelumnya jd cup di navigate login
                }
            } catch(error){
                console.log("Error : ", error)
                navigate('/login', {replace: true})
            }
        }
        verifyToken()
    }, [navigate])

    if(!isValid){
        return null // blm verif jangan ditampilin dulu pagenya
    }

    return <Outlet /> // kalo valid tampilin pagenya
}

export default ProtectedRoute