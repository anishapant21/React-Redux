//Unsplash api 
//for the clean code the header and url are added here

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 
        'Client-ID d3oo_fXEsfSjh25hZIoSj7faB8x782biUnZgC7fussw'
    }

});