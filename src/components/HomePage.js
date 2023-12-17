

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
       <div className="home-page-header Section">
      <img src="https://myoohr.com/_next/image?url=%2Flogo.png&w=640&q=75" alt="Your Image" />
      <div> <a href="https://myoohr.com/_next/image?url=%2Flogo.png&w=640&q=75">Home</a> </div>
      <div><a href="/">Pricing Plan</a></div>
      <div><a href="/">Driver</a></div>
      <div><a href="/">Parent</a></div>
      <div><a href="/">Contact Us</a></div>
      <div><a href="/">LOG IN</a></div>

    </div>
    <div className='about-content section' >
        <h1>"Empowering Safe Journeys, Ensuring Tranquil Minds – My-Oohr: Where School Transportation Meets Digital Security."</h1>

        <div className='aside-about'>
      <p> Our platform offers an easy and effective way for schools and parents to connect digitally, enabling secure transportation tracking. My-Oohr doesn't just transform the way kids travel; it revolutionizes the concept of secure travel. Parents can now embark on a journey of tranquility, knowing that their children's daily commute is not only monitored but safeguarded, ensuring peace of mind with every journey. Welcome to a new era of secure and trackable school transportation with My-Oohr.In an era where digital connectivity is vital, My-Oohr emerges as a seamless solution, bridging the gap between educational institutes and concerned parents.</p>

    <img src="https://myoohr.com/_next/image?url=%2Fhomeimage3.png&w=1080&q=75" alt="" /></div> 
    
    </div>
    <div className='how-it-works section'>
      <h1>how-it-works</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni officiis commodi amet, iure facilis voluptatibus deleniti animi hic obcaecati eum eos cupiditate tenetur sed doloribus! Autem tempora consequuntur reiciendis aspernatur fugit nihil vel. Esse perspiciatis dolorem nesciunt minus distinctio facilis voluptates, reprehenderit accusantium repellat aliquid, excepturi aperiam rerum impedit nisi?</p>

      <div className='how-blocks'><h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae at deserunt dolorum obcaecati beatae qui vel in ipsum velit?</p>
      </div>
      <div className='how-blocks'><h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae at deserunt dolorum obcaecati beatae qui vel in ipsum velit?</p>
      </div>
      <div className='how-blocks'><h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae at deserunt dolorum obcaecati beatae qui vel in ipsum velit?</p>
      </div>
      <div className='how-blocks'><h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae at deserunt dolorum obcaecati beatae qui vel in ipsum velit?</p>
      </div>
      <div className='how-blocks'><h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae at deserunt dolorum obcaecati beatae qui vel in ipsum velit?</p>
      </div>
    </div>
    <div className='advantage section'>
      
      <h1>Advantage.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, beatae ut laborum eos explicabo repellendus ea ratione esse earum vitae quod minus at dolor, mollitia, tempore voluptatibus aut saepe exercitationem.</p>
    </div>

    <div className='download-links section'>
      <h1>download the app :-</h1>
    <div> <a href="/">goople app store</a></div>
     <div>  <a href="/">apple app store</a></div>
    
    </div>

<div className='video section'>
  <video src=""></video>
</div>

<div className='our-process section'>
  <h1>our process</h1>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</div>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</div>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</div>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</div>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam.</div>
</div>

<div className='pricing-plan section'>
  <h1>Pricing plan</h1>
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat quia deleniti omnis? Sapiente!</div>
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat quia deleniti omnis? Sapiente!</div>
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat quia deleniti omnis? Sapiente!</div>
</div>



<div className='contact-us section'>
  <h1>Contact Us</h1>
  <p>
    For any inquiries about our transportation tracking services, feel free to reach out to us.
    We are here to assist you in ensuring the safety and security of your children during their journeys.
  </p>

  <div className="contact-details">
    <div className="oohr-details">
      <h3>about </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto saepe unde harum cupiditate officiis!</p>
      <h3>My-Oohr Details</h3>
      <ul>
        <li>Phone: [Your Phone Number]</li>
        <li>Email: [Your Email Address]</li>
        <li>Address: [Your Address]</li>
      </ul>
    </div>
    <div className="contact-form">
      <h4>Contact Form</h4>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
    </>
  );
};

export default HomePage;
