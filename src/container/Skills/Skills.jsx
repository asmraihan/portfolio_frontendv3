import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import SphereModel from "../../components/Sphere";
import TextCloud from '../../components/TextCloud';


const Skills = () => {
    const [skills, setSkills] = useState([])
    // const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    // useEffect(() => {
    //     fetch('experiences.json')
    //         .then(res => res.json())
    //         .then(data => setExperiences(data))
    // }, [])

    return (
        <div className='w-5/6 mx-auto relative mt-8 flex flex-col justify-center items-center lg:min-h-screen my-20 lg:my-0'>
            <h2 data-aos="zoom-in" className='text-4xl font-bold text-center mb-16'>Skills & Tools</h2>
           <div data-aos="fade-up" className='lg:flex justify-center items-center '>
           <div className='lg:w-1/2 w-full mx-auto'>
                <motion.div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                    {
                        skills.map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className='app_skills_item flex flex-col text-center m-2 lg:m-4 transition-all duration-300 ease-in-out'
                                key={skill.name}
                            >
                                <div className={`app_flex flex justify-center items-center bg-emerald-60 w-[90px] h-[90px] rounded-full dark:bg-[#0F1011] bg-zinc-200 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}>
                                    <img className='w-2/3 h-2/3' src= {skill.icon.asset._ref} alt="" />
                                </div>
                                <p className='p-text text-sm p-2'>
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))
                    }
                </motion.div>        
            </div>

            <div className='w-full lg:w-1/2 lg:h-[400px] h-[300px] relative lg:flex flex-col justify-center items-center hidden'>
            <SphereModel></SphereModel>       
            <TextCloud></TextCloud>
            </div>
           </div>
                           
        </div>
    );
};


export default AppWrap(Skills, 'skills');