import React from 'react';
import { images } from '../../constants';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';

const abouts = [
    { title: 'Frontend Development', description: 'I am a full stack dev', imgUrl: images.about01 },
    { title: 'Backend Development ', description: 'I am a full stack dev', imgUrl: images.about02 },
    { title: 'Mobile App', description: 'I am a full stack dev', imgUrl: images.about03 },
    { title: 'Web Application', description: 'I am a full stack dev', imgUrl: images.about04 },
]

const About = () => {

    return (
        <div className='relative flex flex-col justify-center items-center '>
            <h2 className='text-4xl font-bold text-center '>About me</h2>
            <div className='app profile mx-auto flex justify-center items-start flex-wrap mt-8'>
                {
                    abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className='app_profile_item w-[190px] flex justify-start items-start flex-col m-7 '
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt={about.title}
                                className='w-full h-[120px] rounded-2xl object-cover' />
                            <h2 className='font-bold mt-5'>{about.title}</h2>
                            <p className='text-sm text-gray-500 mt-2'>{about.description}</p>
                        </motion.div>
                    ))
                }
            </div>

            {/* test */}
            <div
                // whileInView={{ opacity: 1 }}
                // whileHover={{ scale: 1.1 }}
                // transition={{ duration: 0.5, type: 'tween' }}
                className='flip-effect '
              
            >
                <div>
                <h2 className='font-bold mt-5'>Test Title</h2>
                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet.</p>
                </div>
                <img src={images.about01} alt=''
                    className='max-w-[238px] h-fit overflow-clip rounded-2xl object-cover' />
               
            </div>
            {/*  */}
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1">
                            Hello, I'm Raihan, fullstack developer.
                            I am a 4th year university student, I have been working with software/technology for about 6 months.
                            I started with Javascript, developed some Frontend projects.
                            For the past 6 months i have been trying to improve my software knowledge everyday, finally here I am.
                            Thank you for reading <FaHeart className='inline-block'></FaHeart>
                        </p>

                    </div>
                    <div className="relative flex-shrink-0 hover:animate-bounce ">
                        <img src={images.me} style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                        <div className="absolute w-full h-full top-1 -right-1 border-4 rounded-full lg:rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppWrap(About, 'about');