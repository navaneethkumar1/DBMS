// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPlus, FaTint, FaChartBar } from 'react-icons/fa';
import '../css/Sidebar.css';
import { MdBloodtype } from "react-icons/md";



// const Sidebar = () => {
    function Sidebar(){

    // const navigate = useNavigate();
    // const handleNavigate = () => {
    //     navigate('/Donorlist');
    //   };

  return (
    <div className="sidebar">
     <div className="header"> Admin Panel</div>
      <div className="nav-item" title="User Request">
        <FaTint className="icon" />
        <span className="text"><Link to='/AdminDashboard'>BLOOD DETAILS</Link></span>
      </div>
      <div className="nav-item" title="Create">
        <FaPlus className="icon" />
        <span className="text"><Link to='/Create'>CREATE</Link></span>
      </div>
     

      <div className="nav-item" title="Blood Details Count">
      <MdBloodtype size={25} />
        <span className="text" ><Link to='/Donorlist'>Donor List</Link></span>
      </div>

      <div className="nav-item" title="Blood Details Count">
        <FaTint className="icon" />
        <span className="text"><Link to='/Requestedlist'>Requested List</Link></span>
      </div>
    </div>
  );
};

export default  Sidebar;
