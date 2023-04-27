import React from 'react';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants/index'
import AppWrap from '../../wrapper/AppWrap';
const scaleVariants = {
    whileInView : {
        scale: [0, 1],
        opacity : [0, 1],
        transition : {
            duration : 1, 
            ease : easeInOut
        }
    }
}
const Header = () => {
    return (
        <div className="lg:flex justify-center items-center relative bg-[url('../../assets/bgIMG.png')] bg-cover bg-repeat bg-center min-h-screen">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='header info'
            >
                <div className='header badge '>
                    <div className='badge cmp flex text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                        <span>❤️</span>
                        <div className='ml-5'>
                            <p className='text'>Hello, I'm</p>
                            <h1 className='head text'>Raihan</h1>
                        </div>
                    </div>
                    <div className='tag-cmp flek shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <p className='text'>Web dev</p>
                    <p className='text'>Application developer</p>
                    </div>
                </div>
                </motion.div>
                <motion.div
                 whileInView={{  opacity: [0, 1] }}
                 transition={{ duration: 0.5, delayChildren : 0.5 }}
                 className='header img relative object-contain z-40'>
                    <img src={images.profile} alt="profile" />
                    <motion.img
                     whileInView={{ scale: [0, 1] }}
                     transition={{ duration: 1, ease : 'easeInOut' }}
                     className='overlay circle absolute left-0 right-0 bottom-0 -z-10 w-full h-[90%]'
                     src={images.circle}
                     />
                </motion.div>

                <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app headrr circles flex flex-col justify-evenly items-start h-full'>

                    {/* {[images.flutter,images.redux, images.sass].map((circle, index)=> <div className='circle-cmp w-24 rounded-full  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' key={index}>
                        <img className='p-3' src={circle} alt="circle" />
                    </div>)} */}

                    <div className='circle-cmp w-24 rounded-full  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                        <img className='p-3' src={images.flutter} alt="circle" />
                    </div>
                    <div className='circle-cmp w-36 m-5 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                        <img className='p-3' src={images.redux} alt="circle" />
                    </div>
                    <div className='circle-cmp w-20 rounded-full  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                        <img className='p-3' src={images.sass} alt="circle" />
                    </div>
                </motion.div>

      
        </div>
    );
};

export default AppWrap(Header, 'home');