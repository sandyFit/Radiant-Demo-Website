import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { Outlet } from 'react-router-dom';
import { ContextProvider } from './utils/globalContext';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {


    return (
        <div className='bg-slate-300'>
            <ContextProvider>
                <Navbar/>                             
                <div className="relative z-10" >
                    <Outlet />
                </div>
                <div  className='xl:sticky xl:bottom-0 z-[1]'>
                    <Footer />
                </div>
            </ContextProvider>

        </div>
    )
}

export default App;
