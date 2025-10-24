import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import {articles} from '../landingPage/article/articleData'

function ReadArticle(){
    const location = useLocation();
    const {state} = location
    // Artikel lainnya untuk bagian kanan
    const article = state ? articles.find((a) => a.title === state.title) : null;

    if (!state || !state.title){
        return (
            <div className="flex justify-center items-center min-h-screen text-white">
                <p className="text-xl">Artikel tidak ditemukan....</p>
            </div>
        )
    }

    if (!article){
        return(
            <div className="flex justify-center items-center min-h-screen text-white">
                <p className="text-xl">Artikel tidak ditemukan....</p>
            </div>
        )
    }

    const related = articles.filter((a) => a.title !== article.title) // untuk yg kanan

    return(
        <div className="flex h-screen w-full relative overflow-hidden">
            <div className="flex flex-col text-white h-full w-[600px] ml-32 py-6">
                <div className="flex-shrink-0">
                    <h2 className="font-bold text-3xl mb-2">{article.title}</h2>
                    <p className="mb-4">{article.author} | {article.kategori}</p>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar mt-4 pr-2">
                    <img src={article.img} alt={article.title} className="h-fit w-full object-cover mb-8"/>

                    {article.paragraphs.map((para, index) => (
                        <p key={index} className="mb-4" dangerouslySetInnerHTML={{__html : para}}></p>
                    ))}
                </div>
            </div>

            <div className="border-1 border-white/10 flex flex-col absolute right-0 top-0 h-full w-[500px] p-4 pr-6 text-white ">
                <div className="sticky top-0 pb-2 z-10">
                    <p className="text-lg font-semibold">Lihat artikel terkait lainnya</p>
                </div>

                <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar mt-4">
                    {related.map((card, index) => (
                        <div key={index} className="flex gap-0 h-fit w-full mb-3 borde border-white p-2.5">
                            <NavLink to="/readArticle"
                                state={{
                                    title: card.title,
                                    image : card.img,
                                    from: card.author,
                                    time: state.time
                                }}
                                className="flex"
                            >
                                <img src={card.img} alt={card.title} className="h-[80px] w-fit mr-4 object-cover" />
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
    )
}

export default ReadArticle