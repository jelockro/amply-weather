import React, { Component } from 'react';

class DailyCard extends Component {
    render() {
        return(
    
                <div id="dailyCard" class="wrapper">
                    <div className="box-1"></div>
                    <div className="box-2">
                        <div id="location">
                            <icon className="fa fa-map-marker-alt mb-3"></icon><br></br>
                            <p id="citystate">{this.props.city}, {this.props.state}</p>
                        </div>

                    </div>
                    <div className="box3"><img id="image" src={this.props.iconLink} alt='weather visual'></img></div>
                    <div className="box4"><p id="mainTemp">{this.props.currentTemp}&#8457;</p></div>
                    <div className="box5"><p></p></div>
                    <div className="box6"><p id="highLow">H {this.props.highTemp} / L {this.props.lowTemp}</p></div>
                    <div className="box7"><p id="description" className="lead">{this.props.description}</p></div>
                </div>
 
        )
    }
}
export default DailyCard