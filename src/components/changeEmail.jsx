import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {changeEmailSetting} from '../api/authApi'
import toast from "react-hot-toast";


function ChangeEmailSetting() {
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()


    const handleSubmit = () => {
        if (!newEmail || !password) {
            toast.error("Harap isi semua field!");
            return;
        }
        setShowPopup(true);
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!newEmail) {
            newErrors.newEmail = "Email wajib diisi";
        } else if (!emailRegex.test(newEmail)) {
            newErrors.email = "Format email tidak valid";
        }

        if (!password) {
            newErrors.password = "Password wajib diisi";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleConfirm = async (e) => {
        setShowPopup(false);
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await changeEmailSetting ({ newEmail });
            const body = await response.json();

            if (!response.ok) {
                const msg = body?.error || body?.message;
                setErrors((prev) => ({ ...prev, general: msg }));

                toast.error(msg, {position: "top-center",  autoClose: 3000,  theme: "colored",});

                return;
            } else if (response.ok){
                toast.success("Email Berhasil Diubah", {autoClose: 1500,})
            }
        } catch(err){
            console.log("Error Change Email : ", err)
        } finally{
            setLoading(false)
        } ; 

    };

    const handleX = (e) => {
        e.preventDefault()
        
        navigate('/dashboard')
    }

    return (
        <div className="flex-1 text-white relative w-full h-screen">
            <header className="flex items-start w-[900px] justify-between mb-4">
                <div className="flex flex-col gap-2.5 mb-8">
                    <p className="text-white text-xl mt-2">Ubah password akunmu dengan aman. Masukkan password lama untuk <br/> verifikasi sebelum membuat password baru</p>
                </div>

                <button onClick={handleX} className="text-gray-400 border border-white rounded-full hover:text-white transition-colors p-2"> <X /></button>
            </header>

            <form className="flex flex-col gap-8">
            
                <div className="flex flex-col text-left gap-2.5 relative">
                    <label className="font-semibold text-white" htmlFor="email">Email Baru : </label>
                    <div className="relative w-[900px]">
                        <input id="email" type="email"  value={newEmail} onChange={(e) => setNewEmail(e.target.value)}  placeholder="yourNewEmail@gmail.com" className="rounded-md border border-white px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                        {errors.newEmail && (<p className="text-red-500 text-sm">{errors.newEmail}</p>)}
                    </div>
                </div>

                <div className="flex flex-col text-left gap-2.5 relative">
                    <label className="font-semibold text-white" htmlFor="Pass"> Password :</label>
                    <div className="relative w-[900px]">
                        <input id="Pass" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" className="rounded-md border border-white px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>
                    {errors.password && (<p className="text-red-500 text-sm">{errors.password}</p>)}
                </div>

                <div className="flex w-[900px] justify-end gap-4 mt-10">
                    <button type="button" onClick={handleSubmit} disabled={loading} className="w-[100px] py-3 bg-[#487BEA] border border-white text-white font-bold rounded-lg hover:bg-[#2e56ad] transition-colors disabled:opacity-50" >Simpan</button>
                    <button type="button" className="w-[100px] py-3 bg-[#DC2626] border border-white text-white font-bold rounded-lg hover:bg-red-700 transition-colors" onClick={() => { setNewEmail(""); setPassword("")}}>Batal</button>
                </div>

            </form>

            {showPopup && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white text-black rounded-lg p-6 max-w-md shadow-lg text-center">
                        <h3 className="text-lg font-semibold mb-2">⚠️ Konfirmasi Ganti Email</h3>
                        <p className="text-sm text-gray-600 mb-6">Pastikan email baru sudah benar sebelum menyimpan. Perubahan ini akan digunakan untuk login akunmu.</p>
                        <div className="flex justify-center items-center gap-3">
                            <button onClick={handleConfirm} type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Konfirmasi</button>
                            <button onClick={() => setShowPopup(false)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Batal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangeEmailSetting
