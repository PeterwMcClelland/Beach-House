import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';



function Confirmation() {
  return (
    <body className='confirmation-body'>
    <div className='confirmation'>
    <div><FontAwesomeIcon size='4x' color='lightgreen' icon={faCalendarCheck } /></div>
        <h1>Thank You!</h1>
        <p>
            We will email you in the next 24 hours with more information. 
        </p>
    </div>
    </body>
  )
}

export default Confirmation;