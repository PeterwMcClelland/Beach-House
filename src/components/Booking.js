import React from 'react'

import {Link} from 'react-router-dom';




function Booking() {
  return (
    <>
    <div id="booking" className="section"> 
      <div className="section-center"> 
        <div className="booking-container"> 
          <div className="row"> 
            <div className="booking-form"> 

    <div className="form-header"> 
      <h1 className='booking-h1'>Book Your Stay</h1> 
    </div> 
    
    <form> 
      
      <div className="row"> 
        <div className="col-md-6"> 
          <div className="form-group"> 
            <input className="form-control" type="date" required/>
      <span className="form-label">Check In</span> 
      </div> 
    </div> 

    <div className="col-md-6"> 
      <div className="form-group"> 
        <input className="form-control" type="date" required/>
        <span className="form-label">Check out</span> 
        </div> 
      </div> 
    </div> 

    <div className="row"> 
      <div className="col-md-4"> 
        <div className="form-group"> 
          <select className="form-control" required> 
            <option value="" hidden>no of adults</option> 
              <option>1</option> 
              <option>2</option> 
              <option>3</option> 
              <option>4</option>
              <option>5</option>
              <option>6</option>
          </select> 
        <span className="select-arrow"></span> 
        <span className="form-label">Adults</span> 
        </div> 
      </div> 
    </div> 

    <div className="row"> 
      <div className="col-md-6"> 
        <div className="form-group"> 
          <input className="form-control" type="email" placeholder="Enter your Email" /> 
            <span className="form-label">Email</span> 
            </div> 
          </div> 
        <div className="col-md-6"> 
        <div className="form-group"> 
        <input className="form-control" type="tel" placeholder="Phone Number"/>
            <span className="form-label">Phone</span> 
        </div> 
      </div> 
    </div> 

     <div className="form-btn"> 
     <Link to='/Confirmation'>
     <button className="submit-btn">Book Now</button>
     </Link>

              </div> 
            </form> 
          </div> 
        </div> 
      </div> 
    </div>
  </div>
</>
  )
}

export default Booking;