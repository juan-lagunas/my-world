'use client';
import { useState } from 'react';


export default function World() {
    const [sticker, setSticker] = useState(true);
    
    function stickerClick() {
        setSticker(!sticker)
    };

    return (
        <>
            <main className="snap-y overflow-y-scroll snap-mandatory h-screen">
                <section id="home" className="h-screen flex snap-start bg-black">
                    <div id="sticker" onClick={stickerClick} className="max-[400px]:h-64 max-[400px]:w-10/12 h-72 w-[400px] sm:w-[600px] sm:h-96 m-auto text-center bg-[#ff1313] rounded-[45px] grid grid-rows-3 shadow-2xl shadow-[rgb(42,56,255)] hover:shadow-[rgb(134,42,255)] hover:scale-105 transiton ease-in-out duration-300 cursor-pointer">
                        <div className="row-span-1 text-white flex font-extrabold">
                            <div className="m-auto">
                                <div className="text-5xl sm:text-7xl uppercase">Hello</div>
                                <div className="text-2xl sm:text-3xl ">my name is</div>
                            </div>
                        </div>
                        <div className="row-span-2 bg-white h-[95%] w-[95%] mx-auto rounded-t-none rounded-b-[45px] flex font-bold">
                            { sticker ? <div className="font-marker text-5xl sm:text-7xl m-auto">Juan Lagunas</div> 
                                : 
                                <div className="font-marker text-4xl m-auto">
                                    <div className="sm:p-10">I am a CS student with an array of <a className="text-[rgb(109,109,109)] hover:text-blue-700 transition ease-in-out duration-100" href="#skills">[ skills ]</a></div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                
                <section id="about" className="h-screen flex snap-start bg-zinc-100">
                    <div className="w-11/12 sm:w-1/2 m-auto">
                        <div className=" text-center mb-5 sm:mb-10">
                            <div className="text-3xl sm:text-7xl font-bold mb-3 sm:mb-6">Sem integer vitae justo</div>
                            <div className=" sm:text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="relative h-[650px] w-full flex gap-20 snap-x overflow-x-scroll snap-mandatory">
                            <div className="w-[80%] h-[600px] snap-center float-left shrink-0 bg-[#6161a5] rounded-2xl shadow-lg my-auto">
                                a
                            </div>
                            <div className="w-[80%] h-[600px] snap-center float-left shrink-0 bg-[#b174ae] rounded-2xl shadow-lg my-auto scale-105">
                                b
                            </div>
                            <div className="w-[80%] h-[600px] snap-center float-left shrink-0 bg-[#5bb995] rounded-2xl shadow-lg my-auto">
                                c
                            </div>
                            <div className="w-[80%] h-[600px] snap-center float-left shrink-0 bg-[#b9905b] rounded-2xl shadow-lg my-auto">
                                d
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="h-screen flex snap-start">
                    <div className="w-3/4 sm:w-1/2 m-auto grid grid-cols-2 gap-6">
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                    </div>
                </section>

                <section id="projects" className="h-screen flex snap-start bg-zinc-100">
                    <div className="w-3/4 sm:w-1/2 m-auto grid grid-cols-2 gap-6">
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                    </div>
                </section>

                <section id="contact" className="h-screen flex snap-start">
                    <div className="w-3/4 sm:w-1/2 m-auto grid grid-cols-2 gap-6">
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                        <div className="h-96 rounded-2xl bg-zinc-900"></div>
                    </div>
                </section>
                
            </main>
        </>
    );
}