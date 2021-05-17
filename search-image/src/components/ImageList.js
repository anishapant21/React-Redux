import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


//passing props from parent component
const ImageList = (props) =>{
    const images= props.images.map(image => {
        return  <ImageCard key={image.id} image={image}/>//accesing the image url, the regular one
    });
    return (
        <div className="image-list">{images}</div>

    )
}

export default ImageList;