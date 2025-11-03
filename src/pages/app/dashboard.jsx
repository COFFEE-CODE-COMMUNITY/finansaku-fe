import React, { useState } from "react";
import {BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer} from "recharts";
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

  const COLORS = ["#8979FF", "#3CC3DF", "#FF928A"];

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
    <div className="flex flex-col text-white w-full overflow-hidden">
      <h2 className="mb-2.5 text-start text-xl">Lihat gambaran keuanganmu di sini. Mulai dari alokasi tiap kategori hingga notes dalam kalender.</h2>
      
      <div className="grid grid-cols-3 grid-rows-2 mt-2.5 justify-center gap-x-2.5 gap-y-0 h-full">
        {/* Grafik Batang */}
        <div className="bg-white h-[250px] rounded-2xl p-2.5 shadow">
          <h2 className="text-lg font-semibold text-black">Oktober</h2>
          <p className="text-black text-xs mb-4"> Diagram ini menampilkan hasil survei nominal anggaranmu.</p>

          <ResponsiveContainer width="100%" height={150}> {/* heigtt bar batang */}
            <BarChart data={dataOktober} layout="vertical" margin={{ top: 10, right: 100, left: 20, bottom: 0 }}>{/* wrap the chart */}
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis type="number" stroke="black" tick={false} /> {/* hilangkan angka */}
              <YAxis dataKey="kategori" type="category" stroke="gray" tick={false}/>
              <Tooltip />

              <Bar dataKey="jumlah">
                {dataOktober.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList 
                  dataKey="jumlah" 
                  position="insideRight" 
                  formatter={(value) => `Rp ${value.toLocaleString()}`} 
                  fill="white" 
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* keterangan bottom */}
          <div className="flex justify-center gap-2.5">
            {dataOktober.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-sm" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="text-black text-sm font-xs">{item.kategori}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Diagram Pie */}
        <div className="bg-white rounded-2xl p-2.5 flex h-[250px] flex-col shadow">
          <h2 className="text-lg text-start font-semibold text-black">Oktober</h2>
          <p className="text-black text-xs mb-2.5">Diagram ini menampilkan hasil survei dalam bentuk persentase.</p>
          <div className="flex flex-row justify-between items-center h-[200px]">
            <ResponsiveContainer width="50%" height={200} className="ml-4 mt-2">
            <PieChart>
              <Pie data={dataPersentase} dataKey="value" nameKey="name" cx="60%" cy="40%" outerRadius={50} label={({ percent }) => `${(percent * 100).toFixed(0)}%`}> {/* atur pie chart only*/}
                {dataPersentase.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2.5 justify-center items-start text-black"> {/* atur information pie chart 3 colors */}
            {dataPersentase.map((d, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[i] }}
                ></span>
                <p>{d.name}</p>
              </div>
            ))}
          </div>
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
              <div key={i} className={`p-2.5 rounded-md text-black ${n.warna}`}>
                <strong>{String(n.tanggal).padStart(2, "0")}</strong> - {n.teks}
              </div>
            ))}
          </div>
        </div>

        {/* line chart */}
        <div className="bg-white rounded-2xl p-2.5   shadow col-span-2">
            <h2 className="text-lg font-semibold text-black">Oktober - Desember</h2>
            <p className="text-black text-xs mb-2.5">Grafik ini menampilkan tren perubahan budgeting selama tiga bulan.</p>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis dataKey="bulan" stroke="#000" />
                <YAxis stroke="#000" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Makan" stroke="#8979FF" />
                <Line type="monotone" dataKey="Internet" stroke="#FF928A" />
                <Line type="monotone" dataKey="Transportasi" stroke="#3CC3DF" />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
