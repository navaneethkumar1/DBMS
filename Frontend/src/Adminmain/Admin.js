import '../css/Admin.css';
import Adminvalidation from './Adminvalidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Admin(){
  
const navigate=useNavigate()

const[values,setValues]=useState(
    {
        Admin_email:'',
        Admin_password:""
    }
);
const [errors,setErrors]=useState({});
const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }
  

const handleSubmit=(event)=>{
  event.preventDefault();
  setErrors(Adminvalidation(values));
  // if(errors.Admin_email==="" && errors.Admin_password===""){

  axios.post('http://localhost:8080/Admin',values)
.then(res=>{
  if(res.data==='success'){
    navigate('/AdminDashboard');
  }
else{
alert("not exists");
}

})
.catch(err=>console.log(err)); 

}
    return(
        <>
    <center>
    <div className='admin-login' >
        <div className='admin-login-1'>
          <form name='loginform' onSubmit={handleSubmit}>
            <h1 className='admin-login-heading'>ADMIN LOGIN</h1>
            <h3 className='admin-login-label'>Username</h3>
            <input type='email'  className="search-bar" placeholder='Enter your email' name='Admin_email'onChange={handleInput} ></input><br/>
            {errors.Admin_email&&<span>{errors.Admin_email}</span>}
            <h3>Password</h3>
            <input type='password' className="search-bar" placeholder='Enter your password' name='Admin_password' onChange={handleInput} ></input><br/>
           {/* {errors.Admin_password&& <span>{errors.Admin_password}</span>} */}
            <div className='admin_button'>
                <button type='submit' className='button-main'>LOGIN</button>
            </div>
            </form>
        </div>
    </div>
    </center>

    </>
  )
}
export default Admin;