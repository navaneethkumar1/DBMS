import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Platelete(){
    const [values,setValues]=useState({
        blood_name:'',
          blood_age:'',      
        blood_group:'',
        blood_gender:'',
        blood_phone:'',
        blood_city:''
        })
        const navigate=useNavigate() 
        const [errors,setErrors]=useState({})
      const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
      }
        const handleSubmit=(event)=>{
          event.preventDefault();
          axios.post('http://localhost:8081/Blood',values)
        .then(res=>{
        navigate('/Login');
        
        })
        .catch(err=>console.log(err)); 
        }
      
return(
    <>
       <form id="login"  className="grow"  onSubmit={handleSubmit}>
                <input type="text" className="input-f1" placeholder="username" name="blood_name" onChange={handleInput} required/>
                <input type="number" className="input-f1" placeholder="age" name="blood_age" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="blood group" name="blood_group" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="gender" name="blood_gender" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="phone" name="blood_phone" onChange={handleInput} required/>
                <input type="text" className="input-f1" placeholder="city" name="blood_city" onChange={handleInput} required/>

                <button type="submit" className="submit-btn" >Register</button>
            </form>
    </>
)
}
export default Platelete;