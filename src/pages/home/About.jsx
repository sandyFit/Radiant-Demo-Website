import React, { useEffect, useState, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import MenuCurtain from '../../components/cards/MenuCurtain';
import { HiArrowUp } from 'react-icons/hi2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';


const About = () => {
    const [showFloatingBtn, setShowFloatingBtn] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 780;
        setShowFloatingBtn(scrollPosition > scrollThreshold);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleClick = (e) => {
        e.preventDefault();      // Prevents the default action of the click event
        toggleMenu();            // Toggles the visibility state of the menu
        console.log('clicked');  // Logs to the console for debugging
        e.stopPropagation();     // Prevents the click event from propagating to parent elements
    };


    const toggleMenu = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    

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
                once: true,
            },
        });
    }, []);

    

    return (
        <section id='about'
            className='flex flex-col w-full h-full pt-6 3xl-sm:pt-[8rem] bg-slate-300
                px-6 md:px-8 base:px-12 lg-sm:px-16 2xl:px-24 3xl:px-32 '>
            
            <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6">               
                <span 
                    className='inline-flex'
                >
                    <TextShimmerEffect text={`(01) About Us`}/>
                </span>                         
            </div>
            
            <div className="relative">
                {/* FLOATING MENU BUTTON */}
                <button onClick={handleClick}
                    className={`fixed w-12 h-12 lg:w-20 lg:h-20 top-4 xl:top-8 xl:left-10 group inline-flex 
                        items-center 
                        justify-center overflow-hidden rounded-full glass-strong z-[1000] 
                        ${showFloatingBtn ? '' : 'invisible'}`}>
                    <div className="group relative flex items-center gap-2">
                        <div className="flex flex-col items-end cursor-pointer gap-1 lg:gap-[7px]">
                            <div className={`lines sup-line ${visible ? 'active' : ''}`}></div>
                            <div className={`lines medium-line ${visible ? 'active' : ''}`}></div>
                            <div className={`lines inf-line ${visible ? 'active' : ''}`}></div>
                        </div>
                    </div>
                </button>
                
                {/* MENUCURTAIN COMPONENT */}
                {showFloatingBtn && (
                    <div className={`z-30 fixed top-2 left-6 base:left-8 lg:top-4 lg:left-6`}>
                        <MenuCurtain isMenuOpen={visible} />
                    </div>
                )}

                {/* FLOATING BUTTON TO GO TOP */}
                <button onClick={scrollToTop}
                    className={`hidden lg:inline-flex fixed p-5 right-10 bottom-20 group items-center 
                        justify-center overflow-hidden rounded-full glass-strong 
                        z-[1000] ${showFloatingBtn ? '' : 'invisible'}`}>
                    <div className="transition duration-300 group-hover:rotate-[360deg] text-indigo-900">
                        <HiArrowUp style={{ fontSize: '2.2rem' }} />
                    </div>
                </button>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 place-content-center xl:place-items-between 
                py-6 lg:py-12   relative">
                <article className="col-span-1 xl:col-start-1 row-start-1 w-[17rem] md:w-[22rem] 
                    base:w-[25rem] lg-sm:w-[30rem] lg-md:w-[32rem] lg:w-[35rem] lg-xl:w-[38rem] xl:w-[24rem] 
                    3xl:w-[32rem]
                    rounded-[20px] bg-indigo-500 overflow-hidden">
                    {/* ABOUT IMAGE */}
                    <img ref={imgRef}
                        src="/images/dental-studio.jpg"
                        alt="Dental Studio"
                        className='w-full h-full object-cover rounded-[20px]' />
                </article>

                <article className='col-span-1 xl:col-start-2 row-start-2 xl:row-start-1 mt-6 md:mt-10 lg:mt-8
                    relative'>
                    {/* ABOUT COPY */}
                    <div className="grid grid-cols-1">
                        <h2 className='text-left title-h2 col-span-1 whitespace-nowrap'>
                            Expert
                            <span className='app-title ml-2 text-left title-h2 col-span-1 whitespace-nowra'>
                               Care,<br />
                            </span>
                            
                            <span className='text-indigo-900 mr-2 whitespace-nowrap'>
                                Exceptional
                            </span>
                            <span className='app-title whitespace-nowrap' >
                                Results
                            </span>
                        </h2>
                        

                        <p className='text-p1 mt-6 lg:mt-8 col-span-1'>
                            We are a passionate team of dental clinicians committed to providing care for patients of all ages —
                            from the young to the young at heart.
                            <br /><br />
                            Since 2002, we have been blending advanced technology with a welcoming and friendly atmosphere to
                            offer outstanding dental services in Northern New Jersey.
                            <br /><br />
                            With cutting-edge equipment, we deliver exceptional dental care, ensuring your interests come first
                            for a healthier, brighter smile.
                            <br /><br />
                            Our state-of-the-art facility in Jersey City offers a welcoming environment.
                            Trust us for comprehensive dental care with a commitment to excellence.
                        </p>
                    </div>
                </article>
            </div>
            
        </section>
    );
};

export default About;
