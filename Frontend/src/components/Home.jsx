import '../css/Home.css';
import Contact from './Contact';
import Donate from './Donate';
import Navbar from './Navbar';
import Service from './Service';
import About from './About';
function Home(){
    return(
        <>
      <Navbar/>
        <div className="home">
            <div className='home-text'>
<p style={{ fontFamily: 'Madimi One, sans-serif' }}>Your Health is our priority</p> 
</div>
<div className='home-button'>
  <button  className="home-button-1" onClick={Service}>Explore NOw</button>
</div>
        </div>
      <Donate/>
        <Service/>
        <Contact/>
        </>
    );
}
export default Home;