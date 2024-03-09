  import React from 'react';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
  import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './Adminmain/Admin';

import AdminDashboard from './components/AdminDashboard';
import Read from './components/Read';
import Edit from './components/Edit';




  function App() {
    return (
      <div className="App">
        <BrowserRouter>

        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Contact'element={<Contact/>}/>
          <Route path='/Adminmain/Admin' element={<Admin/>}/>
 
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>

          <Route path='/read/:id' element={<Read/>} />
          <Route path='/edit/:id' element={<Edit/>} />

        

        </Routes>
        </BrowserRouter>
    
    
      </div>
    );
  }

  export default App;
