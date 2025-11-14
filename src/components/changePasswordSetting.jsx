import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { changePassSetting } from "../api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ChangePass() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const validateForm = () => {
        const newErrors = {};
        if (!oldPass) {
            newErrors.oldPass = "Password lama wajib diisi";
        }

        if (!newPass){
            newErrors.newPass = "Password baru wajib diisi";
        }

        if (newPass && newPass.length < 8){
             newErrors.newPass = "Password minimal 8 karakter";
        }

        if (confirmPass !== newPass){
            newErrors.confirmPass = "Konfirmasi password salah";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
        const response = await changePassSetting({
            currentPass: oldPass,
            newPass: newPass,
        });
        const body = await response.json();

        if (!response.ok) {
            setErrors((prev) => ({
            ...prev,
            oldPass: body.message || "Terjadi kesalahan",
            }));
            toast.error(body.message || "Password lama salah", {
            position: "top-center",
            });
            return;
        }

        toast.success("Password berhasil diubah!");
            setOldPass("");
            setNewPass("");
            setConfirmPass("");
            setErrors({});
        } catch (err) {
            console.error(err);
            toast.error("Terjadi kesalahan server", { position: "top-center" });
        } finally {
            setLoading(false);
        }
    };

    const handleX = (e) => {
        e.preventDefault()
        
        navigate('/account-information')
    }

    return (
    <div className="flex justify-start items-start w-full">
        <div className="flex flex-col w-full text-gray-100 rounded-xl">
            <header className="flex items-start w-[900px] justify-between mb-4">
                <div className="flex flex-col gap-2.5 mb-8">
                    <p className="text-white text-xl mt-2">Ubah password akunmu dengan aman. Masukkan password lama untuk <br/> verifikasi sebelum membuat password baru</p>
                </div>

                <button onClick={handleX} className="text-gray-400 border border-white rounded-full hover:text-white transition-colors p-2"> <X /></button>
            </header>


            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>

                <div className="flex flex-col text-left gap-2.5 relative">
                    <label className="font-semibold text-white" htmlFor="oldPass">Password lama :</label>
                    <div className="relative w-[900px]">
                        <input id="oldPass" type={showPassword ? "text" : "password"} value={oldPass} onChange={(e) => setOldPass(e.target.value)} placeholder="********" autoComplete="current-password" className="rounded-md border border-white px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.oldPass && <p className="text-red-500 text-sm">{errors.oldPass}</p>}
                </div>


                <div className="flex flex-col text-left gap-2.5 relative">
                    <label className="font-semibold text-white" htmlFor="newPass"> Password baru :</label>
                    <div className="relative w-[900px]">
                        <input id="newPass" type={showPassword ? "text" : "password"} value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="********" autoComplete="new-password" className="rounded-md border border-white px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>
                    {errors.newPass && <p className="text-red-500 text-sm">{errors.newPass}</p>}
                </div>

                <div className="flex flex-col text-left gap-2.5 relative">
                    <label   label className="font-semibold text-white" htmlFor="confirmPass">Konfirmasi password baru :</label>
                    <div className="relative w-[900px]">
                        <input id="confirmPass" type={showPassword ? "text" : "password"} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="********" autoComplete="new-password" className="rounded-md border border-white px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                        <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                            {showNewPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>
                    {errors.confirmPass && <p className="text-red-500 text-sm">{errors.confirmPass}</p>}
                </div>

                <div className="flex w-[900px] justify-end gap-4 mt-10">
                    <button type="submit" disabled={loading} className="w-[100px] py-3 bg-[#487BEA] border border-white text-white font-bold rounded-lg hover:bg-[#2e56ad] transition-colors disabled:opacity-50" >Simpan</button>
                    <button type="button" className="w-[100px] py-3 bg-[#DC2626] border border-white text-white font-bold rounded-lg hover:bg-red-700 transition-colors" onClick={() => { setOldPass(""); setNewPass(""); setConfirmPass(""); setErrors({}); }}>Batal</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default ChangePass;
