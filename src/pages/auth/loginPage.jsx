import React, { useEffect, useState } from "react";
import Background from "../../assets/bg-login.png";
import { NavLink, useNavigate } from "react-router-dom";
import LogoFinansaku from "../../assets/fix-Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../../api/authApi";
import { useUser } from "../../hooks/useUser";
import config from "../../config/script";
import { Loader2 } from "lucide-react";



function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { saveUser } = useUser();
    const [remember, setRemember] = useState(false);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const savedEmail = localStorage.getItem("savedEmail");
        const savedPassword = localStorage.getItem("savedPassword");

        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
        if (savedEmail || savedPassword) setRemember(true);
        }, []);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = "Email wajib diisi";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Format email tidak valid";
        }

        if (!password) {
            newErrors.password = "Password wajib diisi";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await login({ email, password });
            console.log(response.status)
            const body = await response.json();
            console.log(body);

            if (response.ok) {
                // delete just trying
                // localStorage.setItem("isLoggedIn", "true"); //
                // localStorage.setItem("user", JSON.stringify(body.data.user)); //

                if (remember) {
                    localStorage.setItem("savedEmail", email);
                } else {
                    localStorage.removeItem("savedEmail");
                }

                // optionally store user data if you want to show it later
                saveUser(body.data.user);

                // short delay for UX
                await sleep(1000);
                navigate("/dashboard");
            } else if (!response.ok) {
                const msg = body?.error || body?.message || "Email atau password salah";
                setErrors((prev) => ({ ...prev, general: msg }));
                return;
            }
            
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
  };

  return (
    <div className="flex h-screen w-full text-white">

        <div className="flex flex-col justify-center items-center w-1/2 bg-white text-black gap-8 px-8">
            <div className="bg-white m-12 w-full shadow-2xl flex flex-col justify-center items-center rounded-2xl py-8 max-w-md border border-gray-200">
                <div className="flex flex-col items-center justify-center gap-4 space-y-2">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="text-lg text-gray-700 mb-4"> Selamat datang kembali! Saatnya lanjut <br /> kelola keuanganmu dengan lebih mudah</p>
                </div>

                <form className="flex flex-col gap-4 w-3/4 max-w-sm" onSubmit={handleSubmit} >
                    <div className="flex flex-col text-left">
                        <label className="mb-2 font-semibold text-gray-800" htmlFor="userEmail" >Email </label>
                        <input autoComplete="email" type="email" id="userEmail" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Masukkan email"
                        className={`border ${ errors.email ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                        {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                    </div>

                    <div className="flex flex-col text-left relative">
                        <div className="flex justify-between items-center mb-2">
                            <label className="font-semibold text-gray-800" htmlFor="userPass"> Password </label>
                            <NavLink to="/forgotPassword" className="text-sm text-[#4567B0] hover:underline" > Lupa Password? </NavLink>
                        </div>

                        <div className="relative">
                            <input autoComplete="current-password" type={showPassword ? "text" : "password"} id="userPass" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Masukkan password" className={`border ${ errors.password ? "border-red-400" : "border-gray-400" } rounded-md px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                            <button type="button"  onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" >
                                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>
                        {errors.password && ( <p className="text-red-500 text-sm">{errors.password}</p>)}
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4" />
                        <label htmlFor="remember" className="text-gray-800 text-sm"> Simpan di perangkat ini </label>
                    </div>

                    {/* <button type="submit" disabled={loading}  className={`flex justify-center items-center gap-2 bg-[#1B263B] text-white font-semibold py-2 rounded-full transition  ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#213369]"}`} >
                        {loading ? "Login..." : "Login"}
                    </button> */}

                    <button type="submit" className="bg-[#1B263B] hover:bg-[#15224A] text-white font-semibold py-2 rounded-full transition flex justify-center items-center" disabled={loading}>
                        {loading ? (
                        <>
                            <Loader2 className="animate-spin mr-2 h-4 w-4" /> Login...
                        </>
                        ) : (
                            "Login"
                        )}
                    </button>

                    {errors.general && (<p className="text-red-500 text-sm text-center">{errors.general}</p>)}


                    <div className="flex items-center my-2">
                        <hr className="flex-grow border-gray-300" /> <span className="mx-2 text-gray-500 text-sm"> atau login dengan   </span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button onClick={() => window.location.href = `${config.BASE_URL}/auth/google`} className="w-24 flex items-center justify-center hover:bg-gray-100 py-2 rounded-lg transition">
                            <FcGoogle size={40} />
                        </button>
                    </div>

                    <p className="text-center text-gray-700 text-sm"> Belum punya akun? <NavLink to="/signUp"
                        className="text-[#4567B0] hover:underline ml-1" > Daftar di sini </NavLink>
                    </p>
                </form>
            </div>
        </div>

        <div className="relative w-1/2 h-full flex justify-center items-center">
            <img src={Background} alt="Background Finansaku" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 gap-2.5 flex flex-col items-start justify-around text-white">
                <img src={LogoFinansaku} alt="Logo Finansaku" className="mb-6 h-[60px]" />
                <h1 className="text-4xl font-bold mb-8 text-center"> Kelola keuanganmu <br /> capai impianmu </h1>
                <p className="text-lg text-white text-center"> Dari gaji ke alokasi kebutuhan, Finansaku <br /> mempermudahmu membagi uang dengan <br /> bijak tanpa repot menghitung manual. </p>
            </div>
        </div>
    </div>
  );
}

export default Login;
