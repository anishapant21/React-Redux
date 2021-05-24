import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = () => {
    //useState
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
     
    //useEffect --  first argument has to be a function
    //second arguments control when this is executed -- array
    useEffect(()=> {
        //helper function
        const search = async () => { 
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,

                },

            });
            setResults(data.query.search); //updayting the resultstate
        };

        //to asap load result at the initial rendering and only delay after that]
        if (term && !results.length){
            search();
        } else {
            const timeoutId = setTimeout(()=>{
                if (term){
                    search(); //search only when the term is not empty
        
                }
    
            }, 500);
    
            return () => {
                clearTimeout(timeoutId);
            };
           

        }

        
      
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                    GO
                    </a>

                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{ __html : result.snippet}} />
                </div>
            </div>
        );

    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search Term</label>
                    <input
                    value ={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input" />
                </div>
            </div>
            <div className ="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;