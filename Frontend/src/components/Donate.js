import css from '../css/Donate.css';
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import blood_donation from '../images/blood-donation.jpg';
import red_blood from '../images/red-blood.jpg';
import platelette from '../images/platelette-image.jpg';
import cell_donation from '../images/Cell-donation.jpg';
function Donate(){
    
    return(
        <>
        <Navbar/>
        <div className='donate'>
 <div className='donateus'>
  <div className='donate-1'>
  <div className='donate-2'>
    <img src={blood_donation} width='300px' height='200px' alt='blood-donation'/>
    <div className='donate-3'>
    <p className='blood-p'>Blood Donation</p>
    </div>
    <div className='donate-4'>
    <p>ready to donate??? proceed here...</p>
    </div>
    <div className='donate-5'>
    <p><button><Link style={{color:'inherit'}} to='/Blood'>Enquire now</Link></button></p>
    </div>
     </div>
  </div>
  <div className='donate-1'>
  <div className='donate-2'>
<img src={red_blood}  width='300px' height='200px' alt='red-blood'/>
<div className='donate-3'>
<p className='blood-p'>provision of RBC</p>
</div>
<div className='donate-4'>
<p>ready to donate??? proceed here...</p>
</div>
<div className='donate-5'>
    <p><button><Link style={{color:'inherit'}} to='/Rbc'>Enquire now</Link></button></p>
    </div>
    </div>
  </div>
  </div>
  <div className='donateus-1'>
  <div className='donate-1'>
  <div className='donate-2'>
    <img src={platelette} width='300px' height='200px' alt='platelette'/>
    <div className='donate-3'>
    <p className='blood-p'>Platelet service</p>
    </div>
    <div className='donate-4'>
    <p>ready to donate??? proceed here...</p></div>
<div className='donate-5'>
    <p><button><Link style={{color:'inherit'}}to='/Platelete'>Enquire now</Link></button></p>
    </div>
    </div>
  </div>
  <div className='donate-1'>
  <div className='donate-2'>
<img src={cell_donation}  width='300px' height='200px'alt='cell'/>
<div className='donate-3'>
<p className='blood-p'>provision of stem cells</p>
</div>
<div className='donate-4'>
<p>ready to donate??? proceed here...</p>
    </div>
    <div className='donate-5'>
    <p><button><Link  style={{color:'inherit'}}to='/Stemcell'>Enquire now</Link></button></p>
    </div>
    </div>
  </div>
  </div>
  </div>
     
        </>
    );
}
export default Donate;