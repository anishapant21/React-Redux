import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

//creating items for Accordion
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
];

//dropdown options for Dropdown
const options = [
    {
        label : 'The color red',
        value : 'red'
    },
    {
        label : 'The color green',
        value : 'green'
    },
    {
        label : 'A shade of blue',
        value : 'blue'
    }
];


export default () => {
    //state for dropdown
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            {/*<Accordion items = {items}/> */}
            {/*<Search /> */}
            <Dropdown selected={selected}
            onSelectedChange={setSelected}
            options = {options}/>
            

        </div>
    );
};