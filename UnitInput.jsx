import axios from 'axios';
import React, { Component } from 'react';

class UnitInput extends Component {
    state = {
        name : '',
        location : '',
        size: ''
    }


    onUnitSubmit = () => {
        // axios.post('http://localhost:3010/units/', {
        //     name: this.state.name,
        //     location : this.state.location,
        //     size : this.state.size
        // })
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error))
        this.props.onSubmit(this.state.name, this.state.location, this.state.size)
        this.setState({name: '', location: '', size: ''})
    }
    
    
    render() {
        return (
            <div className="ui big form">
              <div className="dataUpdate">Unit Not Found Please Add To Database</div>
            <div className="three fields">
              <div className="field">
                <label>Unit Name</label>
                <input placeholder="Unit Name" 
                type="text"
                value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
              </div>
              <div className="field">
                <label>Location</label>
                <input placeholder="Location" type="text" value={this.state.location}
                onChange={(e) => this.setState({location: e.target.value})}/>
              </div>
              <div className="field">
                <label>Size</label>
                <input placeholder="ex.. 2000" type="number" value={this.state.size}
                onChange={(e) => this.setState({size: e.target.value})}/>
              </div>
            </div>
            <div className="ui submit button" onClick={this.onUnitSubmit}>Submit</div>
          </div>
        );
    }
}

export default UnitInput;