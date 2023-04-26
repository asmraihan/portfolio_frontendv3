import React from 'react';
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app_container ${classNames}`}>
            <SocialMedia></SocialMedia>
            <div className='app_wrapper flex justify-center items-center'>
                
                <Component></Component>

            </div>
            {/* <NavigationDots active={idName}></NavigationDots> */}
        </div>
    );
};

export default AppWrap;