import React, { useState } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashboardContent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dataOktober = [
    { kategori: "Makan", jumlah: 1000000 },
    { kategori: "Internet", jumlah: 500000 },
    { kategori: "Transportasi", jumlah: 750000 },
  ];

  const dataPersentase = [
    { name: "Makan", value: 50 },
    { name: "Internet", value: 15 },
    { name: "Transportasi", value: 35 },
  ];

  const COLORS = ["#3B82F6", "#F87171", "#34D399"];

  const dataLine = [
    { bulan: "Oktober", Makan: 1000000, Internet: 500000, Transportasi: 750000 },
    { bulan: "November", Makan: 800000, Internet: 700000, Transportasi: 900000 },
    { bulan: "Desember", Makan: 1200000, Internet: 400000, Transportasi: 500000 },
  ];

  const notes = [
    { tanggal: 3, teks: "Bayar makan Rp 1.000.000", warna: "bg-red-400" },
    { tanggal: 4, teks: "Bayar internet Rp 500.000", warna: "bg-yellow-300" },
  ];

  return (
    <div className="flex flex-col text-white pt-16 w-full overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">

        {/* Grafik Batang */}
        <div className="bg-white h-[300px] rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold text-black">Oktober</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={dataOktober} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis type="number" stroke="#000" />
              <YAxis dataKey="kategori" type="category" stroke="#000" />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Diagram Pie */}
        <div className="bg-white rounded-2xl p-4 flex h-[300px] flex-col items-center shadow">
          <h2 className="text-lg font-semibold text-black">Oktober</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={dataPersentase} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {dataPersentase.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2 text-black">
            {dataPersentase.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[i] }}
                ></span>
                <p>{d.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kalender */}
        <div className="bg-white rounded-2xl p-4 row-span-2 flex flex-col items-center shadow">
          <h2 className="text-lg font-semibold text-black mb-4">Oktober</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg p-2 text-black w-full"
          />
          <div className="mt-4 space-y-2 w-full">
            {notes.map((n, i) => (
              <div key={i} className={`p-2 rounded-md text-black ${n.warna}`}>
                <strong>{String(n.tanggal).padStart(2, "0")}</strong> - {n.teks}
              </div>
            ))}
          </div>
        </div>

        {/* line chart */}
        <div className="bg-white rounded-2xl p-4 shadow col-span-2">
            <h2 className="text-lg font-semibold text-black">Oktober - Desember</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis dataKey="bulan" stroke="#000" />
                <YAxis stroke="#000" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Makan" stroke="#3B82F6" />
                <Line type="monotone" dataKey="Internet" stroke="#F87171" />
                <Line type="monotone" dataKey="Transportasi" stroke="#34D399" />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
