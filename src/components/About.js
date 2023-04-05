import React from 'react'


function About() {
  return (
<div className='aboutbackground'>
        <div class="container">
	<div class="gridwrapper">

        <div class="infotext">
            <h1 className='about-h1'>A House In Newport</h1>
              <p className='abouttext'>
                This is the perfect coastal getaway for 1 or 2 people. 
                The house has amazing views overlooking Yaquina Bay and Newport's historic bay
                front. Well accommodated, stylish, comfortable and inviting.
              </p>

          <br/>
            <h2 className='about-h2'>The House</h2>
              <p className='abouttext'>
                This is a passive solar, midcentury modern home, originally built by Aurora's grandfather
                in 1950. It's been restored and updated, while honoring the original design and feel.
              </p>

          <br/>
            <h2 className='about-h2'>Guest Access</h2>
              <p className='abouttext'>
                The house has private parking on the same level as the entrance, with no steps to climb.
              </p>
              
          <br/>
            <h2>House Rules</h2>
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