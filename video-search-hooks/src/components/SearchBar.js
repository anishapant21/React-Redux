import React, {useState} from 'react';

const SearchBar = ({onWeGo}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault(); //so that page doesn't refresh each time we hit enter
        onWeGo(term)  //sending the term to the parent component
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className ="field">
                    <label> Video Search </label>
                    <input
                     type="text" 
                     value={term}
                     onChange={onInputChange}
                     
                     />
                </div>
            </form>

        </div>
    );

};


export default SearchBar;