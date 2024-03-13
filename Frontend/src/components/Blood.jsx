import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Blood.css';
function Blood(){
    const [values,setValues]=useState({
      donor_name:'',
      donor_age:'',      
      donor_group:'',
      donor_gender:'',
      donor_phone:'',
      donor_address:''
        })
        const navigate=useNavigate() 
        const [errors,setErrors]=useState({})
      const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
      }
        const handleSubmit=(event)=>{

          event.preventDefault();
          axios.post('http://localhost:8080/donateblood',values)
        .then(res=>{
          alert("submitted success");
        navigate('/Donate');
        
        })
        .catch(err=>console.log(err)); 
        }
      
return(
    <>
    <div className='blood-main'>
    <div className='blood-1'>
       <form id="login"   onSubmit={handleSubmit}>
        <div className='blood-2'>
                <input type="text" className="blood-2" placeholder="username" name="donor_name" onChange={handleInput} required/>
                <input type="number" className="blood-2" placeholder="age" name="donor_age" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="blood group" name="donor_group" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="gender" name="donor_gender" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="phone" name="donor_phone" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="city" name="donor_address" onChange={handleInput} required/><br/>
    <button className='blood-button-1'><Link to='/Donate'>Cancel</Link></button>
                <button className='blood-button-1' type="submit">Register</button>
                </div>
            </form>
            </div>
            </div>
    </>
)
}
export default Blood;