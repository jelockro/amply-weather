import React, { Component } from 'react';
import './App.css';
import FormCardJumbotron from './Components/FormCardJumbotron';
import * as service from './Controllers/WeatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: 'your_city',
      state: 'your_state',
      currentTemp: 'current_temp',
      description: 'lorem ipsum',
      iconLink: '',
      highTemp: '',
      lowTemp: ''
    };
    service.getWeather().then((results)=> {
      this.setState({city: results[0]});
      this.setState({state: results[1]});
      this.setState({currentTemp: Math.floor(results[2])});
      this.setState({description: results[3]});
      this.setState({iconLink: results[4]});
      this.setState({highTemp: Math.floor(results[5])});
      this.setState({lowTemp: Math.floor(results[6])});
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
          highTemp={this.state.highTemp}
          lowTemp={this.state.lowTemp}
        
        />
      </div>
    );
  }
}

export default App;
