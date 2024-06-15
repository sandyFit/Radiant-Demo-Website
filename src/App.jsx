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
            <Navbar />
            <Home/>
        </div>
    )
}

export default App;
