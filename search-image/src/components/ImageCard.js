//to render a single image

import React from 'react';

class ImageCard extends React.Component {
    
    constructor(props){
        super(props);
        //spans is to specify how many boxes of given size the picture take
        this.state = {spans : 0};
        //creating a ref
        this.imageRef= React.createRef();
    }

    //initial 
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    //to set spans for each image according to their height
    setSpans = () => {
        const height =this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }
    render(){
        const {description, urls} = this.props.image; //destructuring
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description}
                src={urls.regular}
            />

            </div>
        );

    }
}

export default ImageCard;