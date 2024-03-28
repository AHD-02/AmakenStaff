import {ReactElement, useEffect} from 'react';

const ScrollTop = ({children}: { children: ReactElement | null }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return children || null;
};

export default ScrollTop;
