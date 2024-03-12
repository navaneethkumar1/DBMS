import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  {Button,Modal } from "react-bootstrap";
import '../css/Create.css';



function Create() {

  const navigate = useNavigate();


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const closeOutsideModal = (event) => {
      if (event.target === event.currentTarget) {
        setModalOpen(false);
      }
    };
  
  

    const [values, setValues]=useState({
        name:'',
        gender:'',
        age:'',
        bloodgroup:'',
        address:'',
        phone:'',

    })

  

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/donation',values)
        .then(res=>{
            console.log(res);
            setTimeout(() => {
              // navigate('/AdminDashboard');
              closeModal();
            }, 2000);

        })
        .catch(err=>console.log(err))


    }
    
 return (
  <div>
  
  <button className='custom-button'  onClick={openModal}>Create </button>

  {modalOpen && (
    <div
      className="modal"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
      onClick={closeOutsideModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add user</h2>

      <form onSubmit={handleSubmit}>
 <div className="mb-3 row">
    <label className="col-sm-2">Username</label>
    <div className="col-sm-10">
    <input type="text" name="name" className="form-control" onChange={e=>setValues({...values,name: e.target.value})} />
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


  <Button variant="primary" className="add_button"  onClick={(e) => { e.preventDefault(); handleSubmit(e); }}> Add user</Button>


 </form>

      </div>
    </div>
  )}
</div>
);
};

export default Create

