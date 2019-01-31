import React, { Component } from 'react';


class FormCardLocalData extends Component {
    render() {
        return( 

                <div className="d-flex flex-column bd-highlight mb-3 ml-4 float-left" id="checkboxes">
                    <div className='form-group' id="city">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My City: {this.props.city}</label>
                    </div>
                    <div className='form-group' id="state">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My State: {this.props.state}</label>
                    </div>
                    <div className='form-group' id="currentTemp">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Current Temperature: {this.props.currentTemp} &#8457;</label>
                    </div>
                    <div className='form-group' id="description">
                        <input type="checkbox" className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Today it is {this.props.description};</label>
                    </div>

                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="p-2 bd-highlight">
                        <img src={this.props.iconLink} alt='weather visual'></img>
                        </div>
                        <div className="p-2 bd-highlight">Flex item 2</div>
                        <div className="p-2 bd-highlight">Flex item 3</div>
                    </div>  
                </div>
            
     
 
        )
    }
}
export default FormCardLocalData
