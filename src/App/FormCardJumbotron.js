import React, { Component } from 'react';
import FormCardLocalData from './FormCardLocalData';
import Form from './Form';

class FormCardJumbotron extends Component {
    render() {
        return(
                <div className="jumbotron mt-4">
                        <h1 className="display-4">Instant Weather Now</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4"></hr>

                        <FormCardLocalData city={this.props.city} state={this.props.state}/>
                        <Form />
                </div>
        
 
        )
    }
}
export default FormCardJumbotron
