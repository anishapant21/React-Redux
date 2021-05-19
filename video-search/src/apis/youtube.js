import axios from 'axios';
const KEY = 'AIzaSyB7CRHZzL9OULGtxz4bZDNi-PV8P-LKz9Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
 
    }
});