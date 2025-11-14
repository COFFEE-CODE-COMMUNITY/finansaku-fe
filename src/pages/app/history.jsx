import React, { useState, useEffect } from "react";
import { dataHistory } from "../../api/authApi"; 

function HistoryPage() {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [historyData, setHistoryData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data hanya sekali saat halaman dibuka
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dataHistory(); // ambil dari endpoint
                console.log("Data history dari API:", data);
                setHistoryData(data);
            } catch (err) {
                console.error("Gagal ambil data history:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter data sesuai bulan yang dipilih
    useEffect(() => {
        if (selectedMonth && historyData.length > 0) {
            const filtered = historyData.filter(
                (item) => item.bulan === selectedMonth);
                setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    }, [selectedMonth, historyData]);

    if (loading) {
        return <p className="text-white text-center mt-10">Memuat data history...</p>;
    }

  return (
    <div className="flex-1 text-white min-h-screen">
        <p className="text-gray-300 mb-6 text-xl"> Rekam jejak bulanan yang bisa kamu buka kembali kapan saja</p>

        <div className="mb-6">
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="bg-white text-black px-4 py-2 rounded-md focus:outline-none">
                <option value="">Pilih Bulan</option>
                <option value="January 2025">January</option>
                <option option value="Februari 2025">Februari</option>
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

        <div className="bg-white text-black rounded-xl w-96 shadow-md">
            <div className="bg-blue-300 rounded-t-xl px-4 py-2 font-semibold"> Riwayat Keuangan Kamu</div>

            <div className="p-4">
                {selectedMonth === "" ? (
                    <p className="text-gray-600">Belum memilih bulan.</p>
                    ) : filteredData.length === 0 ? (
                        <p   p className="text-gray-600">Tidak ada data untuk bulan ini.</p>
                    ) : (
                    filteredData.map((item, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                        <p className="mb-1"> Gaji tercatat:{" "}<span className="font-medium"> Rp{item.gaji?.toLocaleString()}</span></p>
                        <p className="text-gray-600"> Pengeluaran: Rp{item.pengeluaran?.toLocaleString()}</p>
                        <p className="text-gray-600 mb-2">Sisa: Rp{item.sisa?.toLocaleString()}</p>
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Lihat detail</button>
                    </div>
                    ))
                )}
            </div>
        </div>
    </div>
  );
}

export default HistoryPage;
