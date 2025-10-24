import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [reminders, setReminders] = useState([]);

  const handleDateClick = (date) => setSelectedDate(date);

  const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedDate && judul && kategori) {
      setReminders([
        ...reminders,
        { date: selectedDate.toDateString(), judul, kategori },
      ]);
      setJudul("");
      setKategori("");
    }
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setJudul("");
    setKategori("");
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const hasReminder = reminders.find((r) => r.date === date.toDateString());
      if (hasReminder) {
        const color =
          hasReminder.kategori === "penting"
            ? "bg-red-500"
            : hasReminder.kategori === "sedang"
            ? "bg-yellow-400"
            : "bg-green-500";
        return <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${color}`} />;
      }
    }
    return null;
  };

  return (
    <div className="h-screen w-full relative justify-center items-center text-white flex flex-col">

      <div className="mb-8 flex absolute left-8 top-[65px] justify-center items-start">
        <p className="text-white text-xl mt-2">
          Klik tanggal untuk menambahkan pengingat pembayaran atau alokasi.
          <br />
          Tanggal yang dipilih akan ditandai dengan dot.
        </p>
      </div>

      <div className="flex flex-col p-8 justify-center items-end gap-8 mt-26">
        <div className="flex justify-center items-start gap-12">
          {/* Kalender */}
          <div className="bg-white h-[350px] rounded-2xl p-6 shadow-md">
            <Calendar
              onClickDay={handleDateClick}
              value={selectedDate}
              tileContent={tileContent}
              className="rounded-lg flex flex-col items-center justify-center text-black h-[300px]"
            />
          </div>

          {/* Form */}
          <div className="bg-white text-black rounded-2xl h-[350px] flex flex-col items-center justify-center shadow-md p-6 w-[24rem]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-lg">
                  1. Tanggal yang dipilih :
                </label>
                <input
                  type="date"
                  value={selectedDate.toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-semibold text-lg">
                  2. Judul / Keperluan :
                </label>
                <input
                  type="text"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Bayar internet"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-semibold text-lg">
                  3. Kategori (dot) :
                </label>
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Pilih kategori</option>
                  <option value="penting" className="text-red-600">Penting</option>
                  <option value="sedang" className="text-yellow-600">Sedang</option>
                  <option value="biasa" className="text-green-600">Biasa</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-end gap-4 w-[64px]">
          <button onClick={handleSubmit} className="bg-blue-600 border border-white hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition font-semibold" > Simpan</button>
          <button onClick={handleReset} className="bg-red-500 border border-white hover:bg-red-700 text-white px-6 py-2 rounded-lg transition font-semibold"> Batal </button>
        </div>
      </div>
    </div>
  );
}
