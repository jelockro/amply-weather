import React, { Component } from 'react';
import './App.css';
import FormCardJumbotron from './FormCardJumbotron';
import * as service from './WeatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: 'your_city',
      state: 'your_state',
      currentTemp: 'current_temp',
      description: 'lorem ipsum',
      iconLink: ''
    };
    service.getWeather().then((results)=> {
      this.setState({city: results[0]});
      this.setState({state: results[1]});
      this.setState({currentTemp: results[2]});
      this.setState({description: results[3]});
      this.setState({iconLink: results[4]})
    }).catch(e => console.log('oops: ' + e));

  }

  render() {

    return (
      <div className="App container">
        <FormCardJumbotron 
          city={this.state.city} 
          state={this.state.state} 
          currentTemp={this.state.currentTemp}
          description={this.state.description}
          iconLink={this.state.iconLink}
        
        />
      </div>
    );
  }
}

export default App;
