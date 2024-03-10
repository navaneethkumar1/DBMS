  import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Donate from './components/Donate';
import Blood from './components/Blood';
import Rbc from './components/Rbc';
import Platelete from './components/Platelete';
import Stemcell from './components/Stemcell';
import Contact from './components/Contact';
  import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './Adminmain/Admin';
  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Donate' element={<Donate/>}/>
          <Route path='/Blood' element={<Blood/>}/>
          <Route path='/Rbc' element={<Rbc/>}/>
          <Route path='/Platelete' element={<Platelete/>}/>
          <Route path='/Stemcell' element={<Stemcell/>}/>
          <Route path='/Contact'element={<Contact/>}/>
          <Route path='/Admin' element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    
    
      </div>
    );
  }

  export default App;
