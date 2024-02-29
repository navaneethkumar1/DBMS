import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from '../css/Service.css';
import blood_storage from '../images/blood-storage.jpg';
import blood_donation from '../images/blood-donation.jpg';
import red_blood from '../images/red-blood.jpg';
import platelette from '../images/platelette-image.jpg';
import cell_donation from '../images/Cell-donation.jpg';
import Navbar from './Navbar';
 function Service(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
return(
    <>
    <Navbar/>
    <div className='service-heading'>
        <h2>SERVICES</h2>
    
    </div>
    <Carousel responsive={responsive}>
  <div className='blood-storage'>
    <img src={blood_storage}width='300px' height='250px' alt='blood-storage'/>
    <p className='blood-p'>Blood Strorage</p>
    <p>we store blood for any kind of treatment </p>
    <p><button>Enquire now</button></p>
  </div>
  <div className='blood-donation'>
    <img src={blood_donation} width='300px' height='250px' alt='blood-donation'/>
    <p className='blood-p'>Blood Donation</p>
    <p>donation of blood is selfless service that we do for mankind</p>
    <p><button>Enquire now</button></p>
  </div>
  <div className='red-blood'>
<img src={red_blood}  width='300px' height='250px' alt='red-blood'/>
<p className='blood-p'>provision of red blood</p>
    <p>donation of blood is selfless service that we do for mankind</p>
    <p><button>Enquire now</button></p>
  </div>
  <div>
    <img src={platelette} width='300px' height='250px' alt='platelette'/>
    <p className='blood-p'>provision of platelette</p>
    <p>donation of blood is selfless service that we do for mankind</p>
    <p><button>Enquire now</button></p>
  </div>
  <div className='cell-donation'>
<img src={cell_donation}  width='300px' height='250px'alt='cell'/>
<p className='blood-p'>provision of stem cells</p>
    <p>donation of blood is selfless service that we do for mankind</p>
    <p><button>Enquire now</button></p>
  </div>
</Carousel>
    </>

);
}
export default Service;