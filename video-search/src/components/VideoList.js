import React from 'react';
import VideoItem from './VideoItem';

//videos, onvideoselect are callback passed from the app down to the list
const VideoList = ({videos, onVideoSelect}) => {
   const renderedList= videos.map((video) => {
        return <VideoItem 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect} 
        video={video} />; //passing onVideoSelect passed to item
    }); 
    return ( 
        <div className=" ui relaxed divided list">
            {renderedList}
        </div>

    );
};

export default VideoList;