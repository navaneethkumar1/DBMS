  import React from 'react';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
  import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './Adminmain/Admin';
import Read from './Adminmain/Read';
import Edit from './Adminmain/Edit';
import Sidebar from './Adminmain/Sidebar';
import About from './Adminmain/About';
import Comment from './Adminmain/Comment';
import Analytics from './Adminmain/Analytics'
import Product from './Adminmain/Product';
import ProductList from './Adminmain/ProductList';
import AdminDashboard from './Adminmain/AdminDashboard';






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
          <Route path='/Adminmain/Sidebar' element={<Sidebar/>}/>

          <Route path="/About" element={<About/>} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductList" element={<ProductList/>}/>
          <Route path='/Adminmain/AdminDashboard' element={<AdminDashboard/>}/>
 
          {/* <Route path='/AdminDashboard' element={<AdminDashboard/>}/> */}

          <Route path='/read/:id' element={<Read/>} />
          <Route path='/edit/:id' element={<Edit/>} />

        

        </Routes>
        </BrowserRouter>
    
    
      </div>
    );
  }

  export default App;
