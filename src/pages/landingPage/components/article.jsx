import React from "react";
import EllipseBottom from "../../../assets/EllipseBottom2.svg";
import Img from "../../../assets/img-article.jpg";
import {NavLink} from 'react-router-dom'
import Navbar from "./navbar";
import HeaderArticle from "./header-article";
import Footer from "./footer";

function Article() {
  const keterangan = [
    { image: Img, title: "Cara Mudah Membuat Anggaran Bulanan", time: "Tim Finansaku 10 Okt 2025" },
    { image: Img, title: "Tips Menabung dari Gaji Pertama", time: "Tim Finansaku 10 Okt 2025" },
    { image: Img, title: "Strategi Menabung untuk Tujuan Besar", time: "Tim Finansaku 10 Okt 2025" },
    { image: Img, title: "Belanja Cerdas : Tips Menghindari Boros", time: "Tim Finansaku 10 Okt 2025" },
    { image: Img, title: "Cara Mengatur Keuangan Saat Liburan", time: "Tim Finansaku 10 Okt 2025" },
    { image: Img, title: "Tips Finansial untuk Anak Kost", time: "Tim Finansaku 10 Okt 2025" },
  ];

  return (
    <>
    <Navbar/>
    <HeaderArticle/>

    <div className="text-white flex items-center justify-center h-screen px-10">
      <div className="grid grid-cols-3 grid-rows-2 gap-x-25 gap-y-15">
        {keterangan.map((informasi, index) => (
          <div
            key={index}
            className="bg-white text-black overflow-hidden w-[260px] h-[260px] rounded-2xl flex flex-col"
          >
            <img
              src={informasi.image}
              alt={informasi.title}
              className="w-full h-[140px] object-cover"
            />
            <div className="p-3 flex flex-col justify-between flex-grow">
              <NavLink className="font-semibold text-[15px] leading-snug mb-4">
                {informasi.title}
              </NavLink>
              <p className="text-xs text-gray-700 text-right">
                {informasi.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Article;
