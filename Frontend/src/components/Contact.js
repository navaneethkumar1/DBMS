import css from '../css/Contact.css';
import location from '../images/location-dot-solid.svg';
import email from '../images/envelope-solid.svg';
import phone from '../images/phone-solid.svg';
import Navbar from './Navbar';
function Contact(){
    return(
        <>
         <Navbar/> 
        <div className='contactus'>
        <p className='contact-heading'>CONTACT US</p>
            <div className='contact-1'>
        
            <div className='message'>
          
            <div className='message-location'>
                <img src={location} alt='location' width='40px' height='80px'className='message-image1'/><p className='message-image' >Manglore,Dakshin kannada,karnataka</p>
                </div>
                <div className='message-email'>
                <img src={email} alt='email' width='40px' height='80px' className='message-image1'/><p className='message-image'>bloodcenter@gmail.com</p>
                </div>
                <div className='message-phone'>
                <img src={phone} alt='phone' width='40px' height='80px' className='message-image1'/><p className='message-image'>6238506956</p>
            </div>
            </div>
            <div className='message-1'>
                <label>Name:</label>
                <input type='text' className='message-2' placeholder='enter full name' required/>
                <label>Email:</label>
                <input type='text' className='message-2' placeholder='enter your email' required/>
                <label>Message:</label>
                <textarea row='20'column='30' className='message-2'>enter your message</textarea>
                <button >Submit Now</button>
            </div>
            </div>
        </div>
        </> 
    );

}
export default Contact;