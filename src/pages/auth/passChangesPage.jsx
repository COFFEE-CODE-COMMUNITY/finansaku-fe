import React, { useState } from "react";
import Background from '../../assets/bg-login.png'
import LogoFinansaku from '../../assets/fix-Logo.svg'
import { Eye, EyeOff } from "lucide-react";
import { useNavigate} from 'react-router-dom'
import {changePass} from '../../api/authApi'
import { useLocation } from "react-router-dom";


function PasswordChange(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const location = useLocation();
    const token = new URLSearchParams(location.search).get("token");
    const navigate = useNavigate()

    const validateForm = () => {
        const newErrors = {};

        if (!password) {
            newErrors.password = "Password wajib diisi";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Konfirmasi password wajib diisi";
        } else if (password && confirmPassword && password !== confirmPassword) {
            newErrors.confirmPassword = "Password tidak sesuai";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const res = await changePass({ token, password });
            if (res.ok) {
                navigate("/Login")
            } else {
                const data = await res.json();
                alert(data.message || "Gagal mengubah password");
            }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };
    
    return(
        <div className="flex h-screen w-full text-white overflow-hidden">
            <div className="flex h-screen w-1/2 flex-col gap-8 justify-center items-center text-black bg-white">
                <h1 className="font-bold text-5xl">Reset Password</h1>
                <p className="text-xl text-center">Masukkan kata sandi baru untuk akun <br/> kamu. Pastikan mudah diingat dan aman.</p>
            
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                        <label htmlFor="newPass" className="font-semibold"> Password : </label>
                         <input type={showPassword ? "text" : "password"} id="newPass"  onChange={(e) => setPassword(e.target.value)}value={password} placeholder="Masukkan password" className={`border ${ errors.password ? "border-red-400" : "border-gray-400"} mt-2.5 rounded-full px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[55px] -translate-y-1/2 text-gray-600">
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                        {errors.password && (<p className="text-red-500 text-xs mt-1">{errors.password}</p> )}
                    </div>

                    <div className="relative">
                        <label htmlFor="confirmPass" className="font-semibold"> Konfirmasi Password : </label>
                        <input  type={showConfirmPassword ? "text" : "password"} id="confirmPass" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Masukkan ulang password" className={`border ${  errors.confirmPassword ? "border-red-400" : "border-gray-400"  } mt-2.5 rounded-full px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}  className="absolute right-4 top-[55px] -translate-y-1/2 text-gray-600" >
                            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                        {errors.confirmPassword && ( <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>)}
                    </div>

                    <button type="submit" disabled={loading}  className={`flex justify-center items-center gap-2 bg-[#1B263B] text-white font-semibold py-2 rounded-full transition  ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#15224A]"}`} >
                        {loading ? "Mengirim..." : "Kirim"}
                    </button>

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
    )
}

export default PasswordChange