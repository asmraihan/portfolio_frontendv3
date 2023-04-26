import React from 'react';

const NavigationDots = ({active}) => {
    return (
        <div className='app_navigation absolute right-1 flex justify-center items-center flex-col p-4 bg-gray-50 w-3 h-3 rounded-full'>   
                <a href="#home" 
                className='app_navigation_dot w-3 h-3 rounded-full bg-pink-500'
                style={{backgroundColor : '#313BAC'}}
                ></a>
                <a href="#about" 
                className='app_navigation_dot w-3 h-3 rounded-full bg-pink-500'
                style={active === 'about' ? {backgroundColor : '#313BAC'} : {}}
                ></a>
                <a href="#skills" 
                className='app_navigation_dot'
                style={active === 'skills' ? {backgroundColor : '#313BAC'} : {}}
                ></a>
                <a href="#contact" 
                className='app_navigation_dot'
                style={active === 'contact' ? {backgroundColor : '#313BAC'} : {}}
                ></a>
        </div>
    );
};

export default NavigationDots;