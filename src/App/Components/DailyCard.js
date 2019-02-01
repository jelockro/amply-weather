import React from 'react';

function DailyCard(props) {
    


        return(
    
                <div id="dailyCard" class="wrapper">
                    <div className="box-1"></div>
                    <div className="box-2">
                        <div id="location" className="">
                            <icon className="fa fa-map-marker-alt mb-3"></icon><br></br>
                            <p id="citystate">{props.appState.city}, {props.appState.state}</p>
                        </div>

                    </div>
                    <div className="box3"><img id="image" src={props.appState.iconLink} alt='weather visual'></img></div>
                    <div className="box4"><p id="mainTemp">{Math.floor(props.appState.temperature)}&#8457;</p></div>
                    <div className="box5"><p></p></div>
                    <div className="box6"><p id="highLow">H {Math.floor(props.appState.highTemperature)} / L {Math.floor(props.appState.lowTemperature)}</p></div>
                    <div className="box7"><p id="description" className="lead">{props.appState.description}</p></div>
                </div>
 
        )
    }

export default DailyCard