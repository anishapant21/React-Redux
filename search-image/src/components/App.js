import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    //define state
    state={images: []};
   
    //define a callback function
    //Assining as the arrow function because of the "this" error

    onSearchSubmit= async (term)=>{
        const response = await unsplash.get('/search/photos', {
            params: {query : term},
        
        });

        this.setState({images : response.data.results});
    }


    render(){
        return (
        <div className="ui container" style={{ marginTop: '10px'}}>
             <SearchBar onSubmit={this.onSearchSubmit} /> 
             <ImageList images={this.state.images}/>
        </div>
        );


    }
   
}

export default App;