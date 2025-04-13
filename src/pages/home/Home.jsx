import React, { useState } from 'react';
import Hero from './Hero';
// import About from './About';
// import Services from './Services';
// import Team from './Team';
// import Reviews from './Reviews';
// import Faqs from './Faqs';
// import ContactTransition from './ContactTransition';
import Intro from './Intro';
// import Loader from './Loader';

const Home = () => {
    const [introComplete, setIntroComplete] = useState(false);

    return (
        <main className='w-full'>
            <section className='z-[1000]'>
                <Intro onComplete={() => setIntroComplete(true)} />
            </section>
                       
            {/* Add a class to control visibility */}
            <section id='index' className={introComplete ? 'opacity: 1' : 'opacity: 0'}>
                <Hero onIntroComplete={() => {}} />
            </section>

            {/* <section id='about'>
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
            </section> */}
        </main>
    )
}

export default Home;
