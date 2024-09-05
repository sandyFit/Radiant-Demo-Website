import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../../assets/loader.css'

const Loader = ({ onComplete }) => {

    useEffect(() => {
        Pace.on('done', () => {
            // Animate elements with GSAP
            gsap.to('.p', {
                delay: 0.5, // 500ms delay
                duration: 1.5, // 3000ms duration
                top: '30%',
                opacity: 0,
                ease: 'power2.out'
            });

            gsap.to('#preloader', {
                delay: 1.5, // 1500ms delay
                duration: .8, // 2000ms duration
                top: '-100%',
                ease: 'power2.out',
                onComplete: onComplete // Notify parent when done
            });

            gsap.from('.title', {
                delay: 1.8,
                duration: .8,
                y: 10,
                opacity: 0,
                ease: 'expo.inOut'
            });
        });
    }, [onComplete]);

    return (
        <section id="preloader" className="fixed inset-0 flex items-center justify-center bg-white z-[1000]">
            <div className="loading__text text-3xl font-bold">LOADING</div>
        </section>
    );
}

export default Loader;
