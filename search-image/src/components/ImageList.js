import React from 'react';


//passing props from parent component
const ImageList = (props) =>{
    const images= props.images.map(image => {
        return <img alt={image.description} key={image.id} src={image.urls.regular} /> //accesing the image url, the regular one
    });
    return (
        <div>{images}</div>

    )
}

export default ImageList;