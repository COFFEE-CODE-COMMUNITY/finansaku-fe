import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import HeaderArticle from "../../components/headerArticle";
import Footer from "../../components/footer";
import ImgArticle from '../../assets/article/img-article.jpg'
import ImgArticle1 from '../../assets/article/img-article1.svg'
import ImgArticle2 from '../../assets/article/img-article2.svg'
import ImgArticle3 from '../../assets/article/img-article3.svg'
import ImgArticle4 from '../../assets/article/img-article4.svg'
import ImgArticle5 from '../../assets/article/img-article5.svg'

function Article(){
    const keterangan = [
        {image : ImgArticle , title: "Cara Mudah Membuat Anggaran Bulanan", time : "10 Okt 2025", from :"Tim Finansaku" },
        {image : ImgArticle1, title: "Tips Menabung dari Gaji Pertama", time : "10 Okt 2025", from : "Tim Finansaku"},
        {image :ImgArticle2 , title: "Strategi Menabung untuk Tujuan Besar", time : "10 Okt 2025", from : "Tim Finansaku"},
        {image :ImgArticle3 , title: "Belanja Cerdas : Tips Menghindari Boros", time : "10 Okt 2025", from : "Tim Finansaku"},
        {image :ImgArticle4 , title: "Cara Mengatur Keuangan Saat Liburan", time : "10 Okt 2025", from : "Tim Finansaku"},
        {image :ImgArticle5 , title: "Tips Finansial untuk Anak Kost", time : "10 Okt 2025", from : "Tim Finansaku"},
    ]

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return(
        <>
        <HeaderArticle/>
        <div className="text-white flex items-center justify-center min-h-screen px-10">
            <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-10">
                {keterangan.map((informasi, index) => (
                    <div key={index} className="bg-white text-black overflow-hidden w-[290px] h-[270px] rounded-2xl flex flex-col shadow-md">
                        <div className="relative">
                            <img src={informasi.image} alt={informasi.title} className="w-full h-[150px] object-cover" />
                            <p className="absolute bottom-2 right-3 text-xs text-white">{informasi.time}</p>
                        </div>

                        <div className="p-3 flex flex-col justify-between flex-grow">
                            <NavLink to={"/readArticle"} 
                            state={{
                                title : informasi.title,
                                image : informasi.image,
                                time : informasi.time,
                                from : informasi.from
                            }} className="font-semibold text-[15px] mb-4 hover:underline" >
                                {informasi.title}
                            </NavLink>

                            <p className="text-xs text-right text-gray-600">{informasi.from}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Article