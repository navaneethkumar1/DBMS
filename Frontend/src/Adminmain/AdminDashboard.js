
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import  '../css/AdminDashboard.css'
import Create from './Create';
import Sidebar from './Sidebar';


 function AdminDashboard() {

    const [data, setData] = useState([]);
        const [groupCounts, setGroupCounts] = useState({});
    
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8080/admindashboard');
              console.log(response.data);
              setData(response.data);
      
              // Calculate counts for each user_group
              const counts = response.data.reduce((acc, donation) => {
                acc[donation.user_group] = (acc[donation.user_group] || 0) + 1;
                return acc;
              }, {});
              setGroupCounts(counts);
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
          };
      
          fetchData();
        }, []);
      
    
     const handleDelete = (id)=>{
        axios.delete('http://localhost:8080/delete/'+id)
        .then(res =>{
            // location.reload();
        })
        .catch(err=> console.log(err));
     }
    return (
        <>

<div className="container">
<Sidebar/>
      

        <div className="user-list-container">
          
          <div className='user-list'>
          <h1>Welcome to admin dashboard</h1>
            <h2>User list</h2>

            <table id='customers'>
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
                        <button className='user_edit_button'>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(donation.user_id)} className='user_delete_button'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        <div className='groupsCount'>
          
              <table id="bloodGroups">
                <thead>
                  <tr>
                    <th>Blood Group</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(groupCounts).map((group, index) => (
                    <tr key={index}>
                      <td>{group}</td>
                      <td>{groupCounts[group]}</td>
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

 export default AdminDashboard;





