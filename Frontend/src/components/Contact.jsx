import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css';
import location from '../images/location-dot-solid.svg';
import email from '../images/envelope-solid.svg';
import phone from '../images/phone-solid.svg';
import Navbar from './Navbar';
// Import Font Awesome CSS in your component or entry file
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
  const [state, handleSubmit] = useForm("mnqezoll");

  const submitForm = (e) => {
    e.preventDefault();
    // Handle any additional logic before submitting the form if needed
    handleSubmit(e);
    if(state.succeeded)
{
    e.target.reset();
    alert("message sent successfully");
}  
 
  };

  return (
    <>
      <Navbar />
      <div id='cont-img'>
      <div className='contactus'>
        <p className='contact-heading'>CONTACT US</p>
        <div className='contact-1'>
          <div className='message'>
            <div className='message-location'>
              <img src={location} alt='location' width='40px' height='80px' className='message-image1' />
              <p className='message-image' id='contact-loc'>Manglore, Dakshin Kannada, Karnataka</p>
            </div>
            <div className='message-email'>
              <img src={email} alt='email' width='40px' height='80px' className='message-image1' />
              <p className='message-image'>bloodcenter@gmail.com</p>
            </div>
            <div className='message-phone'>
              <img src={phone} alt='phone' width='40px' height='80px' className='message-image1' />
              <p className='message-image'>6238506956</p>
            </div>
          </div>
          <div className='message-1'>
            <form onSubmit={submitForm}>
              <label>Name:</label>
              <input type='text' className='message-2' name='name' placeholder='Enter full name' required />
              <label>Email:</label>
              <input type='email' className='message-2'name='email' placeholder='Enter your email' required />
              <label>Message:</label>
              <textarea rows='5' columns='10' className='message-2' name='message' required></textarea>
              <button type='submit' disabled={state.submitting}>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="row">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-whatsapp"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
      </div>

      <div className="row">
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="row">
        Copyright © 2024 BloodBank - All rights reserved || Designed By: BloodBank Team
      </div>
    </footer>
    </div>
    </>
  );
}

export default Contact;
