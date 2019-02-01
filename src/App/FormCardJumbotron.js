import React, { Component } from 'react';
import FormCardLocalData from './FormCardLocalData';
import Form from './Form';
import DailyCard from './DailyCard';
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
                                city={this.props.city} 
                                state={this.props.state} 
                                currentTemp={this.props.currentTemp}
                                description={this.props.description}
                                        
                        />
                        </div>
                        <DailyCard 
                                iconLink={this.props.iconLink}
                                currentTemp={this.props.currentTemp}
                                highTemp={this.props.highTemp}
                                lowTemp={this.props.lowTemp}
                                description={this.props.description}
                        />

                        <div>
                        <hr className="my-4"></hr>
                        <Form />
                        </div>
                        
                </div>
        
 
        )
    }
}
export default FormCardJumbotron
