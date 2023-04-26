import React from 'react';

const Footer = () => {
    return (
        <div className="w-5/6 mx-auto py-12 border-t border-gray-500/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-lg text-zinc-400">© 2022 - {new Date().getFullYear()} <a href="https://github.com/asmraihan" className="text-zinc-400 hover:text-primary hover:dark:text-white">Raihan</a> . All rights reserved.</p>
                <div className="text-right">
                    <p className="text-zinc-400 select-none">Made with <span className='text-xs'>React, Tailwind, HeadlessUi, <br />  Framer Motion, Three Js, React Three</span></p>
                 
                </div>
            </div>
        </div>
    );
};

export default Footer;