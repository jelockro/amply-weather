import React from 'react';
import DailyCard from './DailyCard';


function FormCardLocalData(props) {

        function check(event){
            if (!document.getElementById(event.target.id).checked){
                let list = document.getElementsByClassName(event.target.id)
                console.log(list)
                console.log(list[0])
                list[0].hidden=true;
            }

            // if (!document.getElementById(event.target.id).checked){
            //     document.getElementsByClassName(event.target.id).style.visibility='hidden'
            // }
        }
        return( 

                <div className="d-flex flex-column bd-highlight mb-3 ml-4 float-left" id="checkboxes">
                    <div className='form-group' id="city-checkbox-group">
                        <input type="checkbox" id="box-2" onClick={check} className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My City: {props.appState.city}</label>
                    </div>
                    <div className='form-group' id="state-checkbox-group">
                        <input type="checkbox" id="state-checkbox" onClick={check} className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">My State: {props.appState.state}</label>
                    </div>
                    <div className='form-group' id="currentTemp-checkbox-group">
                        <input type="checkbox" id="box-4" onClick={check} className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Current Temperature: {props.appState.currentTemp} &#8457;</label>
                    </div>
                    <div className='form-group' id="description-checkbox-group">
                        <input type="checkbox" onClick={check} className="form-check-input p-2 bd-highlight"></input>
                        <label className="form-check-label">Today it is {props.appState.description};</label>
                    </div>
                    <DailyCard appState={props.appState} />
                </div>
            
     
 
        )
    }

export default FormCardLocalData
