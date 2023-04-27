import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { useTheme } from '../../constants/theme';

const abouts = [
    { title: 'Frontend Development', description: 'I am a full stack dev', imgUrl: images.about01 },
    { title: 'Backend Development ', description: 'I am a full stack dev', imgUrl: images.about02 },
    { title: 'Mobile App', description: 'I am a full stack dev', imgUrl: images.about03 },
    { title: 'Web Application', description: 'I am a full stack dev', imgUrl: images.about04 },
]

const About = () => {
    const { isTheme, toggleTheme } = useTheme();
    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen '>
            <h2 className='text-4xl font-bold text-center '>About me</h2>
            <div className='app px-5 profile mx-auto flex justify-center items-start grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20'>
                {
                    abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2, type: 'tween' }}
                            className={`flip-effect ${isTheme === 'dark' ? 'dark:bg-[#0F1011]' : 'bg-gray-500/5'}   flex justify-between p-4 rounded-lg gap-4`}
                            key={index}
                        >
                            <div>
                                <h2 className='font-bold mt-5'>{about.title}</h2>
                                <p className='text-sm text-gray-500 mt-2'>{about.description}</p>
                            </div>

                            <img src={about.imgUrl} alt={about.title}
                                className='max-w-[238px] h-fit overflow-clip rounded-xl object-cover' />
                        </motion.div>
                    ))
                }
            </div>


            <div className="w-5/6 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1">

                            Hello! I'm Raihan, <br /> I am a Fullstack developer from Bangladesh. I started with Javascript, developed some Frontend projects.
                            For the past year i have been trying to improve my software knowledge everyday, finally here I am. <br /> You can contact me for more information about me.
                          
                        </p>

                    </div>
                    <div className="relative flex-shrink-0 hover:animate-pulse">
                        <img src={images.me} style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                        <div className="absolute w-full h-full top-1 -right-1 border-4 rounded-full lg:rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppWrap(About, 'about');