// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";
// import { useReminders } from "../../hooks/useReminder";

// export default function CalendarPage() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [judul, setJudul] = useState("");
//   const [kategori, setKategori] = useState("");

//   const { reminders, addReminder, setReminders } = useReminders(); // ✅ tambahkan setReminders agar bisa update context

//   const handleDateClick = (date) => setSelectedDate(date);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedDate && judul && kategori) {
//       addReminder({ date: selectedDate.toDateString(), judul, kategori });
//       setJudul("");
//       setKategori("");
//     }
//   };

//   const handleReset = () => {
//     setSelectedDate(new Date());
//     setJudul("");
//     setKategori("");
//   };

//   // ✅ Tambahkan useEffect ini untuk otomatis hapus reminder yang sudah lewat
//   useEffect(() => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const validReminders = reminders.filter((r) => {
//       const reminderDate = new Date(r.date);
//       reminderDate.setHours(0, 0, 0, 0);
//       return reminderDate >= today; // hanya simpan reminder yang >= hari ini
//     });

//     if (validReminders.length !== reminders.length) {
//       setReminders(validReminders);
//       localStorage.setItem("reminders", JSON.stringify(validReminders));
//     }
//   }, [reminders, setReminders]);

//   const tileContent = ({ date, view }) => {
//     if (view === "month") {
//       const hasReminder = reminders.find((r) => r.date === date.toDateString());
//       if (hasReminder) {
//         const color =
//           hasReminder.kategori === "penting"
//             ? "bg-red-500"
//             : hasReminder.kategori === "sedang"
//             ? "bg-yellow-400"
//             : "bg-green-500";
//         return <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${color}`} />;
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="h-screen relative justify-start items-start text-white flex flex-col">
//       <div className="absolute top-0 left-0 mb-8 flex justify-start items-start">
//         <p className="text-white text-xl">
//           Klik tanggal untuk menambahkan pengingat pembayaran atau alokasi.
//           <br />
//           Tanggal yang dipilih akan ditandai dengan dot.
//         </p>
//       </div>

//       <div className="flex flex-col justify-start items-end gap-8 mt-24">

//         <div className="flex justify-center items-start gap-18">        
//           {/* Kalender */}
//           <div className="bg-white h-[400px] rounded-2xl p-6 shadow-md">
//             <Calendar onClickDay={handleDateClick}  value={selectedDate}  tileContent={tileContent} className="rounded-lg flex flex-col items-center justify-center text-black h-[350px]" />
//           </div>

//           {/* Form */}
//           <div className="bg-white text-black rounded-2xl h-[400px] flex flex-col items-center justify-center shadow-md p-6 w-[384px]">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
//               <div className="flex flex-col gap-4">
//                 <label className="font-semibold text-lg"> 1. Tanggal yang dipilih : </label>
//                 <input type="date" value={selectedDate.toISOString().split("T")[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//               </div>

//               <div className="flex flex-col gap-4">
//                 <label className="font-semibold text-lg"> 2. Judul / Keperluan : </label>
//                 <input type="text"  value={judul}  onChange={(e) => setJudul(e.target.value)} placeholder="Bayar internet" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//               </div>

//               <div className="flex flex-col gap-4">
//                 <label className="font-semibold text-lg"> 3. Kategori (dot) : </label>
//                 <select value={kategori} onChange={(e) => setKategori(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" >
//                   <option value="">Pilih kategori</option>
//                   <option value="penting" className="text-red-600"> 🔴 Penting </option>
//                   <option value="sedang" className="text-yellow-600"> 🟡 Sedang </option>
//                   <option value="biasa" className="text-green-600"> 🟢 Biasa </option>
//                 </select>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="flex justify-end gap-4 w-[64px]">
//           <button onClick={handleSubmit} className="bg-blue-600 border border-white hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition font-semibold" >Simpan </button>
//           <button onClick={handleReset} className="bg-red-500 border border-white hover:bg-red-700 text-white px-6 py-2 rounded-lg transition font-semibold" > Batal </button>
//         </div>
//       </div>
//     </div>
//   );
// }
