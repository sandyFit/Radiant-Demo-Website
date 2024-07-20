import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';
import Reviews from './Reviews';
import Faqs from './Faqs';
import ContactTransition from './ContactTransition';
import Test from './Test';


const Home = () => {
    return (
        <div className='w-full'>
            <main id='index'>
                <Hero />
            </main>
           
            <main id='about'>
                 <About />
            </main>
            
            <main id='services'>
                <Services/>
            </main>
            <main id='staff'>
                <Team/>
            </main>
            <main id='reviews'>
                <Reviews/>
            </main>
            <main id='faq'>
                <Faqs/>
            </main>
            <main id='contact'>
                <ContactTransition/>
            </main>
                            
        </div>
    )
}

export default Home;
