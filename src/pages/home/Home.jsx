import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Test from './Test';

const Home = () => {
    return (
        <div>
            <main id='index'>
                <Hero />
            </main>
            <main id='about'>
                 <About />
            </main>
            <main id='services'>
                <Services/>
            </main>
               
                
        </div>
    )
}

export default Home