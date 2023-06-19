import React from 'react';
import { useTheme } from '../../constants/theme';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
    const { isTheme, toggleTheme } = useTheme();

    return (
        <div className="w-5/6 mx-auto mb-4 mt-10 lg:py-8 border-t border-gray-500/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-lg text-zinc-400 text-center lg:text-start">© 2022 - {new Date().getFullYear()} <a href="https://github.com/asmraihan" className={`${isTheme === 'dark' ? 'text-[ #f5f5f5] hover:text-white' : 'text-zinc-500 hover:text-black'}`}><FaGithub className='inline mb-1 ml-1'></FaGithub> Raihan</a> . All rights reserved.</p>
                <div className="text-right">
                    <p className="text-zinc-400 select-none">Made with <span className='text-xs'>React, Tailwind, HeadlessUi, <br />  Framer Motion, Three Js, React Three</span></p>
                 
                </div>
            </div>
        </div>
    );
};

export default Footer;