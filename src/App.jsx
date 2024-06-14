import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import 'aos/dist/aos.css'; // Import the CSS styles
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './layouts/Navbar';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    

    return (
        <div className=''>
            <Navbar className=''/>
            <div className="container relative" >
                <Home />
            </div>
            {/* <div className="" style={{position: 'sticky', bottom: 0, zIndex: 0}} >
                <Footer />
            </div> */}
        </div>
    )
}

export default App;
