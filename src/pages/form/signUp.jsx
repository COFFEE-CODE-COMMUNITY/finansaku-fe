
import {Jwt} from '../utils/jwt'
import {SignUp} from '../api/authApi'
import React, {useState} from "react";
import Background from '../../assets/bg-login.png'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoFinansaku from '../../assets/fix-Logo.svg'
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff } from "lucide-react"
import { useUser } from "../hooks/useUser";


function Register() {

    // yang di comment mau nyoba yang taskify dulu


    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [userName, setUserName] = useState("") 
    // const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({}); // for errors
    const [loading, setLoading] = useState(false);
    const {saveUser} = useUser()

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const validasi = () => {
        const newErrors = {}

        if (!userName) {
            newErrors.userName = "Username wajib diisi"
        } else if (userName.includes(" ")) {
            newErrors.userName = "Tidak boleh menggunakan spasi!"
        }

        // if (!name){
        //     newErrors.name = "Name Wajib Diisi"
        // }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = "Email wajib diisi";
        } else if (!emailRegex.test(email)) {
             newErrors.email = "Format email tidak valid";
        }

        if (!password) {
            newErrors.password = "Password wajib diisi!"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validasi()){
            return
        }

        setLoading(true)
        try {
            await sleep(1000)
            const response = await SignUp({username: userName, email, password})
            const body = await response.json()
            console.log(body)

            if (response.status === 201){ // if sukses
                localStorage.setItem("Token", body.data.token);
                await sleep(1000)
                const payload = Jwt(body.data.token)
                saveUser(payload)
                navigate('/dashboard')
            } else {
                if (response.status === 409 && body.errors.includes('userName')){
                    setErrors({ userName: 'Username sudah digunakan' })
                }
            }

        } catch (err){
            console.log(`Error = ${err}`)
        } finally {
            setLoading(false)
        }
    } 


    return (
        <div className="flex h-screen w-full text-white overflow-hidden">
            <div className="flex flex-col justify-center items-center w-1/2 bg-white text-black px-8">
                <div className="text-center">
                    <h1 className="text-5xl mb-4 font-bold ">Sign Up</h1>
                    <p className="text-lg text-gray-700">Yuk, lengkapi data kamu untuk <br/>mulai perjalanan finansialmu!</p>
                </div>

                <form className="flex flex-col w-3/4 max-w-sm" onSubmit={handleSubmit}>
                    <div className="w-[410px] flex flex-col gap-2.5 p-4">
                        <div className="flex flex-col text-left">
                            <label className=" font-semibold text-gray-800" htmlFor="userName">Username:</label>
                            <input type="text" onChange={(e) => setUserName(e.target.value)} id="userName" value={userName} placeholder="Gunakan awalan huruf kapital dan tanpa spasi!" className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            {errors.userName && (<p className="text-red-500 text-xs">{errors.userName}</p>)}
                        </div>

                        {/* <div className="flex flex-col text-left">
                            <label className="font-semibold text-gray-800" htmlFor="name">Name:</label>
                            <input type="text" onChange={(e) => (setName(e.target.value))} value={name} id="name" placeholder="Chen Hao" className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            {errors.name && (<p className="text-red-500 text-xs">{errors.name}</p>)}
                        </div> */}

                        <div className="flex flex-col text-left">
                            <label className="font-semibold text-gray-800" htmlFor="userEmail">Email:</label>
                            <input type="email" onChange={(e) => (setEmail(e.target.value))} value={email} id="userEmail" placeholder=" Nama@gmail.com" className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            {errors.email && (<p className="text-red-500 text-xs">{errors.email}</p>)}
                        </div>

                        <div className="flex flex-col text-left relative">
                            <div className="flex justify-between items-center">
                                <label className="font-semibold text-gray-800" htmlFor="userPass">Password :</label>
                            </div>

                            <div className="relative flex items-center">
                                <input type={showPassword ? "text" : "password"} id="userPass" onChange={(e) => setPassword(e.target.value)}   value={password} placeholder="Masukkan password" className={`border ${ errors.password ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                                <button type="button"  onClick={() => setShowPassword(!showPassword)} className="absolute right-4" >
                                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                </button>
                            </div>
                            {errors.password && (<p className="text-red-500">{errors.password}</p>)}
                        </div>

                    </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="h-4 w-4" />
                            <label htmlFor="remember" className="text-gray-800"> Saya setuju dengan kebijakan privasi & syarat layanan finansaku</label>
                        </div>

                        <div className="flex justify-center items-center m-2.5">
                            <NavLink><p className="text-[#4567B0] text-sm hover:underline">Kebijakan Privasi & Syarat Layanan</p></NavLink>
                        </div>

                    <button type="submit" className={` text-white font-semibold py-2 rounded-full transition ${loading ? "bg-[#1B263B]" : "bg-[#22304a] hover:bg-[#15224A]"}`} >
                        {loading ? "Sign Up..." : "Sign Up"}
                    </button>

                    <div className="flex items-center">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500 text-sm">atau login dengan</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="w-24 flex items-center justify-center  hover:bg-gray-100 font-semibold py-2 rounded-lg text-lg transition"><FcGoogle size={30} /></button>
                    </div>

                    <p className="text-center text-gray-700 text-sm">Sudah punya akun?
                        <NavLink to={"/Login"} className="text-[#4567B0] hover:underline">  Daftar di sini</NavLink>
                    </p>
                </form>
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
    );
}

export default Register
