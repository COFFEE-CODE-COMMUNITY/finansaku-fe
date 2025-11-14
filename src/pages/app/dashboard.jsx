import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css" // default css bawaan
import { useReminders } from "../../hooks/useReminder";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, LabelList, ResponsiveContainer} from "recharts";
import { dataDashboard } from '../../api/authApi'
// import { useNavigate } from 'react-router-dom'

function Dashboard(){
    
    const [selectedDate, setSelectedDate] = useState(new Date())
    const {reminders = [], setReminders} = useReminders()
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(true)

    // const navigate = useNavigate()

    useEffect(() => {
        const fetchDataDashboard = async () => {
            try{
                const response = await dataDashboard()
                if (!response.ok) throw new Error ('Gagal Mengambil Data')
                
                const data = await response.json()
                console.log(data)
                setDashboardData(data)
            } catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchDataDashboard()
    }, [])

    {/* Deleter reminder yang udah lewat tanggalnya */}
    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (setReminders) {
        setReminders((prev) =>
            prev.filter((r) => {
            const reminderDate = new Date(r.date);
            reminderDate.setHours(0, 0, 0, 0);
            return reminderDate >= today;
            })
        );
    }
  }, [setReminders]);

    // if (!dashboardData) {
    //     navigate('/default-dashbaord')
    // }

    
    const colors = ["#8979FF", "#3CC3DF", "#FF928A", "#FFD166", "#06D6A0"]

    const data = dashboardData?.data?.monthlyCategories || []
    // const dataPendapatan = dashboardData?.data?.summary?.totalBalance

    const bar = data.map((saku) => ({ 
        kategoriBar : saku.category,
        amount : saku.amount
    }))

    const pie = data.map((saku) => ({
        kategoriPie: saku.category,
        presentase : parseFloat(saku.percentage)
    }))

    const bulan = dashboardData?.data?.categoryTrend?.months || []; 
    const categoriesTrend = dashboardData?.data?.categoryTrend?.categories || [];


    const line = bulan.map((month, index) => { 
        const monthData = { bulan: month }; // create object for a month
        categoriesTrend.forEach((saku) => { 
            monthData[saku.name] = saku.data[index] || 0; // 
        });
         return monthData;
    });

    // categories only for linenya
    const kategoriLine = categoriesTrend.map(saku => ({ category: saku.name }));

    // take the month, if only a month then show it, if there is > 1 show the first and the last month
    const title = bulan.length > 0 ? `${bulan[0]}${bulan.length > 1 ? " - " + bulan[bulan.length - 1] : ""}` : "Line Chart";

    const titleLast = bulan.length > 0 ? bulan[bulan.length - 1] : "Line Chart";


    const warnaReminder = (dotWarna) => {
        switch(dotWarna){
            case "penting" :
                return "#FF7C7C"
            case "sedang" : 
                return "#FFF58C"
            case "biasa" : 
                return "#B6F4B6"
            default : 
                return "#D1D5DB";
        }
    }

    if (loading){
        return <p className="text-white text-center mt-10">Memuat data dashboard...</p>
    }

    if (!dashboardData){
        return <p className="text-white text-center mt-10">Tidak ada data dashboard.</p>
    }

    // dot calendar
    const titleContent = ({ date, view}) => {
        if (view === "month"){
            const reminderTanggal = reminders.filter(
                (r) => new Date(r.date).toDateString() === date.toDateString()
            )
            if (reminderTanggal.length > 0){
                return (
                    <div className='flex justify-center mt-1'>
                        {reminderTanggal.map((r, i) => (
                            <span key={i} className='w-2 h-2 rounded-full mx-[1px]' style={{backgroundColor : warnaReminder(r.kategori)}}></span>
                        ))}
                    </div>
                )
            }
        }
        return null
    }

    //{dataPendapatan.toLocaleString('id-ID')}
    return(
        <div className="flex flex-col text-white w-full overflow-hidden">
            {/* <h2 className=" text-start text-xl">Lihat gambaran keuanganmu di sini. Mulai dari alokasi tiap kategori hingga notes dalam kalender.</h2> */}
            <p className='text-xl'>Pendapatanmu bulan: Rp.</p>
            <div className='grid grid-cols-3 grid-rows-2 mt-2.5 justify-center gap-x-2.5 gap-y-0 h-full'>
                
                {/* Bar */}
                <div className="bg-white h-[270px] rounded-2xl p-2.5 shadow">
                    <h2 className="text-lg font-semibold text-black">{titleLast}</h2>
                    <p className="text-black text-xs mb-2">Diagram ini menampilkan hasil survei nominal anggaranmu.</p>

                    <ResponsiveContainer width="100%" height={170}>
                        <BarChart data={bar} layout='vertical' margin={{top : -10, right : 100, left : 20, bottom : 0}}>
                            <XAxis type="number" stroke='black' tick={false}/>
                            <YAxis dataKey="kategoriBar" type='category' stroke='#000' strokeWidth={2} tick={false}/>
                            <Tooltip/>
                            <Bar dataKey="amount">
                                {bar.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                                ))}
                                <LabelList dataKey="amount" position="insideRight" formatter={(value) => `Rp. ${value.toLocaleString()}`} fill='white'/>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <div className="flex justify-center gap-2.5">
                        {bar.map((item,index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className='w-2.5 h-2.5 rounded-sm' style={{backgroundColor: colors[index % colors.length]}}></span>
                                <span className='text-black text-sm font-xs'>{item.kategoriBar}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diagram Pie */}
                <div className='bg-white rounded-2xl p-2.5 flex h-[270px] flex-col shadow'>
                    <h2 className='text-lg text-start font-semibold text-black'>{titleLast}</h2>
                    <p className="text-black text-xs mb-4"> Diagram ini menampilkan hasil survei dalam bentuk persentase.</p>
                    
                    <div className='flex flex-row justify-between items-center h-[300px]'>
                        <ResponsiveContainer width='60%' height={250} className="ml-4 mt-2">
                            <PieChart>
                                <Pie data={pie} dataKey="presentase" nameKey="kategoriPie" cx="50%" cy="35%" outerRadius={50} label={({ presentase }) => `${presentase.toFixed(0)}%`}>
                                    {pie.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                                    ))}
                                </Pie>
                                <Tooltip/>
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="flex flex-col gap-2.5 justify-start items-start text-black">
                            {pie.map((data, index) => (
                                <div key={index} className='flex items-center gap-2.5'>
                                    <span className='w-3 h-3 rounded-full' style={{backgroundColor : colors[index % colors.length]}}></span>
                                    <p className='text-sm'>{data.kategoriPie}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                { /*Kalendar + Reminder */}
                <div className='bg-white rounded-2xl p-4 row-span-2 flex flex-col items-center shadow'>
                    <h2 className='text-lg font-semibold text-black mb-4'>Kalendar</h2>
                    <Calendar onChange={setSelectedDate} value={selectedDate} className='rounded-lg p-2 text-black w-full' tileContent={titleContent}/>
                    
                    <div className="mt-4 space-y-3 w-full max-h-[145px] overflow-y-auto pr-2">
                        {reminders.length === 0 ? (
                            <p className="text-black text-sm text-center italic">Belum ada reminder</p>
                        ) : (
                            reminders.map((r, index) => {
                                const tanggal = new Date(r.date).getDate().toString().padStart(2, "0")
                                return(
                                    <div key={index} className='flex items-center rounded-xl p-3 shadow-sm' style={{backgroundColor : warnaReminder(r.kategori)}}>
                                        <div className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-md mr-3 bg-white/30">
                                            <span className="text-lg font-bold text-black">{tanggal}</span>
                                        </div>
                                        <p className='text-black text-base font-medium break-words'>
                                            • {r.judul}
                                        </p>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
               
                {/* Line Chart */}
                <div className="bg-white rounded-2xl p-2.5 shadow col-span-2">
                    <h2 className="text-lg font-semibold text-black">{title}</h2>
                    <p className="text-black text-xs mb-2.5">Grafik ini menampilkan tren perubahan budgeting selama tiga bulan.</p>
                    
                    <div className='flex justify-center items-center'>
                        <ResponsiveContainer  width="80%" height={200}>
                            <LineChart data={line}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                                <XAxis dataKey="bulan" stroke="#000" />
                                <YAxis stroke="#000" angle={-45}  />
                                <Tooltip />
                                <Legend />
                                {kategoriLine.map((saku, index) => (
                                    <Line
                                    key={saku.category}
                                    type="monotone"
                                    dataKey={saku.category}
                                    stroke={colors[index % colors.length]}
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                    activeDot={{ r: 4 }}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard