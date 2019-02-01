import React, { Component } from 'react';
import './App.css';
import FormCardJumbotron from './Components/FormCardJumbotron';
import * as service from './Controllers/WeatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {}
    //   // city: 'Hometown',
    //   // state: 'Kansas',
    //   // currentTemp: '70',
    //   // description: 'open skies ahead',
    //   // iconLink: '',
    //   // highTemp: '70',
    //   // lowTemp: '70'
    // };
    service.getWeather().then((obj)=> {
      // console.log(obj.today);
      // console.log(App.state)
      // console.log(typeof obj.today)
      let setObject = {}
      for (let key in obj.today)  {
        setObject[key]=obj.today[key]
        this.setState(setObject);
        
      };
      // console.log('the state of the app after getWeather: ', this.state);
      
      // this.setState({city: obj.today.city});
      // // this.setState({state: obj.today.state);
      // // this.setState({currentTemp: Math.floor(results[2])});
      // // this.setState({description: results[3]});
      // // this.setState({iconLink: results[4]});
      // // this.setState({highTemp: Math.floor(results[5])});
      // // this.setState({lowTemp: Math.floor(results[6])});
    }).catch(e => console.log('oops: ' + e));
    console.log(this.state);


  }
  
  render() {

    return (
      <div className="App container">
        {console.log('this is the state of the app: ',  this.state)}
        <FormCardJumbotron 
          state={this.state}
          // city={this.state.city} 
          // state={this.state.state} 
          // currentTemp={this.state.currentTemp}
          // description={this.state.description}
          // iconLink={this.state.iconLink}
          // highTemp={this.state.highTemp}
          // lowTemp={this.state.lowTemp}
        
        />
      </div>
    );
  }
}

export default App;
