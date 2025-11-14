import {SignUp} from '../../api/authApi'
import React, {useState} from "react";
import Background from '../../assets/bg-login.png'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import LogoFinansaku from '../../assets/fix-Logo.svg'
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff } from "lucide-react"
import { useUser } from "../../hooks/useUser";
import config from '../../config/script';
import { Loader2 } from "lucide-react";
import toast from 'react-hot-toast';


function Register() {
    // yang di comment mau nyoba yang taskify dulu

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    // const [userName, setUserName] = useState("") 
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({}); // for errors
    const [loading, setLoading] = useState(false);
    const {saveUser} = useUser()
    const location = useLocation();
    const [formData, setFormData] = useState(location.state ?? { name: "", username: "", email: "", password: "" });
    const [agreePrivacy, setAgreePrivacy] = useState(false);
    const [agreePrivacyError, setAgreePrivacyError] = useState(false);
    const [isGoogleLogin, setIsGoogleLogin] = useState(false);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // validation for answering the question
    const validasi = () => {
        const newErrors = {}

        if (!formData.username) {
            newErrors.username = "Username wajib diisi"
        } else if (formData.username.includes(" ")) {
            newErrors.username = "Tidak boleh menggunakan spasi!"
        }

        if (!formData.name){
            newErrors.name = "Name Wajib Diisi"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            newErrors.email = "Email wajib diisi";
        } else if (!emailRegex.test(formData.email)) {
             newErrors.email = "Format email tidak valid";
        }

        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        if (!formData.password) {
            newErrors.password = "Password wajib diisi!"
        // } else if(!passwordRegex.test(password)){
            // newErrors.password = "Password harus minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    // clicked submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, username, email, password } = formData;

        if (!validasi()){
            return
        }

        if (!agreePrivacy) {
            setAgreePrivacyError(true);
            return; 
        } else {
            setAgreePrivacyError(false);
        }


        // if (!agreePrivacy) {
        // toast.error("Kamu harus menyetujui Privacy Policy dan Terms of Service sebelum membuat akun", {
        //     position: "top-center",
        //     autoClose: 3000,
        //     theme: "colored",
        // });
        // return

        setLoading(true)
        try {
            await sleep(1000)
            const response = await SignUp({ name, username, email, password })
            const body = await response.json()
            console.log(body)

            if (response.status === 201){
               
                saveUser(body.data.user) // simpan data user
                toast.success("create account successfully", {autoClose: 2000,})
                await new Promise((res) => setTimeout(res, 1500));
                navigate('/login')
            } else if (!response.ok) {
                const msg = body?.error || body?.message || "Email atau password salah";
                setErrors((prev) => ({ ...prev, general: msg }));

                toast.error(msg, {position: "top-center",  autoClose: 3000,  theme: "colored",});

                return;
            }

        } catch (err){
            console.log(`Error = ${err}`)
        } finally {
            setLoading(false)
        }
    } 

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }

    const handlePrivacy = (e) => {
        e.preventDefault();
        // send the data to privacy policy
        navigate("/privacy-police", { state: formData });
    };

    const handleGoogleLogin = () => {
        setErrors({});
        setAgreePrivacyError(false)
        window.location.href = `${config.BASE_URL}/auth/google`
        setIsGoogleLogin(true)
    }



    return (
        <div className="flex min-h-screen w-full text-white overflow-y-auto scrollbar-none">
            <div className="flex flex-col p-y-24 justify-center items-center w-1/2 bg-white text-black relative z-10">
                <div className="bg-white m-12 w-full shadow-2xl flex flex-col justify-center items-center rounded-2xl py-2 max-w-md border border-gray-200"> 
                    <div className="flex flex-col items-center justify-center gap-8">
                        <h1 className="text-5xl font-bold mt-4  ">Sign Up</h1>
                        <p className="text-lg text-gray-700">Let's complete your data to<br/>start your financial journey!</p>
                    </div>

                    <form className="flex flex-col w-4/4 p-8 max-w-sm" onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col gap-2.5 p-4">
                            <div className="flex flex-col text-left">
                                <label className=" font-semibold text-gray-800" htmlFor="userName">Username:</label>
                                <input onChange={(e) => setFormData({ ...formData, username: e.target.value })} autoComplete='username' type="text" value={formData.username} placeholder="chenhao" className={`border ${!isGoogleLogin && errors.username ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`}/>
                                { !isGoogleLogin && errors.username && (<p className="text-red-500 text-xs">{errors.username}</p>)}
                            </div>

                            <div className="flex flex-col text-left">
                                <label className="font-semibold text-gray-800" htmlFor="name">Name:</label>
                                <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} autoComplete='name' type="text" value={formData.name} id="name" placeholder="Chen Hao" className={`border ${!isGoogleLogin && errors.name ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                                {!isGoogleLogin && errors.name && (<p className="text-red-500 text-xs">{errors.name}</p>)}
                            </div>

                            <div className="flex flex-col text-left">
                                <label className="font-semibold text-gray-800" htmlFor="userEmail">Email:</label>
                                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} autoComplete='email' type="email" value={formData.email} id="userEmail" placeholder=" Nama@gmail.com" className={`border ${!isGoogleLogin && errors.email ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`}/>
                                {!isGoogleLogin && errors.email && (<p className="text-red-500 text-xs">{errors.email}</p>)}
                            </div>

                            <div className="flex flex-col text-left relative">
                                <div className="flex justify-between items-center">
                                    <label className="font-semibold text-gray-800" htmlFor="userPass">Password :</label>
                                </div>

                                <div className="relative flex items-center">
                                    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type={showPassword ? "text" : "password"} autoComplete='current-password' id="userPass" value={formData.password} placeholder="*********" className={`border ${!isGoogleLogin && errors.password ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                                    <button type="button"  onClick={() => setShowPassword(!showPassword)}  className="absolute right-4" >
                                        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                    </button>
                                </div>
                                {!isGoogleLogin && errors.password && (<p className="text-red-500 text-xs">{errors.password}</p>)}
                            </div>

                        </div>

                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" id="remember"  checked={agreePrivacy}  className="h-6 w-6 border" onChange={(e) => setAgreePrivacy(e.target.checked)}/>
                            <label htmlFor="remember" className={`${!isGoogleLogin && agreePrivacyError ? "text-red-500" : "text-gray-800"}`}>I agree with the privacy policy and terms of service of Finansaku.</label>
                        </div>

                        <div className="flex justify-center items-center mt-4">
                            <NavLink  onClick={handlePrivacy}><p className="text-[#4567B0] text-sm hover:underline">Privacy Policy & Terms of Service</p></NavLink>
                        </div>

                        <button type="submit" className="bg-[#1f3167] hover:bg-[#1B263B] text-white font-semibold py-2.5 rounded-full transition flex justify-center items-center m-4" disabled={loading}>
                            {loading ? (
                            <>
                                <Loader2 className="animate-spin mr-2 h-4 w-4" /> Sign Up
                            </>
                            ) : ( "Sign Up" )}
                        </button>

                        <div className="flex items-center">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500 text-sm">or log in with</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <div className="flex justify-center items-center">
                            <button onClick={handleGoogleLogin} className="w-24 flex items-center justify-center  hover:bg-gray-100 font-semibold py-2 rounded-lg text-lg transition m-2.5"><FcGoogle size={30} /></button>
                        </div>

                        <p className="text-center text-gray-700 text-sm">Already have an account?
                            <NavLink to={"/login"} className="text-[#4567B0] hover:underline"> Log in here.</NavLink>
                        </p>
                    </form>
                </div>
            </div>

            <div className="relative w-1/2 min-h-screen flex justify-center items-center">
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

// if the data diambil terpisah tanpa form data : onChange={(e) => setPassword(e.target.value)}   value={password} 
export default Register
