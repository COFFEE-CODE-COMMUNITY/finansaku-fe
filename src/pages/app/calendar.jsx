import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useReminders } from "../../hooks/useReminder";

function CalendarPage(){

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [namaKebutuhan, setNamaKebutuhan] = useState("")
    const [kategori, setKategori] = useState("")
    const {reminders, addReminders, setReminders} = useReminders()
    
    const handleDateClick = (date) => setSelectedDate(date)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(selectedDate && namaKebutuhan && kategori){
            addReminders({date: selectedDate.toDateString(), namaKebutuhan, kategori})
            setNamaKebutuhan("")
            setKategori("")
        }
    }

    const handleReset = () => {
        setSelectedDate(new Date())
        setNamaKebutuhan("")
        setKategori("")
    }

    // for deleting a reminder yang udah ada di tanggal yang sama
    useEffect(() => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const validReminder = reminders.filter((r) => {
            const reminderDate = new Date(r.date)
            reminderDate.setHours(0, 0, 0, 0)
            return reminderDate >= today // just for save the reminder that >= today
        })

        if(validReminder.length !== reminders.length){
            setReminders(validReminder)
            localStorage.setItem("reminders", JSON.stringify(validReminder))
        }
    },[reminders, setReminders])


    const titleContent = ({date, view}) => {
        if(view === "month"){
            const hasReminder = reminders.find((r) => r.date ===date.toDateString())
            if(hasReminder){
                const color = hasReminder.kategori === "penting" ? "bg-red-500" : hasReminder.kategori === "sedang" ? "bg-yellow-500" : "bg-green-500"
                return <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${color}`} />
            }
        }
        return null
    }

    return(
        <div className="h-screen relative justify-start items-start text-white flex flex-col">
            <div className="absolute top-0 left-0 mb-8 flex justify-start items-start">
                <p className="text-white text-xl">Klik tanggal untuk menambahkan pengingat pembayaran atau alokasi. <br /> Tanggal yang dipilih akan ditandai dengan dot.</p>
            </div>

            <div className="flex flex-col justify-start items-end gap-8 mt-24">
                <div className="flex justify-center items-start gap-18">
                    {/* calender */}
                    <div className="bg-white h-[400px] rounded-2xl p-6 shadow-md">
                        <Calendar onClickDay={handleDateClick} value={selectedDate} titleContent={titleContent} className="rounded-lg flex flex-col items-center justify-center text-black h-[350px]" ></Calendar>
                    </div>

                    {/* form */}
                    <div className="bg-white text-black rounded-2xl h-[400px] flex flex-col items-center justify-center shadow-md p-6 w-[384px]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                            <div>
                                <label className="font-semibold text-lg"> 1. Tanggal yang dipilih : </label>
                                <input type="date" value={selectedDate.toISOString().split("T")[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"/>
                            </div>

                            <div className="flex flex-col gap-4">
                                <label className="font-semibold text-lg"> 3. Kategori (dot) : </label>
                                <select  value={kategori} onChange={(e) => setKategori(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option value="">Pilih kategori</option>
                                    <option value="penting" className="text-red-600"> 🔴 Penting </option>
                                    <option value="sedang" className="text-yellow-600"> 🟡 Sedang </option>
                                    <option value="biasa" className="text-green-600"> 🟢 Biasa </option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex justify-end gap-4 w-[64px]">
                    <button onClick={handleSubmit} className="bg-blue-600 border border-white hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition font-semibold" >Simpan </button>
                    <button onClick={handleReset} className="bg-red-500 border border-white hover:bg-red-700 text-white px-6 py-2 rounded-lg transition font-semibold" > Batal </button>
                </div>
            </div>

        </div>
    )
}

export default CalendarPage