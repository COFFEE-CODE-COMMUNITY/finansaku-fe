import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useReminders } from "../../hooks/useReminder";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const { reminders, addReminder, setReminders } = useReminders();

  const navigate = useNavigate()

  const handleDateClick = (date) => setSelectedDate(date);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && judul && kategori) {
      const newReminder = {
        date: selectedDate.toDateString(),
        judul,
        kategori,
      };

      addReminder(newReminder);

      setJudul("");
      setKategori("");
    }

    navigate('/dashboard')
  };

  const handleReset = () => {
    setSelectedDate(new Date());
    setJudul("");
    setKategori("");
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const validReminders = reminders.filter((r) => {
      const reminderDate = new Date(r.date);
      reminderDate.setHours(0, 0, 0, 0);
      return reminderDate >= today;
    });

    if (validReminders.length !== reminders.length) {
      setReminders(validReminders);
    }
  }, [reminders, setReminders]);

  // add dot color
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const hasReminder = reminders.find(
        (r) => r.date === date.toDateString()
      );
      if (hasReminder) {
        const color =
          hasReminder.kategori === "penting"
            ? "bg-red-500"
            : hasReminder.kategori === "sedang"
            ? "bg-yellow-500"
            : "bg-green-500";
        return <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${color}`} />;
      }
    }
    return null;
  };

  return (
    <div className="h-screen relative text-white flex flex-col px-8 py-6">
      <div className="mb-8">
        <p className="text-gray-200 text-lg"> Klik tanggal untuk menambahkan pengingat pembayaran atau alokasi. <br /> Tanggal yang dipilih akan ditandai dengan dot.</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-start items-start gap-12">
        {/* Kalender */}
        <div className="bg-white h-[400px] rounded-2xl p-6 shadow-md">
          <Calendar onClickDay={handleDateClick} value={selectedDate} tileContent={tileContent} className="rounded-lg flex flex-col items-center justify-center text-black h-[350px]"/>
        </div>

        {/* Form */}
        <div className="bg-white text-black rounded-2xl h-[400px] flex flex-col items-center justify-center shadow-md p-6 w-[384px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div>
              <label className="font-semibold text-lg"> 1. Tanggal yang dipilih :</label>
              <input type="date" value={selectedDate.toISOString().split("T")[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
              <label className="font-semibold text-lg">2. Judul :</label>
              <input type="text" placeholder="Bayar Internet" onChange={(e) => setJudul(e.target.value)} value={judul} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg">3. Kategori :</label>
              <select value={kategori} onChange={(e) => setKategori(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Pilih kategori</option>
                <option value="penting" className="text-red-600">🔴 Penting</option>
                <option value="sedang" className="text-yellow-600">🟡 Sedang</option>
                <option value="biasa" className="text-green-600">🟢 Biasa</option>
              </select>
            </div>

            <div className="flex justify-end gap-2.5 pt-4">
              <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition"> Simpan</button>
              <button type="button" onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition">Batal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
