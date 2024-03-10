import axios from 'axios';
import React from 'react'
import { useState } from "react";
import  {Button,Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../css/Create.css';


function Create() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [values, setValues]=useState({
        name:'',
        gender:'',
        age:'',
        bloodgroup:'',
        address:'',
        phone:'',

    })

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/donation',values)
        .then(res=>{
            console.log(res);
            // navigate('/')

        })
        .catch(err=>console.log(err))


    }
    
 return (
    <>

<div className="container_box"></div>
 
 <Button  className='custom-button'  onClick={handleShow}>Create +</Button>

 <Modal show={show} onHide={handleClose}>

<Modal.Header closeButton>
  <Modal.Title>Add user</Modal.Title>
</Modal.Header>
<Modal.Body>

  <form onSubmit={handleSubmit}>
    <div className="mb-3 row">
      <label className="col-sm-2">Username</label>
      <div className="col-sm-10">
        <input type="text" name="name" className="form-control" onChange={e=>setValues({...values,name: e.target.value})}/>
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2">Gender</label>
      <div className="col-sm-10">
        <input type="text" name="gender" className="form-control" onChange={e=>setValues({...values,gender: e.target.value})} />
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2">Age</label>
      <div className="col-sm-10">
        <input type="text" name="age" className="form-control" onChange={e=>setValues({...values,age: e.target.value})} />
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2">Blood Group</label>
      <div className="col-sm-10">
        <input type="text" name="bloodgroup" className="form-control" onChange={e=>setValues({...values,bloodgroup: e.target.value})}/>
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2">Address</label>
      <div className="col-sm-10">
        <input type="text" name="address" className="form-control" onChange={e=>setValues({...values,address: e.target.value})} />
      </div>
    </div>

    <div className="mb-3 row">
      <label className="col-sm-2">Phone</label>
      <div className="col-sm-10">
        <input type="text" name="phone" className="form-control" onChange={e=>setValues({...values,phone: e.target.value})} />
      </div>
    </div>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={(e) => { e.preventDefault(); handleClose(); handleSubmit(e); }}> Add user</Button>


    </Modal.Footer>
  </form>
</Modal.Body>
</Modal>

      
</>
    )
}
export default Create

