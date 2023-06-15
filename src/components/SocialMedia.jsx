import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app_social top-2FIX absolute mt-[50vh] cursor-pointer hidden lg:block'>

        {/* 
        href='https://www.facebook.com/asmraihanbh/'
        href='https://twitter.com/AsmRaihan4' 
         href='https://wa.me/8801630490203'

        */}


            <div className='relative'>
            {/* <a   href='https://www.facebook.com/asmraihanbh/'
                    className="flex flex-row gap-0 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute -top-[16px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-14'>Contact</p>
                    <FaFacebook className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></FaFacebook>

                </a> */}
                <a   href='https://www.linkedin.com/in/asmraihan/' 
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[36px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <FaLinkedin className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></FaLinkedin>

                </a>
                <a   href='https://wa.me/8801630490203'
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[88px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <FaWhatsapp className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></FaWhatsapp>

                </a>
                <a href="mailto:asmraihanctg14@gmail.com"
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[140px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <FaEnvelope className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></FaEnvelope>

                </a>
            </div>

        </div>
    );
};

export default SocialMedia;