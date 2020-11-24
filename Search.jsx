import React, { Component } from 'react';

class Search extends Component {
    state = {
        searchInput: '',
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({searchInput : ''})
        this.props.onSubmit(this.state.searchInput)
        

    }

    render() {
        return (
            <div className="ui huge segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input 
                            onChange={(e) => this.setState({searchInput: e.target.value})} 
                            value={this.state.searchInput} 
                            name="unit" type="text" placeholder="Search for your unit..."
                            />
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Search;