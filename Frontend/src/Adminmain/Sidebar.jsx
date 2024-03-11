// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPlus, FaTint, FaChartBar } from 'react-icons/fa';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">Admin</div>
      <div className="nav-item" title="User Request">
        <FaTint className="icon" />
        <span className="text"><Link to='/AdminDashboard'>BLOOD DETAILS</Link></span>
      </div>
      <div className="nav-item" title="Create">
        <FaPlus className="icon" />
        <span className="text"><Link to='/Create'>CREATE</Link></span>
      </div>
      <div className="nav-item" title="Blood Details Count">
        <FaTint className="icon" />
        <span className="text">Blood Details Count</span>
      </div>
    </div>
  );
};

export default Sidebar;