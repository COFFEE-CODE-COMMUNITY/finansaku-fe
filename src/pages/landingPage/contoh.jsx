import React from "react";

import { useLocation, NavLink } from "react-router-dom";

function ReadArticle() {
  const location = useLocation();
  const artikel = location.state;

  const cardArticles = [
      { title: "Tips Menabung dari Gaji Pertama", kategori: "Keuangan", img: Image },
      { title: "Strategi Menabung untuk Tujuan Besar", kategori: "Keuangan", img: Image },
      { title: "Belanja Cerdas : Tips Menghindari Boros", kategori: "Keuangan", img: Image },
      { title: "Cara Mengatur Keuangan Saat Liburan", kategori: "Keuangan", img: Image },
      { title: "Tips Finansial untuk Anak Kos", kategori: "Keuangan", img: Image },
      { title: "Tips Menabung dari Gaji Pertama", kategori: "Keuangan", img: Image },
      { title: "Tips Menabung dari Gaji Pertama", kategori: "Keuangan", img: Image },
      { title: "Tips Menabung dari Gaji Pertama", kategori: "Keuangan", img: Image },
      { title: "Tips Menabung dari Gaji Pertama", kategori: "Keuangan", img: Image },
    ];

  // kalau user akses langsung tanpa klik artikel (state kosong)
  if (!artikel) {
    return <p className="text-white p-10">Artikel tidak ditemukan 😢</p>;
  }

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      <div className="flex flex-col text-white h-full w-[600px] ml-24 py-6">
        <div className="flex-shrink-0">
          <h2 className="font-bold text-3xl mb-2">
            {artikel.title}
          </h2>
          <p className="mb-4">{artikel.from} | Keuangan | {artikel.time}</p>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar mt-4 pr-2">
          <img src={artikel.image} alt="Artikel" className="h-fit w-full object-cover rounded-lg mb-8" />

          <p><strong>Paragraf 1.</strong> ... (isi artikel di sini)</p>
        </div>
      </div>

      {/* Sidebar artikel lain tetap seperti semula */}
      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar mt-4">
        {cardArticles.map((card, index) => (
            <div key={index} className="flex gap-0 h-fit w-full mb-3 border border-white/10 p-2.5">
                <NavLink to={"/readArticle"} className="flex">
                    <img src={card.img} alt={card.title} className="h-[80px] w-fit mr-3 object-cover"/>
                    <div className="flex text-white flex-col justify-between items-start">
                        <h3 className="font-semibold text-sm">{card.title}</h3>
                        <p className="text-xs">{card.kategori}</p>
                    </div>
                </NavLink>
            </div>
        ))}
        </div>
    </div>
  );
}

export default ReadArticle;
