import React, {useState} from 'react';

//React.Fragment so that it doesn't show extra div border
const Accordion = ({items}) => {

    //initilaize new piece of state
    const [activeIndex, setActiveIndex] = useState(null);
    
    //update value of state when user clicks
    const onTitleClick = (index) => {
        setActiveIndex(index);

    };

    const renderedItems = items.map((item, index) => {
        //to set active to the item which is clicked i.e activeIndex
        const active = index === activeIndex ? 'active' : '';

        return (<React.Fragment key={item.title}> 
            <div
             className={`title ${active}`}
             onClick={()=> onTitleClick(index)}
             >
                <i className="dropdown icon"></i>
                {item.title}

            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )

    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;