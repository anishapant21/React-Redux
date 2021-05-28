import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    useEffect(()=>{
      //making request to the API - check docs
      const doTranslation = async () => {
          const {data} = await axios.post(
              'https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q:text,
                    target: language.value,
                    key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    
            },
        });

        //first data is the information we got from axios, second data is the actual response data
        setTranslated(data.data.translations[0].translatedText);
  

      };
      doTranslation();
      
    }, [language, text]);
    return (
        <div>
            <h1 className="ui header"> {translated}</h1>
        </div>

    );
};

export default Convert;