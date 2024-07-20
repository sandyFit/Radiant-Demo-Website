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

        // Animate the footer reveal on scroll
        gsap.fromTo(".footer", 
            { y: '100%', autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top bottom", // when the top of the footer is at the bottom of the viewport
                    end: "bottom bottom", // when the bottom of the footer is at the bottom of the viewport
                    scrub: true, // smooth scrubbing
                }
            }
        );

    }, []);
    

    return (
         <div className='bg-slate-300'>
            <Navbar className='z-20'/>
            <div className="container relative" style={{ zIndex: 10}}>
                <Home />
            </div>
            <div className="" style={{position: 'sticky', bottom: 0, zIndex: 1}} >
                <Footer />
            </div>

        </div>
    )
}

export default App;
