import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import { useTheme } from '../../constants/theme';
import { FaBars, FaCaretRight, FaEnvelope, FaFacebook, FaMoon, FaSun, FaTimes, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {

    let [isOpen, setMenu] = useState(false);
    const { isTheme, toggleTheme } = useTheme();

    let sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "work", label: "Work" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    let [activeTab, setActiveTab] = useState(sections[0].id);

    const setIsOpen = (value) => {
        if (value === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        setMenu(value);
    }

    return (
        <div className='lg:w-5/6 mx-auto min-h-[fix] sticky top-0 left-0 z-40 '>
            <div className="py-6 px-6 lg:px-0 backdrop-blur-sm">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-4 ">
                        <a href="/" className={`relative whitespace-nowrap ${isTheme === 'dark' ? 'dark:text-[ #f5f5f5]' : 'text-[#050505]'} text-center text-2xl font-bold transition-all duration-200`}><svg aria-hidden="true" viewBox="0 0 418 42" className={`absolute font-bold mt-[22px] top-3/5 left-0 h-[0.45em] w-full  ${isTheme === 'dark' ? 'fill-[#f5f5f5]' : 'fill-[#050505]'}`} preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">Raihan</span></a>

                    </div>
                    {/* middle starts */}
                    <div className="flex space-x-1 hidden lg:block">
                        {sections.map((tab) => (
                            <a
                                href={`#${tab.id}`}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                                    } relative rounded-full px-3 py-1.5 font-medium ${isTheme === 'dark' ? 'dark:text-[#f5f5f5]' : 'text-[#050505]'} outline-sky-400 transition focus-visible:outline-2`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className={`absolute inset-0 z-10 ${isTheme === 'dark' ? 'dark:bg-[#f5f5f5] mix-blend-difference' : 'bg-[#3D25FA]/50 mix-blend-multiply'}`}
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 ">
                        <div onClick={() => setIsOpen(true)} className="lg:hidden text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200">
                            <FaBars></FaBars>
                        </div>
                        <div onClick={() => toggleTheme()} className="text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200">
                            {isTheme === 'dark' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
                        </div>

                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                appear
            >
                <Transition.Child
                    style={{ zIndex: 999 }}
                    as={"div"}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="fixed right-0 top-0 w-full h-full bg-black/50"
                    onClick={() => setIsOpen(false)}
                />
                <Transition.Child

                    enter="transition-all duration-500"
                    enterFrom="opacity-0 translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all duration-200"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-full"
                    className={`fixed right-0 top-0 w-full lg:w-[30rem] h-full ${isTheme === 'dark' ? 'dark:bg-[#050505]' : 'bg-[#f5f5f5]'} lg:rounded-l-2xl p-6 z-[1000]`}
                >
                    <div >
                        <div className="flex justify-between w-full items-center">
                            <p className="text-2xl font-semibold">Raihan</p>

                            <div onClick={() => setIsOpen(false)} className="fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg ">
                                <FaTimes></FaTimes>
                            </div>

                        </div>

                        <div className="mt-8 space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                                <p className={`text-xs font-medium uppercase ${isTheme === 'dark' ? 'dark:text-white/50' : 'text-black/50'}`}>Menu</p>
                                <div className={`w-full h-0.5 ${isTheme === 'dark' ? 'bg-white/50' : 'bg-black/50'}`} />
                            </div>
                            {sections.map((section, index) => {
                                return <a href={`#${section.id}`} key={index} 
                                onClick={()=>setActiveTab(section.id)}>
                                    <p
                                        onClick={() => setIsOpen(false) }
                                        
                                        className={`flex items-center gap-4 text-xl transition-all duration-200 ${activeTab === section.id ? 'bg-gray-500/5 text-black dark:text-[#3D25FA] font-semibold' : ' text-gray-600'} ${isTheme === 'dark' ? 'dark:text-[#f5f5f5]' : 'text-[#050505]'} px-4 py-3 rounded-lg`}
                                    >

                                        <FaCaretRight></FaCaretRight>
                                        <p>{section.label}</p>
                                    </p>
                                </a>
                            })}
                        </div>

                        <div className="mt-8 space-y-2">
                            <div className="flex items-center gap-2">
                                <p className={`text-xs font-medium uppercase ${isTheme === 'dark' ? 'dark:text-white/50' : 'text-black/50'}`}>Social</p>
                                <div className={`w-full  h-0.5 ${isTheme === 'dark' ? 'bg-white/50' : 'bg-black/50'}`} />
                            </div>
                            <div className="flex items-center gap-2">

                                <a href='https://www.facebook.com/asmraihanbh/' target="_blank" rel="noreferrer">
                                    <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} >
                                        <FaFacebook />
                                    </div>
                                </a>
                                <a href='https://twitter.com/AsmRaihan4' target="_blank" rel="noreferrer">
                                    <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} >
                                        <FaTwitter />
                                    </div>
                                </a>
                                <a href='https://wa.me/8801630490203' target="_blank" rel="noreferrer">
                                    <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} >
                                        <FaWhatsapp />
                                    </div>
                                </a>
                              

                                <a href="mailto:asmraihanctg14@gmail.com">
                                    <div
                                   
                                        className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                    >
                                        <FaEnvelope className='text-xl'></FaEnvelope>
                                        <p>Contact</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </div>
    );
};

export default Navbar;