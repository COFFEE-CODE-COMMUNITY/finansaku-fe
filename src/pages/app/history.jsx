import React from "react";
import { useState } from "react";

function HistoryPage() {

    const [selectedMonth, setSelectedMonth] = useState("");
    return (
            <div className="flex-1 text-white  min-h-screen">
                <p className="text-gray-300 mb-6 text-xl"> Rekam jejak bulanan yang bisa kamu buka kembali kapan saja </p>

                <div className="mb-6" >
                    <select  value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="bg-white text-black px-4 py-2 rounded-md focus:outline-none">
                        <option value="">Bulan</option>
                        <option value="January 2025">January</option>
                        <option value="Februari 2025">Februari</option>
                        <option value="March 2025">March</option>
                        <option value="April 2025">April</option>
                        <option value="Mei 2025">Mei</option>
                        <option value="June 2025">June</option>
                        <option value="July 2025">July</option>
                        <option value="August 2025">August</option>
                        <option value="September 2025">September</option>
                        <option value="October 2025">October</option>
                        <option value="November 2025">November</option>
                        <option value="December 2025">December</option>
                    </select>
                </div>

                <div className="bg-white text-black rounded-xl w-80 shadow-md">
                    <div className="bg-blue-300 rounded-t-xl px-4 py-2 font-semibold"> Riwayat Keuangan Kamu </div>
                    <div className="p-4">
                    <p className="mb-2">Gaji tercatat : <span className="font-medium">Rp5.000.000</span></p>
                    <p className="text-gray-600 mb-4"> {selectedMonth ? selectedMonth : "Belum memilih bulan"}</p>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">  Lihat detail</button>
                </div>
            </div>
        </div>
    );
}

export default HistoryPage
