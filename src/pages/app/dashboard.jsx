import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useReminders } from "../../hooks/useReminder";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, LabelList, ResponsiveContainer
} from "recharts";

export default function DashboardContent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { reminders, setReminders } = useReminders();

  // delete reminder yang udah kelewat
  useEffect(() => {
    const today = new Date();
    if (setReminders) {
      setReminders((prev) => prev.filter((r) => new Date(r.date) >= today));
    }
  }, [setReminders]);

  const COLORS = ["#8979FF", "#3CC3DF", "#FF928A"];

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

  const dataLine = [
    { bulan: "Oktober", Makan: 1000000, Internet: 500000, Transportasi: 750000 },
    { bulan: "November", Makan: 800000, Internet: 700000, Transportasi: 900000 },
    { bulan: "Desember", Makan: 1200000, Internet: 400000, Transportasi: 500000 },
  ];

  const getWarna = (kategori) => {
    switch (kategori) {
      case "penting": return "#FF7C7C"
      case "sedang": return "#FFF58C"
      case "biasa": return "#B6F4B6" 
      default: return "#D1D5DB"
    }
  };

  // add a dot
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const reminderForDate = reminders.filter(
        (r) => new Date(r.date).toDateString() === date.toDateString()
      );
      if (reminderForDate.length > 0) {
        return (
          <div className="flex justify-center mt-1">
            {reminderForDate.map((r, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full mx-[1px]"
                style={{ backgroundColor: getWarna(r.kategori) }}
              ></span>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col text-white w-full overflow-hidden">
      <h2 className="mb-2.5 text-start text-xl">
        Lihat gambaran keuanganmu di sini. Mulai dari alokasi tiap kategori hingga notes dalam kalender.
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 mt-2.5 justify-center gap-x-2.5 gap-y-0 h-full">

        {/* --- GRAFIK BAR --- */}
        <div className="bg-white h-[270px] rounded-2xl p-2.5 shadow">
          <h2 className="text-lg font-semibold text-black">Oktober</h2>
          <p className="text-black text-xs mb-4">
            Diagram ini menampilkan hasil survei nominal anggaranmu.
          </p>

          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={dataOktober} layout="vertical" margin={{ top: 10, right: 100, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis type="number" stroke="black" tick={false} />
              <YAxis dataKey="kategori" type="category" stroke="gray" tick={false} />
              <Tooltip />
              <Bar dataKey="jumlah">
                {dataOktober.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                {/* add label list for more information */}
                <LabelList
                  dataKey="jumlah"
                  position="insideRight"
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                  fill="white"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

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

        {/* --- DIAGRAM PIE --- */}
        <div className="bg-white rounded-2xl p-2.5 flex h-[270px] flex-col shadow">
          <h2 className="text-lg text-start font-semibold text-black">Oktober</h2>
          <p className="text-black text-xs mb-2.5">Diagram ini menampilkan hasil survei dalam bentuk persentase.</p>
          <div className="flex flex-row justify-between items-center h-[300px]">
            <ResponsiveContainer width="50%" height={200} className="ml-4 mt-2">
              <PieChart>
                <Pie
                  data={dataPersentase}
                  dataKey="value"
                  nameKey="name"
                  cx="60%" cy="50%"
                  outerRadius={50}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {dataPersentase.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="flex flex-col gap-2.5 justify-center items-start text-black">
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

        {/* KALENDER + REMINDER */}
        <div className="bg-white rounded-2xl p-4 row-span-2 flex flex-col items-center shadow">
          <h2 className="text-lg font-semibold text-black mb-4">Kalender</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg p-2 text-black w-full"
            tileContent={tileContent}
          />

          <div className="mt-4 space-y-3 w-full max-h-[145px] overflow-y-auto pr-2">
            {reminders.length === 0 ? (
              <p className="text-black text-sm text-center italic">Belum ada reminder</p>
            ) : (
              reminders.map((r, i) => {
                const tanggal = new Date(r.date).getDate().toString().padStart(2, "0");
                return (
                  <div
                    key={i}
                    className={`flex items-center rounded-xl p-3 shadow-sm`}
                    style={{ backgroundColor: getWarna(r.kategori) }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-md mr-3 bg-white/30">
                      <span className="text-lg font-bold text-black">{tanggal}</span>
                    </div>
                    <p className="text-black text-base font-medium break-words">
                      • {r.judul}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* --- LINE CHART --- */}
        <div className="bg-white rounded-2xl p-2.5 shadow col-span-2">
          <h2 className="text-lg font-semibold text-black">Oktober - Desember</h2>
          <p className="text-black text-xs mb-2.5">
            Grafik ini menampilkan tren perubahan budgeting selama tiga bulan.
          </p>
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
