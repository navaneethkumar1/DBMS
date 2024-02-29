import '../css/Home.css';
import Contact from './Contact';
import Navbar from './Navbar';
import Service from './Service';
function Home(){
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className='home-text'>
<p>Your Health is our priority</p> 
</div>
        </div>
        <Service/>
        <Contact/>
        </>
    );
}
export default Home;