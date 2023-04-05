import React from 'react'


function About() {
  return (
    <div className='aboutbackground'>
        <div class="container">
	<div class="gridwrapper">

  {/* <div className="map">
            <iframe 
            title='myframe'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22717.456536744994!2d-124.04114227179745!3d44.62397490457625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1d5db4c7c988d%3A0xd41f72f161fcfb72!2sNewport%2C%20OR!5e0!3m2!1sen!2sus!4v1680569631137!5m2!1sen!2sus" 
        width="500" 
        height="350" 
        style={{ border:0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"/>
        
            </div>  */}

        <div class="infotext">
            <h1 className='about-h1'>About This Space</h1>
            <p className='abouttext'>
            This is the perfect coastal getaway for 1 or 2 people. 
            The house has amazing views overlooking Yaquina Bay and Newport's historic bay
             front. Well accommodated, stylish, comfortable and inviting.
            </p>
            <h2 className='about-h2'>The Space</h2>
            <p className='abouttext'>
            This is a passive solar, midcentury modern home, originally built by Aurora's grandfather
             in 1950. It's been restored and updated, while honoring the original design and feel.
            </p>
            <h2 className='about-h2'>Guest Access</h2>
            <p className='abouttext'>
            The house has private parking on the same level as the entrance, with no steps to climb.
            </p>
            <br/>
            <h3>House Rules</h3>
            <ul>
              <li>No Pets.</li>
              <li>No parties or events, capacity is 2 people.</li>
              <li>No smoking at all on the premises.</li>
              <li>Not suitable for children, no child accommodations.</li>
              <li>No unregistered guests.</li>
              <li>No food or drink in the bedroom, water is fine.</li>
            </ul>
            </div>
        
		
	</div>
</div>
    </div>
  )
}

export default About;