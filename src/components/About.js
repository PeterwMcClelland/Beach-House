import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

function About() {
  return (
    <div className='aboutbackground'>
        <div class="container">
	<div class="gridwrapper">
        <div class="infotext">
            <h2 className='about-h2'>About Us</h2>
            <p className='abouttext'>
               <LoremIpsum p={1}/>

            </p>
            </div>
        
		<div className="map">
            <iframe 
            title='myframe'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22717.456536744994!2d-124.04114227179745!3d44.62397490457625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1d5db4c7c988d%3A0xd41f72f161fcfb72!2sNewport%2C%20OR!5e0!3m2!1sen!2sus!4v1680569631137!5m2!1sen!2sus" 
        width="550" 
        height="400" 
        style={{ border:0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"/>
        
            </div>
	</div>
</div>
    </div>
  )
}

export default About;