import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='progress wrapper  h-3 sticky top-0 left-0 z-40 w-full'>
            <div className='progress style h-3 bg-gradient-to-r from-primary to-blue-700  ' style={{ width: `${scrollTop}%` }}>

            </div>
        </div>
    );
};

export default ScrollIndicator;