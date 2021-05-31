//custom hooks to fetch video

import { useState, useEffect } from "react"
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    //set state for the videos list and the selected video -- initially empty
    const [videos, setVideos]= useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);  //when application first loads it will show this search by default

    }, [defaultSearchTerm]);

     //API request
     const search = async term => {
        const response= await youtube.get('/search', {
             params:{ 
                 q: term
             }
         });

         setVideos(response.data.items);
         
     };

     return [videos, search]; //returning values as array

};

export default useVideos;

