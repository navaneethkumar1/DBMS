import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import  {Button} from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {

    // to show field values when we click update button
      const {id} = useParams();
      const navigate = useNavigate();

      useEffect(()=>{
        axios.get('http://localhost:8000/read/'+id)
        .then(res =>{
            console.log(res)
            setValues({...values, name: res.data[0].user_name, gender: res.data[0].user_gender, age: res.data[0].user_age, bloodgroup: res.data[0].user_group, address: res.data[0].user_address, phone: res.data[0].user_phone})

        })
           .catch(err=> console.log(err))
    },[])


    const [values, setValues]=useState({
      name:'',
      gender:'',
      age:'',
      bloodgroup:'',
      address:'',
      phone:'',

  })

  const handleUpdate = (event)=>{
    event.preventDefault();
    axios.put('http://localhost:8000/edit/'+id, values)
    .then(res=>{
        console.log(res)
        navigate('/adminmain/admindashboard');
    }).catch(err=>console.log(err));
}


// for pop up window
   
    const handleClose=()=>{
      navigate('/adminmain/admindashboard');
    }
 

    return (
    <>
     <h1>Edit user</h1>
  

    <form >
         <div class='mb-3 row'>
  
        <label class="col-sm-1">Username</label>
        <div className="col-sm-5">
          <input type="text" name="name" className="form-control"  value={values.name}  onChange={e=>setValues({...values,name: e.target.value})}/>
        </div>
        </div>
     

        <div class='mb-3 row'>
        <label className="col-sm-1">Gender</label>
        <div className="col-sm-5">
          <input type="text" name="gender" className="form-control"  value={values.gender}  onChange={e=>setValues({...values,gender: e.target.value})} />
        </div>
        </div>

        
        
        <div class='mb-3 row'>
        <label className="col-sm-1">Age</label>
        <div className="col-sm-5">
          <input type="text" name="age" className="form-control"  value={values.age}  onChange={e=>setValues({...values,age: e.target.value})} />
        </div>
        </div>
 

         
        <div class='mb-3 row'>
        <label className="col-sm-1">Blood Group</label>
        <div className="col-sm-5">
          <input type="text" name="bloodgroup" className="form-control"  value={values.bloodgroup}   onChange={e=>setValues({...values,bloodgroup: e.target.value})}/>
        </div>
          </div>

       
          <div class='mb-3 row'>
        <label className="col-sm-1">Address</label>
        <div className="col-sm-5">
          <input type="text" name="address" className="form-control"   value={values.address }  onChange={e=>setValues({...values,address: e.target.value})} />
        </div>
        </div>
    

        
        <div class='mb-3 row'>
        <label className="col-sm-1">Phone</label>
        <div className="col-sm-5">
          <input type="text" name="phone" className="form-control"  value={values.phone}  onChange={e=>setValues({...values,phone: e.target.value})} />
        </div>
        </div>
      
        <div className="col-sm-2">
        <Button variant="secondary" onClick={handleClose}>Close </Button>
        <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </div>
         
    </form>
 
    </>
    )
    }
      
export default Edit
