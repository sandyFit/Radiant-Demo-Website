import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';


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
            <main id='team'>
                <Team/>
            </main>
            
               
                
        </div>
    )
}

export default Home