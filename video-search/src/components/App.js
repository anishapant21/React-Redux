import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    //set state for the videos list and the selected video -- initially empty
    state ={videos : [], selectedVideo: null};

    //when application first loads it will show this search by default
    componentDidMount(){
        this.onTermSubmit('cars');
    }


    //API request
    onTermSubmit = async term => {
       const response= await youtube.get('/search', {
            params:{ 
                q: term
            }
        });
        this.setState({
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
    };


    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };


    render(){
        return (
            <div className="ui container">
                <SearchBar onWeGo={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} /> {/* call back */}
                        </div>
                
                    </div>
                </div>
               
            </div>
        );
    }

}

export default App;