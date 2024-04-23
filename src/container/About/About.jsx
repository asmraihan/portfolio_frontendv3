import React from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { useTheme } from '../../constants/theme';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const phrase = `Hello! I'm Raihan,  I am a Fullstack developer from Bangladesh. I started with Javascript, developed some Frontend projects. For the past year i have been trying to improve my software knowledge everyday, finally here I am. <br /> You can contact me for more information about me.` 

const abouts = [
    { title: 'Frontend', description: 'React, Tailwind, Material-UI', imgUrl: images.about01 },
    { title: 'Backend', description: 'ExpressJS, MongoDB', imgUrl: images.about02 },
    { title: 'Mobile App', description: 'React Native, Electron', imgUrl: images.about03 },
    { title: 'Web Application', description: 'Git, Rest API', imgUrl: images.about04 },
]
const PreviewAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.8,
        }
    }
}

const About = () => {
    const { isTheme } = useTheme();

    let refs = useRef([]);
    const container = useRef(null);
    let body = [];


    const splitWords = (phrase) => {
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(<p key={word + "_" + i}>{letters}</p>)
        })
        return body
    }
    /* https://blog.olivierlarose.com/tutorials/text-gradient-opacity-on-scroll */
    const splitLetters = (word) => {
        let letters = []
        word.split("").forEach((letter, i) => {
            letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
        })
        return letters;
    }

    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen '>
            <h2 data-aos="zoom-in-up" className='text-4xl font-bold text-center'>About me</h2>
            <div className='app px-5 profile mx-auto flex justify-center items-start grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-20'>
                {
                    abouts.map((about, index) => (

                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            variants={PreviewAnimation}
                            className={`flip-effect dark:bg-[#0F1011] bg-gray-500/5 flex justify-between p-4 rounded-lg gap-4 w-11/12 lg:w-[480px] mx-auto`}
                            key={index}
                        >
                            <div className='w-1/2'>
                                <h2 className='font-bold mt-5'>{about.title}</h2>
                                <p className='text-sm text-gray-500 mt-2 whitespace-pre-wrap'>{about.description}</p>
                            </div>

                            <img src={about.imgUrl} alt={about.title}
                                className='w-1/2 lg:h-fit overflow-clip rounded-xl object-cover' />
                        </motion.div>
                    ))
                }
            </div>

            <div data-aos="fade-up" className="w-5/6 lg:w-full lg:max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold mb-3">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1 tracking-wide ">

                            Hello! I'm Raihan, <br /> I am a Fullstack developer from Bangladesh. I started with Javascript, developed some Frontend projects.
                            For the past year i have been trying to improve my software knowledge everyday, finally here I am. <br /> You can contact me for more information about me.

                        </p>
                    </div>
                    <div className="relative flex-shrink-0 hover:animate-pulse">
                        <img src={`${isTheme === 'dark' ? 'https://i.ibb.co/ZxMqQ6F/medark.jpg' : 'https://i.ibb.co/thwbhK7/melight.jpg'}`} style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                        <div className="absolute w-full h-full top-1 -right-1 border-4 rounded-full lg:rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppWrap(About, 'about');