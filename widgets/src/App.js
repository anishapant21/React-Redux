import React, { useRef, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    //For toggle button
    //const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button> */}
            {/*<Accordion items = {items}/> */}
            {/*<Search /> */}

                    <Header />
                   <Route path="/">
                       <Accordion items={items} />
                   </Route>
                   <Route path="/list">
                       <Search />
                   </Route>
                   <Route path ="/dropdown">
                       <Dropdown
                       label="select a color"
                       options = {options}
                       selected={selected}
                       onSelectedChange={setSelected}

                       />
                   </Route>
                   <Route path="/translate">
                       <Translate />
                   </Route>
           
        </div>
    );
};