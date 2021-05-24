import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

//creating items
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title:'Why use React?',
        content:'React is a favourite among developers'
    }, 
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]


export default () => {
    return (
        <div>
            {/*<Accordion items = {items}/> */}
            <Search />

        </div>
    );
};