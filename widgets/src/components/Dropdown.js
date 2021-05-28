import React, { useEffect, useRef, useState } from 'react';


const Dropdown = ({label, options, selected, onSelectedChange}) => {
    //set state for dropdown option close or open
    const [open, setOpen] = useState(false);
    const ref=useRef();

    //for dropdown close on clicking anywhere inside the bosy
    useEffect(()=> {
        const onBodyClick = (event) => {
            //checks whether or not the weather clicked on is inside our component
            //if yes(click on body) -  return early,
            if (ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false); // if no - close the dropdown
        };
        document.body.addEventListener('click', onBodyClick); 
        //cleanup function of useEffect 
        //If we remove the dropdown function, it cleans up this event handler
        return () => {
            document.body.removeEventListener('click', onBodyClick);
    }, {capture: true};
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null;
        }
        return (
            <div
             key={option.value} 
             className="item"
             onClick={()=> onSelectedChange(option)} 
             >
                {option.label}
            </div>

        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> {label}</label>
                <div
                onClick={()=> setOpen(!open)} 
                className={`ui selection dropdown ${open? 'visible active' : ''}`
                }>
                    <i className="dropdown icon"></i>
                    <div className="text"> {selected.label} </div>
                    <div 
                    className={`menu ${open? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>

    );
    
};

export default Dropdown;