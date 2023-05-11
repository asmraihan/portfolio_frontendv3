import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import { easeInOut, motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { FaEye, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../constants/theme';
import TextSphere from '../../components/TextSphere';

const Work = () => {
    const { isTheme, toggleTheme } = useTheme();

    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [works, setWorks] = useState([])
    const [filterWork, setFilterWork] = useState([])
  
    useEffect(() => {
        fetch('works.json')
            .then(res => res.json())
            .then(data => {
                setWorks(data)
                setFilterWork(data)
            })
           
    }, [])
   
    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])
            if (item === 'All') {
                setFilterWork(works)
            }
            else{
                setFilterWork(works.filter((work)=> work.tags.includes(item)))
            }
        }, 500);
    }
    return (
        <div className=' w-5/6 relative flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-4xl font-bold text-center mt-10'>My Works</h2>
            <h4 className='text-2xl text-center mt-4 mb-8'><span>Things</span> <span>I've been working so far</span></h4>

            <div className='app_work-filter flex justify-center gap-4 items-center flex-wrap m-4'>
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app_work_filter_item py-2 px-4 rounded-md font-bold cursor-pointer transition-all duration-300 hover:bg-[#8825fa] hover:text-white flex text-lg ${activeFilter === item ? 'bg-primary text-white' : ''}`}>
                        {item}

                    </div>
                ))}
            </div>
            {/* cards here */}
            <div className='flex justify-center items-center'>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 min-h-[356px] '
                >

                    {/* map here*/}

                    {filterWork.map((work, index) => (
                         <div key={index} target="_blank" rel="noreferrer" className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10 max-w-[280px]">
                         <div className="h-36 relative rounded-lg shadow-xl overflow-hidden">
                             <img src={work?.imgUrl?.asset?._ref} className="absolute w-full h-full object-cover " />
                             <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                    className='app_work_hover flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-lg'
                                >
                                    <a href={work.projectLink} target=' blank' rel='noreferrer'>
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className='w-[50px] flex justify-center text-xl  items-center h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4'
                                        >
                                            <FaEye></FaEye>
                                        </motion.div>
                                    </a>
                                    <a href={work.codeLink}>
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className='w-[50px] flex justify-center text-xl items-center h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-4'
                                        >
                                            <FaGithub></FaGithub>
                                        </motion.div>
                                    </a>
                                </motion.div>
                         </div>
                         <div className="mt-4">
                             <p className="text-xl font-semibold">{work.title}</p>
                             <p className="text-sm max-h-10 h-10 overflow-auto font-normal text-gray-500">{work.description}</p>
                             
                         </div>
                         <div className='app_work_tag'>
                                    <p className='text-xs text-center px-3 py-1.5 rounded mt-4'>#{work.tags[0]}</p>
                                </div>
                         <p className="text-xs italic mt-6"><i className="fal fa-globe mr-1" />{work.projectLink}</p>
                     </div>                
                    ))}
                </motion.div>
                {/* second card */}

            </div>
            <TextSphere></TextSphere>
        </div>
    );
};


export default AppWrap(Work, 'work');