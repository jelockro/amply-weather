import React, { Component } from 'react';

class Form extends Component{
    render(){   
        return (
        
        <form action="#">
            
            <div className ="form-group">
                <label htmlFor="zip" className="float-left">Please Enter Zip Code:</label>
                <input className="form-control" type="text" id="zip" placeholder="example: 66061" required></input>
            </div>
             <div className="form-group form-check">
               <input type="checkbox" className="form-check-input" name="checkbox" value="check" id="agree" required/>
               <label className="form-check-label">I have read and agree to the Terms and Conditions and Privacy Policy</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>             
        </form>
    
        )
    }

}
export default Form;