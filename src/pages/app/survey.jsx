import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import {SubmitSurvey} from '../../api/authApi'

function Survey() {
    const [showPopup, setShowPopup] = useState(false);
    // const navigate = useNavigate();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({}); 
    const [domisiliUser, setDomisiliUser] = useState(""); 
    const [salaryUser, setSalaryUser] = useState(""); 
    const [tanggunganUser, setTanggunganUser] = useState(""); 
    // const [loading, setLoading] = useState(false);

    // const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!validasiSurvey()){
            return
        } else {
            setShowPopup(true); //show pop up when submit clicked
        }
    };

    // const handleConfirm = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await SubmitSurvey({ cityName : domisiliUser, salary : salaryUser, dependents : tanggunganUser});
    //         console.log(response.status)
    //         const body = await response.json();
    //         console.log(body);

    //         if (response.ok) {
    //             localStorage.setItem("hasilSurvey", "true")
    //             navigate("/dashboard");
    //         }

    //     } catch (err) {
    //         console.log(err)
    //     }

    // }

   const handleConfirm = async (e) => {
    e.preventDefault();
    
    // convert string input ke tipe yang backend minta
    const salaryNum = Number(salaryUser.replace(/[^\d]/g, '')); // hapus tanda Rp atau titik ubah jg ke number
    const householdSize = parseInt(tanggunganUser, 10); // konversi menjadi int

    if (householdSize < 0) {
        setErrors({ tanggunganUser: "Tidak Valid" });
        return;
    }   

    const payload = {
        city: domisiliUser.trim(),
        salary: salaryNum,
        householdSize: householdSize
    };

    try {
        const response = await SubmitSurvey(payload);
        const body = await response.json();
        console.log(body);

        if (response.ok) {
        localStorage.setItem("hasilSurvey", "true")
        navigate("/dashboard");
        } else {
        setErrors({ server: body?.error || "Gagal mengirim survey" });
        }

    } catch (err) {
        console.log(err);
    }
    };



    const handleCancel = () => {
        setShowPopup(false);
        setDomisiliUser("")
        setSalaryUser("")
        setTanggunganUser("");
        setErrors({})
    };

    const validasiSurvey = () => {
        const newErrors = {}

        if (!domisiliUser){
            newErrors.domisiliUser = true
        }

        if (!salaryUser){
            newErrors.salaryUser = true
        }

        if(isNaN(tanggunganUser)){
            newErrors.tanggunganUser = "Harus berupa angka."
        } else if (Number(tanggunganUser) < 0){
            newErrors.tanggunganUser = "Tidak boleh negatif"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    return (
    <div className="flex flex-col relative justify-center items-start text-white w-full h-full">
        <h2 className="absolute top-0 text-xl">Isi survey ini untuk mengetahui kondisi keuanganmu dan dapatkan insight pengelolaan finansial yang lebih baik.</h2>

        <form onSubmit={handleSubmit}>
            <div className="flex mt-8 flex-col gap-4 top-[40px] absolute justify-center items-start">
                <div className=" flex flex-col gap-4">
                    <label className="font-semibold text-xl" htmlFor="domisiliUser">1. Dari daerah mana kamu berasal?</label>
                    <input type="text" onChange={(e) => (setDomisiliUser(e.target.value))} value={domisiliUser} placeholder="Kota Bandung" className={`${ errors.domisiliUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`}/>
                    {errors.domisiliUser && (errors.domisiliUser)}
                </div>

                <div className=" flex flex-col gap-4">
                    <label className="font-semibold text-xl" htmlFor="salaryUser"> 2. Gaji kamu per bulan berapa?</label>
                    <input type="text" placeholder="Rp. 5.000.000" onChange={(e) => (setSalaryUser(e.target.value))} value={salaryUser} className={`${ errors.salaryUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`}/>
                    {errors.salaryUser && (errors.salaryUser)}
                </div>

                <div className=" flex flex-col gap-4">
                    <label className="font-semibold text-xl" htmlFor="tanggunganUser"> 3. Berapa orang yang anda tanggung?</label>
                    <input type="text" placeholder="Masukkan jumlah anggota keluarga (misal: 4)" id="tanggunganUser" onChange={(e) => (setTanggunganUser(e.target.value))} value={tanggunganUser} className={`${ errors.tanggunganUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`} />
                    {errors.tanggunganUser && (errors.tanggunganUser)}
                </div>
            </div>
        </form>

        <div className="absolute top-[450px] right-38 flex justify-end items-end w-full">
            <button className="bg-[#487BEA] hover:bg-blue-600 border border-white text-white px-5 py-2 rounded-lg transition w-fit font-bold" onClick={handleSubmit}>Kirim</button>
        </div>

        {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center w-[450px]">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-4xl">⚠️</span>
                    <h2 className="text-xl font-bold text-black"> Konfirmasi Pengisian Survey </h2>
                    <p className="text-gray-700 text-sm">Apakah kamu yakin ingin mengirim survey ini? <br />Jawaban yang sudah dikirim tidak bisa diubah. </p>
                    
                    <div className="flex gap-4 mt-4">
                        {/* Confirm*/}
                        <button onClick={handleConfirm} className="bg-[#487BEA] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition transform active:scale-95 active:shadow-lg" > Ya </button>
                        <button onClick={handleCancel} className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition transform active:scale-95 active:shadow-lg"> Tidak </button>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default Survey;
