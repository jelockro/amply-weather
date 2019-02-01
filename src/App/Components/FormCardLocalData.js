import React from 'react';
import DailyCard from './DailyCard';


function FormCardLocalData(props) {

        function check(event){
            let checkboxElement = document.getElementById(event.target.id)
            let list = document.getElementsByClassName(event.target.id)
            let element = list[0]
           
            if (checkboxElement.hasAttribute('checked')) {checkboxElement.removeAttribute('checked')}  
            
            if (!document.getElementById(event.target.id).checked){
                element.hidden=true;  
            }
            else element.hidden=false;

            // if (!document.getElementById(event.target.id).checked){
            //     document.getElementsByClassName(event.target.id).style.visibility='hidden'
            // }
        }

        const styles = {
            textAlign: 'left',
        }
        function getNumberOfChecked() {
            
        }

        return( 

                <div>
                    <DailyCard appState={props.appState} />
                <div className="row p-4">
                
                    <div style={styles} className="d-flex flex-column bd-highlight m-4" id="checkbox-col-1">
                        <div className='form-group' id="city-checkbox-group">
                            <input type="checkbox" id="box-2" onClick={check} className="form-check-input p-2 bd-highlight" checked="false" ></input>
                            <label className="form-check-label">My Location: </label>
                        </div>
                        <div className='form-group' id="high-low-checkbox-group">
                            <input type="checkbox" id="box6" onClick={check} className="form-check-input p-2 bd-highlight" checked="false"></input>
                            <label className="form-check-label">Daily High/Low</label>
                        </div>
                        <div className='form-group' id="currentTemp-checkbox-group">
                            <input type="checkbox" id="box4" onClick={check} className="form-check-input p-2 bd-highlight" checked="false" ></input>
                            <label className="form-check-label">Current Temp: &#8457;</label>
                        </div>
                    </div>
                    <div style={styles} className="d-flex flex-column bd-highlight m-4" id="checkbox-col-2">
                        <div className='form-group' id="description-checkbox-group">
                            <input type="checkbox" id="box7" onClick={check} className="form-check-input p-2 bd-highlight" checked="false"  ></input>
                            <label className="form-check-label">Description</label>
                        </div>
                        <div className='form-group' id="humidity-checkbox-group">
                            <input type="checkbox" id="box8"  className="form-check-input p-2 bd-highlight"  ></input>
                            <label className="form-check-label">Humidity</label>
                        </div>
                        <div className='form-group' id="dewpoint-checkbox-group">
                            <input type="checkbox" id="box9"  className="form-check-input p-2 bd-highlight"  ></input>
                            <label className="form-check-label">Dewpoint</label>
                        </div>
                    </div>
                    <div style={styles} className="d-flex flex-column bd-highlight m-4" id="checkbox-col-2">
                        <div className='form-group' id="windSpeed-checkbox-group">
                            <input type="checkbox" id="box10"  className="form-check-input p-2 bd-highlight"   ></input>
                            <label className="form-check-label">Wind Speed</label>
                        </div>
                        <div className='form-group' id="barometer-checkbox-group">
                            <input type="checkbox" id="box11"  className="form-check-input p-2 bd-highlight"  ></input>
                            <label className="form-check-label">Barometer</label>
                        </div>
                        <div className='form-group' id="visibility-checkbox-group">
                            <input type="checkbox" id="box12"  className="form-check-input p-2 bd-highlight"  ></input>
                            <label className="form-check-label">Visibility</label>
                        </div>
                    </div>
                    
                </div>
   
 

                
                    
                    
                
                </div>
            
     
 
        )
    }

export default FormCardLocalData
