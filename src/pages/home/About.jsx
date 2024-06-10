import React, { useEffect, useState, useRef } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import MenuCurtain from '../../components/cards/MenuCurtain';
import { HiArrowUp } from 'react-icons/hi2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const About = () => {

    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const lenisRef = useRef(null);

    useEffect(() => {
        //LENIS SMOOTH SCROLL
        const lenis = new Lenis({
            duration: 2
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        // Integration lenis on GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the scroll threshold based on your layout
        const scrollThreshold = 780;

        if (scrollPosition > scrollThreshold) {
            setShowFloatingBtn(true);
        }
        else {
            setShowFloatingBtn(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        gsap.fromTo(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 3,
            delay: .5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);
    
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
        <section id='about'
            className='w-full min-h-screen '>
            <div className="w-full flex justify-end items-center text-med-dark mb-9 relative gap-6 pt-32">
                <span
                    className="absolute left-[58rem] top-1/2 transform -translate-y-1/2 h-[0.1rem] bg-indigo-800"
                    ref={lineRef}
                    style={{ width: '0%' }} // Initial width set to 0%
                ></span>
                <span className="mr-32 relative">01 — About</span>
            </div>
            
        </section>
    )
}

export default About