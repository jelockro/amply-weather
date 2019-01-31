import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormCardLocalData from './FormCardLocalData';
import FormCardJumbotron from './FormCardJumbotron';
import * as service from './WeatherData';

class App extends Component {
  
  render() {
    service.getWeather().then((result1,result2)=> {
      let [city,state]=[result1,result2];
    }).catch(e => console.log('oops: ' + e));
    return (
      <div className="App container">
        <FormCardJumbotron city={city} state={state}/>
      </div>
    );
  }
}

export default App;
