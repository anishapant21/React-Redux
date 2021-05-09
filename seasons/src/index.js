import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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


    //render helper when we have to use  conditional statements
    renderContent(){

        if (this.state.errorMessage && !this.state.lat){
            return (
                <div> Error : {this.state.errorMessage}</div>
            );
            }
         
         if (!this.state.errorMessage && this.state.lat){
             return <SeasonDisplay lat={this.state.lat}/> //passing as props to the child componenet
                 
             
             }
         return <Spinner message="Please accept location request"/>;
         }

    

    //React says we have to render
    render(){
        return (
            <div className= "border red">
                {this.renderContent()}
            </div>
        );
        
       
       }
    }

    



ReactDOM.render(<App />, document.querySelector('#root'));