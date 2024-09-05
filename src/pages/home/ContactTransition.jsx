import React, { useState, useEffect, useRef } from 'react'
import MotionText from '../../components/ui/MotionText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const ContactTransition = () => {

    gsap.registerPlugin(ScrollTrigger);

    const lineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { width: '0%' },
            {
                width: '20%', // Change this value to your desired width
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className='w-full bg-slate-300 overflow-x-hidden'>
             <header className="w-full flex justify-start items-center text-mayus-dark mb-0 relative 
                px-6 md:px-8 base:px-12 lg-sm:px-16 lg-xl:px-20 2xl-md:px-24 2xl:px-32 3xl:px-40">              
                <div className="w-full flex justify-start items-center text-mayus-dark mb-0 relative ">               
                    <span 
                        className='inline-flex mb-16'>
                        <TextShimmerEffect text={`Didn't find your answer?`}/>
                    </span>                         
                </div>               
            </header>

            <MotionText
                icon={'∎'}
                part1={"Feel Free to Reach Out"}

            />

            
        </section>
    )
}

export default ContactTransition;