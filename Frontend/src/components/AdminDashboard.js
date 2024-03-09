import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.min.css'


 function AdminDashboard() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/admindashboard')
        .then(res =>setData(res.data))
        .catch(err=> console.log(err));

     },[])
    
     const handleDelete = (id)=>{
        axios.delete('http://localhost:8000/delete/'+id)
        .then(res =>{
            // location.reload();
        })
        .catch(err=> console.log(err));
     }
    return (
        <>

<div className="container">
        <h1>Welcome to admin dashboard</h1>

        <div className='user-list-container'>
          <div className='user-list'>
            <h2>User list</h2>

            <div className=''>
              <Create />
            </div>

            <table className='user-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) && data.map((donation, index) => (
                  <tr key={index}>
                    <td>{donation.user_id}</td>
                    <td>{donation.user_name}</td>
                    <td>{donation.user_gender}</td>
                    <td>{donation.user_age}</td>
                    <td>{donation.user_group}</td>
                    <td>{donation.user_address}</td>
                    <td>{donation.user_phone}</td>
                    <td>
                      <Link to={`/edit/${donation.user_id}`}>
                        <button className='edit-button'>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(donation.user_id)} className='delete-button'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

 export default AdminDashboard