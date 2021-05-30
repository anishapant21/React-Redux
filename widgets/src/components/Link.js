import React, { Children } from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        event.preventDefault(); //prevents full page reload
        window.history.pushState({}, '', href); //update url without changing content

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);


    };

    return (
    <a onClick={onClick} className={className} href={href}>
        {children}
        </a>
    );

};

export default Link;