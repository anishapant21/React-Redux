import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Grow as we go', duration: '4:05'
        }, {
            title: 'All Star', duration: '1:45'
        }, {
            title:'Hello', duration: '3:06'
        }, {
            title: ' Toxicity', duration: '5:05'
        }
    ];

};

const selectedSongReducer = (selectedSong=null, action)=>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});