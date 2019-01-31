import React, { Component } from 'react';


class FormCardLocalData extends Component {
    render() {
        return( 
            <div>           
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">{this.props.city}</div>
                    <div className="p-2 bd-highlight">{this.props.state}</div>
                    <div className="p-2 bd-highlight">Flex item 3</div>
                </div>
            </div>       
 
        )
    }
}
export default FormCardLocalData
