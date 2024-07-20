import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Button from '../../components/buttons/Button';

const Test = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('book');
    }

    const imgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const img = imgRef.current;

        gsap.fromTo(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);


    return (
        <section id='index'
            className='w-full min-h-screen '>
            
            
        </section>
    )
}

export default Test;
