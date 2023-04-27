import React from 'react';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants/index'
import AppWrap from '../../wrapper/AppWrap';
import { useTheme } from '../../constants/theme';
import { FaDownload } from 'react-icons/fa';
// import SphereModel from "../../components/Sphere";
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            
            duration: 1.5,
            ease: easeInOut
        }
    }
}
const Header = () => {
    const { isTheme, toggleTheme } = useTheme();
    return (
        <div className="lg:flex justify-center items-center relative">
            <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='overlay circle absolute -left-12 -z-10 w-full h-[90%]'
            >
                <div className='header badge absolute top-16 z-50'>
                    <div className="rounded-lg hidden lg:block border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                        <span className="text-primary uppercase">under</span>
                        <p className="text-orange-500 font-semibold text-xl uppercase">development</p>
                    </div>
                     
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='header img relative object-contain z-10'>
                {/* <img src={images.profile} alt="profile" /> */}
                <div className="h-[40rem] flex flex-col justify-center items-center ">
                    <h1 className={`mx-auto max-w-4xl font-display text-5xl font-medium  m-4 sm:text-7xl ${isTheme === 'dark' ? 'dark:text-[ #f5f5f5]' : 'text-[#050505]'}  text-center`}>Hi there, Im <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 22 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">Raihan</span></span>.</h1>
                    <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500  text-center">
                        A full-stack developer
                    </p>

                    <div className="w-5/6 lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-24 mt-8">
                        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                            <span className="text-primary uppercase">Technologies</span>
                            <p className="text-gray-500 font-semibold text-xl">30+</p>
                        </div>
                        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                            <span className="text-primary uppercase">Years of Experience</span>
                            <p className="text-gray-500 font-semibold text-xl">1year+</p>
                        </div>
                        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                            <span className="text-primary uppercase">Completed Projects</span>
                            <p className="text-gray-500 font-semibold text-xl">15+</p>
                        </div>
                        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
                            <span className="text-primary uppercase">Download</span>
                            <p className="text-gray-500 font-semibold text-xl">CV <FaDownload className='inline-block text-sm mb-1'></FaDownload></p>
                        </div>
                    </div>
                </div>
                {/* <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='overlay circle absolute top-20 left-0 right-0 bottom-0 -z-10 w-full h-[50%]'
                    src={images.ex}
                /> */}
                {/* <motion.div

                    whileInView={{ scale: [0.5, 1] }}
                    animate={screenX}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className={`overlay absolute top-0 right-0 left-0 w-full bottom-0 -z-10`}
                >
                      <SphereModel/>
                </motion.div> */}

              
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='absolute -right-12 h-full'>
                <div className='hidden lg:block w-24 -ml-64 mt-16 absolute rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='p-3' src={images.node} alt="circle" />
                </div>
                <div className='hidden lg:block w-36 -ml-36 mt-24 absolute rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='p-3' src={images.react} alt="circle" />
                </div>
                <div className='hidden lg:block w-20 -ml-40 mt-72 absolute rounded-full  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='p-3' src={images.css} alt="circle" />
                </div>
            </motion.div>


        </div>
    );
};

export default AppWrap(Header, 'home');