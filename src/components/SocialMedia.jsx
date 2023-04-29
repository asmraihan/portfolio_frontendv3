import React from 'react';
import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app_social top-2FIX absolute mt-[50vh] cursor-pointer hidden lg:block'>

            <a href='https://www.facebook.com/asmraihanbh/' className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10 my-1`}>
                <FaFacebook></FaFacebook>
            </a>
            <a href='https://twitter.com/AsmRaihan4' className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10 my-1`}>
                <FaTwitter></FaTwitter>
            </a>
            <a href='https://wa.me/8801630490203' className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10 my-1`}>
                <FaWhatsapp></FaWhatsapp>
            </a>
            <div
                className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
            >
                <FaEnvelope className='text-xl'></FaEnvelope>
                <a href="mailto:asmraihanctg14@gmail.com">Contact</a>
            </div>

        </div>
    );
};

export default SocialMedia;