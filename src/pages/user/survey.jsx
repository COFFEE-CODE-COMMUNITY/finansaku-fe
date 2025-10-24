import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Survey() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // tampilkan pop-up saat tombol submit diklik
  };

  const handleConfirm = () => {
    setShowPopup(false);
    alert("Survey berhasil dikirim!");
    // di sini kamu bisa lanjutkan aksi submit ke backend atau navigasi halaman lain
    // Simpan status ke localStorage
    localStorage.setItem("surveyFilled", "true");

    alert("Survey berhasil dikirim!");

    // Arahkan ke dashboard
    navigate("/dashboard");
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col relative justify-center ml-4 items-start text-white w-full h-full">
      <h2 className="absolute top-[65px] text-xl">Isi survey ini untuk mengetahui kondisi keuanganmu dan <br />dapatkan insight pengelolaan finansial yang lebih baik.</h2>

      <div className="flex flex-col gap-4 top-[150px] absolute justify-center items-start">
        <div className="mb-6 flex flex-col gap-4">
          <p className="font-semibold mb-2 text-xl">1. Dari daerah mana kamu berasal?</p>
          <input type="text" placeholder="Kota Bandung" className="border border-gray-400 w-[1000px] rounded p-4 focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-6 flex flex-col gap-4">
          <p className="font-semibold mb-2 text-xl"> 2. Gaji kamu per bulan berapa?</p>
          <input type="text" placeholder="Rp. 5.000.000" className=" border border-gray-400 w-[1000px] rounded p-4 focus:outline-none focus:border-blue-500"/>
        </div>

          <div className="mb-6 flex flex-col gap-4">
            <p className="font-semibold mb-2 text-xl"> 3. Status kamu saat ini?</p>
            <input type="text" placeholder="Mahasiswa" className=" border border-gray-400  w-[1000px] rounded p-4 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div className="absolute top-[580px] right-24 flex justify-end items-end w-full">
          <button className="bg-[#487BEA] hover:bg-blue-600 border border-white text-white px-5 py-2 rounded-lg transition w-[6rem] font-bold" onClick={handleSubmit}>Submit</button>
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
