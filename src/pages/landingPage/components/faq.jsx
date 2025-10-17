import React, {useState} from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function Faq(){
    const [open, setOpen] = useState(null)
    const question = [
        {id : 1, title : "Bagaimana cara memulai finansaku", answer : "Mulai dengan mengisi survey singkat tentang pengeluaran dan  preferensi keuangan anda. Data ini akan digunakan untuk menyesuaikan rekomendasi budgeting"},
        {id : 2, title : "Apa saja yang ditampilkan di dashboard?", answer : "Mulai dengan mengisi survey singkat tentang pengeluaran dan  preferensi keuangan anda. Data ini akan digunakan untuk menyesuaikan rekomendasi budgeting"},
        {id : 3, title : "Bisakah saya menyesuaikan anggaran  yang  disarankan? cara memulai finansaku", answer : "Mulai dengan mengisi survey singkat tentang pengeluaran dan  preferensi keuangan anda. Data ini akan digunakan untuk menyesuaikan rekomendasi budgeting"},
        {id : 4, title : "Apakah data keuangan saya aman?", answer : "Mulai dengan mengisi survey singkat tentang pengeluaran dan  preferensi keuangan anda. Data ini akan digunakan untuk menyesuaikan rekomendasi budgeting"}
    ]

    const toggleOPen = (id) => {
        setOpen(open === id ? null : id)
    }

    return(
        <>
            <div id='Faq' className='flex justify-between h-screen relative'>
                <div className='z-2 flex items-center justify-center w-[45.6%]'>
                    <p className='text-7xl font-bold text-white'>Frequently <br/> Asked <span>Question</span></p>
                </div>

                <div className='flex flex-col gap-y-5 w-[54.4%] items-center justify-center'>
                    {question.map((informasi )=> ( 
                        <div key={informasi.id} className= 'bg-white shadow-md  mb-6 hover:shadow-xl transition-shadow duration-300 w-[80%]'>
                            <button onClick={() => toggleOPen(informasi.id)} className='w-full flex justify-between items-center p-5 text-left'>
                                <h2 className='text-xl font-bold text-black'>{informasi.title}</h2>
                                <div className={`bg-[#778DA9] text-white p-2 rounded-full transform transition-transform duration-300 ${open === informasi.id ? "rotate-180" : ""}`}>
                                    <ChevronDown size={20}/>
                                </div>
                            </button>

                            <div className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${open === informasi.id ? "max-h-40 py-3" : "max-h-0"}`}>
                                <p className='text-black text-lg leading-relaxed pt-3'>{informasi.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faq