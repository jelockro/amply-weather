import React, { Component } from 'react';
import FormCardLocalData from './FormCardLocalData';
import Form from './Form';
class FormCardJumbotron extends Component {
    render() {
        return(
                <div className="jumbotron mt-4">
                        <div>
                                <h1 className="display-4">Instant Weather Now</h1>
                                <p className="lead">All the Weather Data you want, and nothing more.
                                </p>
                                <hr className="my-4"></hr>
                        </div>
                        <div className="row">
                        <FormCardLocalData
                                appState={this.props.state}
                                        
                        />
                        </div>
                        <div>
                        <hr className="my-4"></hr>
                        <Form />
                        </div>
                        
                </div>
        
 
        )
    }
}
export default FormCardJumbotron
