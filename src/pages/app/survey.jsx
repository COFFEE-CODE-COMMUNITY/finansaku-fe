import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";

function Survey() {
    const [showPopup, setShowPopup] = useState(false);
    // const navigate = useNavigate();

    const [errors, setErrors] = useState({}); 
    const [domisiliUser, setDomisiliUser] = useState(""); 
    const [salaryUser, setSalaryUser] = useState(""); 
    const [statusUser, setStatusUser] = useState(""); 
    const [jobUser, setJobUser] = useState(""); 
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

    const handleConfirm = async (e) => {
        e.preventDefault()

        // setLoading(true)
        // try{
        //     await sleep (1000)
        //     const respose = await SignUp({domisili : domisiliUser, salary : salaryUser, status : statusUser })
        //     const body = await response.json()
        //     console.log(body)


        }

    const handleCancel = () => {
        setShowPopup(false);
        setDomisiliUser("")
        setSalaryUser("")
        setStatusUser("")
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

        if (!statusUser){
            newErrors.statusUser = true
        }

        if (!jobUser){
            newErrors.jobUser = true
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }




    return (
    <div className="flex flex-col relative justify-center ml-4 items-start text-white w-full h-full">
        <h2 className="absolute top-[65px] text-xl">Isi survey ini untuk mengetahui kondisi keuanganmu dan <br />dapatkan insight pengelolaan finansial yang lebih baik.</h2>

        <div className="flex flex-col gap-4 top-[150px] absolute justify-center items-start">
            <div className="mb-2.5 flex flex-col gap-4">
                <label className="font-semibold text-xl" htmlFor="domisiliUser">1. Dari daerah mana kamu berasal?</label>
                <input type="text" onChange={(e) => (setDomisiliUser(e.target.value))} value={domisiliUser} placeholder="Kota Bandung" className={`${ errors.domisiliUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`}/>
                {errors.domisiliUser && (errors.domisiliUser)}
            </div>

            <div className="mb-2.5 flex flex-col gap-4">
                <label className="font-semibold text-xl" htmlFor="salaryUser"> 2. Gaji kamu per bulan berapa?</label>
                <input type="text" placeholder="Rp. 5.000.000" onChange={(e) => (setSalaryUser(e.target.value))} value={salaryUser} className={`${ errors.salaryUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`}/>
                {errors.salaryUser && (errors.salaryUser)}
            </div>

            <div className="mb-2.5 flex flex-col gap-4">
                <label className="font-semibold text-xl" htmlFor="jobUser"> 3. Pekerjaan kamu sekarang apa?</label>
                <input type="text" placeholder="Barista" id="jobUser" onChange={(e) => (setJobUser(e.target.value))} value={jobUser} className={`${ errors.jobUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`} />
                {errors.jobUser && (errors.jobUser)}
            </div>

            <div className="mb-2.5 flex flex-col gap-4">
                <label className="font-semibold text-xl" htmlFor="statusUser"> 4. Status kamu saat ini?</label>
                <input type="text" placeholder="Mahasiswa" id="statusUser" onChange={(e) => (setStatusUser(e.target.value))} value={statusUser} className={`${ errors.statusUser ? "border-red-400" : "border-gray-400"} border w-[1000px] rounded p-2.5 focus:outline-none focus:border-blue-500`} />
                {errors.statusUser && (errors.statusUser)}
            </div>
        </div>

        <div className="absolute top-[620px] right-24 flex justify-end items-end w-full">
            <button className="bg-[#487BEA] hover:bg-blue-600 border border-white text-white px-5 py-2 rounded-lg transition w-fit font-bold" onClick={handleSubmit}>Submit</button>
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
                        <button onClick={handleConfirm} className="bg-[#487BEA] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition" > Kirim </button>
                        <button onClick={handleCancel} className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition"> Batal </button>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default Survey;
