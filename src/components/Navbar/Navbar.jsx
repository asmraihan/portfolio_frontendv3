import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import { useTheme } from '../../constants/theme';
import { FaBars, FaCaretRight, FaEnvelope, FaFacebook, FaLinkedin, FaMoon, FaSun, FaTimes, FaTwitter, FaWhatsapp } from 'react-icons/fa';

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
                        <a href="/" className={`relative whitespace-nowrap text-center text-2xl font-bold transition-all duration-200 text-[#050505] dark:text-[#f5f5f5]`}><span className="relative">Raihan</span></a>

                    </div>
                    {/* middle starts */}
                    <div className="flex space-x-1 hidden lg:block">
                        {sections.map((tab) => (
                            <a
                                href={`#${tab.id}`}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-black/60 dark:hover:text-white/60"
                                    } relative rounded-full px-3 py-1.5 font-medium  outline-sky-400 transition focus-visible:outline-2 text-[#050505] dark:text-[#f5f5f5]`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className={`absolute inset-0 z-10 dark:bg-[#f5f5f5] dark:mix-blend-difference bg-[#3D25FA]/50 mix-blend-multiply `}
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
                            <FaBars />
                        </div>
                        <div onClick={() => toggleTheme()} className="text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200">
                            <FaMoon className='flex dark:hidden' /> <FaSun className='hidden dark:flex ' />
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
                    className={`fixed right-0 top-0 w-full lg:w-[30rem] h-full dark:bg-[#050505] bg-[#f5f5f5]  lg:rounded-l-2xl p-6 z-[1000]`}
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
                                <p className={`text-xs font-medium uppercase dark:text-white/50 text-black/50`}>Menu</p>
                                <div className={`w-full h-0.5 dark:bg-white/50 bg-black/50`} />
                            </div>
                            {sections.map((section, index) => {
                                return <a href={`#${section.id}`} key={index}
                                    onClick={() => setActiveTab(section.id)}>
                                    <p
                                        onClick={() => setIsOpen(false)}

                                        className={`flex items-center gap-4 text-xl transition-all duration-200 ${activeTab === section.id ? 'bg-gray-500/5 text-black dark:text-[#3D25FA] font-semibold' : ' text-gray-600'} dark:text-[#f5f5f5] text-[#050505] px-4 py-3 rounded-lg`}
                                    >

                                        <FaCaretRight></FaCaretRight>
                                        <p>{section.label}</p>
                                    </p>
                                </a>
                            })}
                        </div>

                        <div className="mt-8 space-y-2">
                            <div className="flex items-center gap-2">
                                <p className={`text-xs font-medium uppercase dark:text-white/50 text-black/50`}>Social</p>
                                <div className={`w-full  h-0.5 dark:bg-white/50 bg-black/50`} />
                            </div>
                            <div className="flex items-center gap-2">

                                {/* <a href='https://www.facebook.com/asmraihanbh/' target="_blank" rel="noreferrer">
                                    <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} >
                                        <FaFacebook />
                                    </div>
                                </a> */}
                                <a href='https://www.linkedin.com/in/asmraihan/' target="_blank" rel="noreferrer">
                                    <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} >
                                        <FaLinkedin />
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
                                        <p>Email</p>
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