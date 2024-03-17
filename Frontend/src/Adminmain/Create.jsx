import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {Button,Modal } from "react-bootstrap";
import '../css/Create.css';

function Create() {
  const [values, setValues] = useState({
    name: '',
    gender: '',
    age: '',
    bloodgroup: '',
    address: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/donation', values)
      .then((res) => {
        console.log(res);
      navigate('/AdminDashboard')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="background">
      <div className='create-box'>
      <div className="container_box">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2">Username</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2">Gender</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="gender"
              className="form-control"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2">Age</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="age"
              className="form-control"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2">Blood Group</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="bloodgroup"
              className="form-control"
              onChange={(e) => setValues({ ...values, bloodgroup: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={(e) => setValues({ ...values, address: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2">Phone</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="phone"
              className="form-control"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
        </div>
          
            <div >
                <button className='Dsubmit' type="submit">Add User</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Create;
