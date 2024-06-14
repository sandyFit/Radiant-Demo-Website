import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import MenuCurtain from '../../components/cards/MenuCurtain';

const About = () => {
    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 780;
        setShowFloatingBtn(scrollPosition > scrollThreshold);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        toggleMenu();
        console.log('clicked');
        e.stopPropagation();
    };

    const toggleMenu = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='flex flex-col w-full h-screen mb-[10vw] pt-[3rem] rounded-t-[50px]'>
            <div className="relative">
                {/* FLOATING MENU BUTTON */}
                <button onMouseDown={handleMouseDown}
                    className={`fixed w-20 h-20 top-8 left-10 group inline-flex items-center 
                        justify-center overflow-hidden rounded-full glass-light
                        z-[1000] ${showFloatingBtn ? '' : 'invisible'}`}>
                    <div className="group relative flex items-center gap-2">
                        <div className="flex flex-col items-end cursor-pointer gap-[7px]">
                            <div className={`lines sup-line ${visible ? 'active' : ''}`}></div>
                            <div className={`lines medium-line ${visible ? 'active' : ''}`}></div>
                            <div className={`lines inf-line ${visible ? 'active' : ''}`}></div>
                        </div>
                    </div>
                </button>
                
                {/* MENUHERO COMPONENT */}
                {showFloatingBtn && (
                    <div className={`z-30 fixed top-4 left-6`}>
                        <MenuCurtain isMenuOpen={visible} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
