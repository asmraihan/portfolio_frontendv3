import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app_social top-2FIX absolute mt-[40vh] lg:mt-[70vh] cursor-pointer'>
            <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10 my-1`}>
                <FaWhatsapp></FaWhatsapp>
            </div>
            <div className={`text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10 my-1`}>
                <FaFacebook></FaFacebook>
            </div>
            
        </div>
    );
};

export default SocialMedia;