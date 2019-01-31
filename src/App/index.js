import React, { Component } from 'react';
import './App.css';
import FormCardJumbotron from './FormCardJumbotron';
import * as service from './WeatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: 'your_city',
      state: 'your_state'
    };
    service.getWeather().then((results)=> {
      this.setState({city: results[0]});
      this.setState({state: results[1]});
    }).catch(e => console.log('oops: ' + e));

  }

  render() {

    return (
      <div className="App container">
        <FormCardJumbotron city={this.state.city} state={this.state.state}/>
      </div>
    );
  }
}

export default App;
