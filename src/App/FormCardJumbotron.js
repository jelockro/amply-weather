import React, { Component } from 'react';
import FormCardLocalData from './FormCardLocalData';
import Form from './Form';

class FormCardJumbotron extends Component {
    render() {
        return(
                <div class="jumbotron mt-4">
                        <h1 class="display-4">Instant Weather Now</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4"></hr>

                        <FormCardLocalData city={this.props.city} state={this.props.state}/>
                        <Form />
                </div>
        
 
        )
    }
}
export default FormCardJumbotron
