import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
        });
        
    }, []);
    

    return (
         <div className='bg-slate-300'>
            <Navbar className='z-20'/>
            <div className="relative z-10" >
                <Home />
            </div>
            <div  className='footer-desktop'>
                <Footer />
            </div>

        </div>
    )
}

export default App;
