
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


// import {Link} from 'react-router-dom';




 function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('service_9kwskiv', 'template_sjp2srm', e.target, 'FuxVngYBFR69CxVp3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    
     <div id="booking" className="section"> 
      <div className="section-center"> 
        <div className="booking-container"> 
          <div className="row"> 
            <div className="booking-form"> 

    <div className="form-header"> 
      <h1 className='booking-h1'>Book Your Stay</h1> 
    </div> 
    
    <form onSubmit={handleSubmit}> 

    <div className="row"> 
        <div > 
          <div className="form-group"> 
            <input className="form-control" type="text" placeholder='Full Name' name="from_name" value={name} onChange={(e) => setName(e.target.value)} />
          <span className="form-label"></span> 
        </div> 
      </div>
    </div> 
   
    <div className="row"> 
      <div className="col-md-6"> 
        <div className="form-group"> 
        <input className="form-control" type="email" name="reply_to" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
            <span className="form-label">Email</span> 
            </div> 
          </div> 
      </div> 

    <div className="row"> 
        <div > 
          <div className="form-group"> 
            <textarea className="form-control" placeholder='Message' type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <span className="form-label"></span> 
        </div> 
      </div>
    </div> 
    
            <div className="form-btn"> 
              {/* <Link to='/Confirmation'> */}
               <button className="submit-btn" type="submit" >Book Now</button>
              {/* </Link> */}
              </div> 
            </form> 
          </div> 
        </div> 
      </div> 
    </div>
  </div> 

  );
}

 export default Booking;

// function Booking() {
  

//   return (
//     <form className='test' >
//       <label>Name</label>
//       <input type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} />

//       <label>Email</label>
//       <input type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} />

//       <label>Message</label>
//       <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

//       <button type="submit">Send</button>
//     </form>
//   );
// }

// export default Booking;
