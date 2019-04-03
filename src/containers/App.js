import React, { Component } from 'react';
import './App.css';
import Spinner from 'react-spinkit';

//custom imports
import Navbar from '../components/Navbar/Navbar'; 
import Calculator from '../components/Calculator/Calculator';

class App extends Component {
  constructor(){
    super();
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    this.setState({loading:false});
  }
  componentWillMount(){
    this.setState({loading:true});
  }
  render() {
    return (
      <div className="App">
          {this.state.loading ?<Spinner className="spinner" name="ball-scale-ripple-multiple" color="red"/>:null}
          <Navbar/>
          <Calculator/>
      </div>
    );
  }
}

export default App;
