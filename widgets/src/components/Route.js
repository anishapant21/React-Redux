import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname); //updating the current path
        };
        window.addEventListener('popstate', onLocationChange);

        //cleanup
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }

    }, []);
    return currentPath === path ? children : null;
};

export default Route;