import css from '../css/Donate.css';
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import blood_donation from '../images/blood-donation.jpg';
import red_blood from '../images/red-blood.jpg';
import platelette from '../images/platelette-image.jpg';
import cell_donation from '../images/Cell-donation.jpg';
function Donate(){
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
    // const [values,setValues]=useState({
    //     blood_name:'',
    //       blood_age:'',      
    //     blood_group:'',
    //     blood_gender:'',
    //     blood_phone:'',
    //     blood_city:''
    //     })
    //     const navigate=useNavigate() 
    //     const [errors,setErrors]=useState({})
    //   const handleInput=(event)=>{
    //     setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    //   }
    //     const handleSubmit=(event)=>{
    //       event.preventDefault();
    //       axios.post('http://localhost:8081/Donate',values)
    //     .then(res=>{
    //     navigate('/Login');
        
    //     })
    //     .catch(err=>console.log(err)); 
    //     }
      
    return(
        <>
        <Navbar/>
        <div className='donate'>
    
    
  
    {/* <Carousel responsive={responsive}   itemClass="carousel-item-padding" > */}
      
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
    <p><button>Enquire now</button></p>
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
    <p><button>Enquire now</button></p>
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
    <p><button>Enquire now</button></p>
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
    <p><button>Enquire now</button></p>
    </div>
    </div>
  </div>
  </div>
  </div>
{/* </Carousel> */}
        {/* <form id="login"  className="grow"  onSubmit={handleSubmit}>
                <input type="text" className="input-f1" placeholder="username" name="blood_name" onChange={handleInput} required/>
                <input type="number" className="input-f1" placeholder="age" name="blood_age" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="blood group" name="blood_group" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="gender" name="blood_gender" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="phone" name="blood_phone" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="city" name="blood_city" onChange={handleInput} required/>

                <button type="submit" className="submit-btn" >Register</button>
            </form> */}
        </>
    );
}
export default Donate;