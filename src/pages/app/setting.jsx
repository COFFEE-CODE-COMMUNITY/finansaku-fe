import React from "react";
import { useUser } from "../../hooks/useUser"
import Image from '../../assets/person-img.svg'
import {X} from "lucide-react"
import { useNavigate } from "react-router-dom";

function Setting(){
    const {user, loading} = useUser()
    const navigate = useNavigate()

    console.log(user)
    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen text-white">
            <p>Loading...</p>
        </div>
        );
    }

    if (!user) {
        return (
        <div className="flex justify-center items-center h-screen text-white">
            <p>User tidak ditemukan</p>
        </div>
        );
    }

    const handleX = (e) => {
        e.preventDefault()
        
        navigate('/dashboard')
    }

    return(
        <>
        <div className="flex flex-col justify-center relative items-center">
            <div className=" flex absolute top-0 right-24">
                <button onClick={handleX} className="text-gray-400 border border-white rounded-full hover:text-white transition-colors p-2"><X /></button>
            </div>

            <div className="bg-blue-900 w-[800px] h-[150px] rounded-t-xl relative flex justify-start pl-12">
                <img src={Image} alt="UserImage" className="h-32 w-fit rounded-full absolute -bottom-12 border-4 border-white shadow-md"/>
            </div>

            <div className="bg-white flex p-4 flex-col rounded-b-xl w-[800px] h-[360px]">
                <div className="mt-18">
                    <div className="border p-2.5 m-2.5 rounded-lg border-black">
                        <h3 className="pl-2 font-semibold">Username</h3>
                        <p className="pl-2.5">{user.username}</p>
                    </div>

                    <div className="border p-2.5 m-2.5 rounded-lg border-black">
                        <h3 className="pl-2 font-semibold">Name</h3>
                        <p className="pl-2.5">{user.name}</p>
                    </div>

                    <div className="border p-2.5 m-2.5 rounded-lg border-black">
                        <h3 className="pl-2 font-semibold">Email</h3>
                        <p className="pl-2.5">{user.email}</p>
                    </div>
                </div>
            </div>

            <div className="w-[800px] flex justify-end mt-8">
                <button className="bg-[#487BEA] text-white px-4 py-2 rounded-xl hover:bg-[#3b68c9]">Edit Profile</button>
            </div>
        </div>
    </>
    )
}

export default Setting