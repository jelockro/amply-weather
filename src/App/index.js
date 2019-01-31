import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormCardLocalData from './FormCardLocalData';
import FormCardJumbotron from './FormCardJumbotron';

class App extends Component {
  
  render() {
    let city = 'Olathe';
    let state = 'Kansas';

    return (
      <div className="App container">
        <FormCardJumbotron city={city} state={state}/>
      </div>
    );
  }
}

export default App;
