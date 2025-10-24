import React from "react";
import Image from "../../assets/img-article.jpg";
import {NavLink} from 'react-router-dom'

function ReadArticle() {
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

  return (
    <div className="flex h-screen w-full relative overflow-hidden">

      <div className="flex flex-col text-white h-full w-[600px] ml-24 py-6">
        <div className="flex-shrink-0">
          <h2 className="font-bold text-3xl mb-2">
            Cara Mudah Membuat Anggaran Bulanan
          </h2>
          <p className="mb-4">Tim Finansaku | Keuangan |</p>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar mt-4 pr-2">
          <img src={Image} alt="Artikel" className="h-fit w-full object-cover rounded-lg mb-8" />
          <p className="mb-4">
            <strong>Paragraf 1.</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Integer nec odio. Praesent libero. Sed cursus ante dapibus
            diam. Nulla facilisi. Ut fringilla, augue in dapibus pretium, metus leo
            luctus risus, nec tincidunt justo nunc sit amet elit. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Sed aliquam, urna ut sollicitudin fermentum, neque justo tincidunt nunc,
            vitae hendrerit magna erat eget risus.
          </p>

          <p>
            <strong>Paragraf 2.</strong> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum.
          </p>

          <p>
            <strong>Paragraf 2.</strong> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum.
          </p>

          <p>
            <strong>Paragraf 2.</strong> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum.
          </p>
        </div>
      </div>

      <div className="border-l border-white flex flex-col absolute right-0 top-0 h-full w-[450px] p-4 pr-6 text-white">
        <div className="sticky top-0 pb-2 z-10">
          <p className="text-lg font-semibold">
            Lihat artikel terkait lainnya
          </p>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar mt-4">
          {cardArticles.map((card, index) => (
            <div key={index} className="flex gap-0 h-fit w-full mb-3 border border-white/10 p-2.5">
                <NavLink className="flex">
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
    </div>
  );
}

export default ReadArticle;
