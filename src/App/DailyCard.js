import React, { Component } from 'react';

class DailyCard extends Component {
    render() {
        return(
    
                <div id="dailyCard" class="wrapper">
                    <div className="box1"><img id="image" src={this.props.iconLink} alt='weather visual'></img></div>
                    <div className="box2">{this.props.currentTemp} </div>
                    <div className="box3"><p>&#8457;</p></div>
                    <div className="box4"><p id="highLow">{this.props.highTemp} / {this.props.lowTemp}</p></div>
                    <div className="box5"><p id="description" className="lead">{this.props.description}</p></div>
                </div>
 
        )
    }
}
export default DailyCard