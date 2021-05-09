import React from 'react';

//functional component
//from semantic ui we are making that spinner
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader"> {props.message}</div>

        </div>
    );
};

//If we forget to pass the message prop this will be shown as default
Spinner.defaultProps ={
    message: 'Loading...'
};

export default Spinner;