import './Search.css';
import React from 'react';
import axios from 'axios';
import Search from './Search';
// import Header from './Header';
// import Units from './Units';
import Unitinput from './UnitInput'
import Loader from './Loader'


class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    // units: '',
    unitError: '',
    timeOut: false
    }
  }
onSearchSubmit = async (term) => {

  const response = await axios.get(`http://localhost:3010/units/${term}` , {
    
  })
    this.setState({timeOut:false})
    console.log(response.data[0])
    if (response.data[0] === undefined) {
      
      this.setState({unitsError : 'error'})
    } else {
      this.setState({unitsError : ''})
      //this.setState({units : response.data[0]})
      this.props.onChangeUnit(response.data[0].name);
    }  

    
}

onUnitSubmit = (name, location, size) => {
  axios.post('http://localhost:3010/units/', {
            name: name,
            location : location,
            size : size
        })
        .then((response) => {
          this.onSearchSubmit(response.data)
          })
        .catch((error) => console.log(error))
        this.setState({timeOut:true})

}



  
    


render() {
  return (
    <div className="ui container" style={{marginTop : '10px' }}>
      {/* <Header /> */}
      {this.state.unitsError === 'error' ? null :<Search onSubmit={this.onSearchSubmit}/>}
      {/* {this.state.units === '' || this.state.unitsError === 'error' ? null : <Units unit={this.state.units} />} */}
      {this.state.timeOut === true ? <Loader /> : null}
      {this.state.unitsError === 'error' ? <Unitinput onSubmit={this.onUnitSubmit}/> : null}
    </div>
    );
  }
}

export default SearchComponent;
