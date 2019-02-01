import React, { Component } from 'react';


class FormCardLocalData extends Component {
    render() {
        return( 

                <div className="d-flex flex-column bd-highlight mb-3 ml-4 float-left" id="checkboxes">
                    <div className='form-group' id="city-checkbox">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My City: {this.props.city}</label>
                    </div>
                    <div className='form-group' id="state-checkbox">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My State: {this.props.state}</label>
                    </div>
                    <div className='form-group' id="currentTemp-checkbox">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Current Temperature: {this.props.currentTemp} &#8457;</label>
                    </div>
                    <div className='form-group' id="description-checkbox">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Today it is {this.props.description};</label>
                    </div>
                </div>
            
     
 
        )
    }
}
export default FormCardLocalData
