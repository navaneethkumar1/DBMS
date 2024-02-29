// import '../css/Admin.css';
// import Loginvalidation from '../components/Loginvalidation';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// function Admin(){
  
// const handleSubmit=(event)=>{
//   event.preventDefault();
//   setErrors(Loginvalidation(values));
//   if(errors.Admin_email==="" && errors.Admin_password===""){

//   axios.post('http://localhost:8081/Adminlogin',values)
// .then(res=>{
//   if(res.data==='success'){
//     navigate('/Dashboard');
//   }
// else{
// alert("not exists");
// }

// })
// .catch(err=>console.log(err)); 
// }
// }
//     return(
//         <>
//  <form onSubmit={handleSubmit}>
//   <input type="email" name='admin_email' placeholder='admin email' onChange={Handleinput}/>
  
//   <input type="email" name='admin_email' placeholder='admin email' onChange={Handleinput}/>
//   <button type='submit'>login</button>
//  </form>
//     </>
//   )
// }
// export default Admin;