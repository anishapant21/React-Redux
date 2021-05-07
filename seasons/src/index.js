import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    //constructor(props){
      //  super(props);

        //this.state ={lat : null, errorMessage: '' };

        
    //} we can use the direct initialization as below instead of this, works same

    state ={lat : null, errorMessage: '' };

    //component lifecycle method- better we use this way

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition( //getting location from geolocation
            position => this.setState({ lat: position.coords.latitude}), //to update our state we use setState
            (err) => this.setState({errorMessage: err.message})
            
            );

    }

    //React says we have to render
    render(){
        
       if (this.state.errorMessage && !this.state.lat){
           return (
               <div> Error : {this.state.errorMessage}</div>
           );
           }
        
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/> //passing as props to the child componenet
                
            
            }
        return <div> Loading...</div>;
        }
       }

    



ReactDOM.render(<App />, document.querySelector('#root'));