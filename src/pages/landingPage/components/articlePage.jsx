import React from "react";
import { NavLink } from "react-router-dom";
import IconImage from '../../../assets/icon-article.svg'

function ArticlePage() {
    return (
        <div id="article" className="flex justify-center h-screen gap-24 scroll-mt-[10vh]">
            <div className="flex flex-col text-white gap-8 mt-30">
                <h1 className="text-5xl font-bold">Mulai Pelajari <br/> Keuangan Lebih Dalam</h1>
                <p className="text-xl"> Finansaku menyediakan berbagai artikel menarik seputar <br/> pengelolaan keuangan, pembuatan anggaran, hingga <br/> tips menabung. Yuk, tingkatkan literasi finansialmu!</p>
                <div className='bg-[#3A86FF] w-fit rounded-2xl border border-white py-2 px-4 mt-6 text-center font-bold'>
                    <NavLink to={"/Article"}>Baca Artikel Sekarang</NavLink>
                </div>
            </div>

            <div>
                <img src={IconImage} alt="" />
            </div>
        </div>
    );
}

export default ArticlePage;
