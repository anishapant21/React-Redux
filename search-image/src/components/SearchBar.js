import React from 'react';

class SearchBar extends React.Component {
    state={term: ''};


    //to prevent from refersing the page and going back to start after submitting i.e clicking 'enter'
    //to bind this -- have appropriate value of this
    onFormSubmit= event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
   
   
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                    value={this.state.term}
                    onChange={e => this.setState({term : e.target.value }) }></input>
                </div>

            </form>

        </div>);
    }
};

export default SearchBar;