import React from 'react';
import { SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app_container ${classNames}`}>
            <SocialMedia />
            <div className='app_wrapper flex justify-center items-center'>

                <Component></Component>

            </div>
        </div>
    );
};

export default AppWrap;