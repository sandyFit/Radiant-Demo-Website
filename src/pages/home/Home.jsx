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
        <main className='w-full'>
            <section id='index'>
                <Hero />
            </section>

            <section id='about'>
                <About />
            </section>
            
            <section id='services'>
                <Services/>
            </section>
            
            <section id='staff'>
                <Team/>
            </section>
            
            <section id='reviews'>
                <Reviews/>
            </section>
            
            <section id='faq'>
                <Faqs/>
            </section>
            
            <section id='contact'>
                <ContactTransition/>
            </section>
        </main>
    )
}

export default Home;
