import React from 'react';
import {  motion } from 'framer-motion';
import { images } from '../../constants/index'
import AppWrap from '../../wrapper/AppWrap';
import { FaSignInAlt } from 'react-icons/fa';


const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    }
  }
}



const Header = () => {
  return (
    <div className="lg:flex justify-center items-center relative lg:min-h-screen">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            scale: 0.9
          },
          animate: {
            opacity: 1,
            scale: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 0.8,
            }
          }
        }}
        className=' absolute -left-12 -z-10 w-full h-[90%]'
      >
        {/* <div className='header badge absolute top-16 z-50'>
          <div className="rounded-lg hidden lg:block border-2 border-gray-500/20 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">under</span>
            <p className="text-orange-500 font-semibold text-xl uppercase">development</p>
          </div>
        </div> */}
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={PreviewAnimation}
        className='header img relative object-contain z-10'>
        {/* <img src={images.profile} alt="profile" /> */}
        <div className="h-[40rem] flex flex-col justify-center items-center ">
          <h1 className={`mx-auto max-w-4xl font-display text-5xl font-medium  m-4 sm:text-7xl dark:text-[#f5f5f5] text-[#050505]  text-center`}>Hi there, Im <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 22 418 42" className="absolute lg:-mt-1 mt-12 ml-1 left-0 h-[0.45em] w-full fill-primary/50" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">Raihan</span></span>.</h1>
          <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500  text-center">
            A full-stack developer
          </p>

          <div className="w-5/6 lg:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-24 mt-16 md:mt-18">
            <a href='#work' className="scale-100 cursor-pointer hover:scale-105 duration-300 transition-all hover:border-dashed  rounded-lg border-2 border-gray-500/20 border-dotted px-4 py-2 text-center">
              <span className="text-primary uppercase">Completed Projects</span>
              <p className="text-gray-500 font-semibold text-xl">20+</p>
            </a>
            <a href='#skills' className="scale-100 cursor-pointer hover:scale-105 duration-300 transition-all hover:border-dashed rounded-lg border-2 border-gray-500/20 border-dotted px-4 py-2 text-center">
              <span className="text-primary uppercase ">Technologies</span>
              <p className="text-gray-500 font-semibold text-xl">35+</p>
            </a>
            <a href='#about' className="scale-100 cursor-pointer hover:scale-105 duration-300 transition-all hover:border-dashed  rounded-lg border-2 border-gray-500/20 border-dotted px-4 py-2 text-center">
              <span className="text-primary uppercase">Years of Experience</span>
              <p className="text-gray-500 font-semibold text-xl">1 year+</p>
            </a>

            <a href='https://drive.google.com/file/d/1D2ELMC1HdmHxjXBSqtqdwq9nCCXl95v6/view?usp=drive_link' className="scale-100 hover:scale-105 duration-300 transition-all hover:border-dashed  rounded-lg border-2 border-gray-500/20 border-dotted px-4 py-2 text-center">
              <p className="text-primary uppercase">CV/Resume</p>
              <p className="text-gray-500 font-semibold text-lg ">View <FaSignInAlt className='inline-block mb-1 text-gray-500 font-semibold text-xl'></FaSignInAlt></p>

            </a>
          </div>
        </div>

      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            scale: 0.9
          },
          animate: {
            opacity: 1,
            scale: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 0.8,
            }
          }
        }}
        className='absolute -right-14 top-6 h-full'>
        <div className='hidden lg:block w-24 -ml-64 mt-16 absolute rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <img className='p-3' src={images.tailwind} alt="circle" />
        </div>
        <div className='hidden lg:block w-36 -ml-36 mt-28 absolute rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <img className='p-3' src={images.react} alt="circle" />
        </div>
        <div className='hidden lg:block w-20 -ml-40 mt-72 absolute rounded-full  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <img className='p-3' src={images.node} alt="circle" />
        </div>
      </motion.div>


    </div>
  );
};

export default AppWrap(Header, 'home');