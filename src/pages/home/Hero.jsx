import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import Button from '../../components/buttons/Button';


const Hero = ({ onIntroComplete }) => {
    const navigate = useNavigate();
    const imgRef = useRef(null); 

    const handleClick = () => {
        console.log('clicked');
        navigate('book');
    };

    useEffect(() => {
        const master = gsap.timeline();
        const heroTitles = [...document.querySelectorAll('.hero__titles')]; // Corrected selector
        const heroCaption = document.querySelector('.hero__caption'); // Corrected selector
        const heroBtn = document.querySelector('.hero__btn');

        const setInitialState = () => {
            gsap.set(heroBtn, {
                y: 100,
                autoAlpha: 0
            });

            gsap.set([heroTitles, heroCaption], { // Spread operator to include both titles and caption
                yPercent: 100,
                autoAlpha: 0
            });
        };

        const uiAnimation = () => {
            const tl = gsap.timeline({
                defaults: {
                    delay: 2,
                    duration: .8,
                    ease: 'power3.out'
                }
            });

            tl.to(heroTitles, { // First animate titles
                yPercent: 0,
                autoAlpha: 1,
                stagger: 0.1 // Optional: add stagger to make the animation smoother
            }, 0) // Start immediately

            .to(heroCaption, { // Then animate the caption
                yPercent: 0,
                autoAlpha: 1
            }, .3) // Start slightly before the titles animation ends

            .to(heroBtn, {
                y: 10,
                autoAlpha: 1
            }, .2);

            return tl;
        };

        const animateImage = () => {
            const image = imgRef.current;
            if (image) {
                gsap.fromTo(image, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    opacity: 0,
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    delay: 1.5,
                    opacity: 1,
                    duration: 3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%",
                        end: "bottom 80%",
                        once: true, 
                    },
                });
            }
        };

        master
            .add(setInitialState())
            .add(uiAnimation(), '<')
            .add(animateImage(), '<') 
            .add(() => onIntroComplete && onIntroComplete());

    }, []);

    return (
        <section id='index' className='w-full min-h-screen bg-slate-300'>
            {/* <Intro/> */}
            <header className="w-full grid grid-cols-1 xl-lg:grid-cols-2 place-self-center place-items-center
                px-2 base:px-8 xl:px-10 xl-lg:px-16 2xl:px-32 3xl:px-40 xl-lg:pt-10 xl-2xl:pt-0">
                <section className="col-span-1 col-start-1 grid w-[90%] lg-xl:w-[86%] 2xl:w-full mt-8 
                    xl-lg:mt-40 gap-6">
                    <h1 className='title-h1 w-full hero__titles'>
                        <span>Reveal
                            <span className='app-title' style={{ margin: '0 1rem' }}>
                                Your Brightest
                            </span>
                        </span>
                        Smile
                    </h1>

                    <p className='text-p1 w-[96%] md:w-full 2xl:w-[90%] pb-[-2rem] hero__caption'>
                        
                            Let us take care of your teeth. Our dedicated team of professionals is committed to
                            providing you with first-class dental care.
                        
                    </p>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-6 place-items-center 
                        2xl:place-items-end hero__btn">
                        <div className="col-span-3 w-full flex justify-center items-center btn-book-online 
                            h-12 md:h-[3.6rem] base:h-[3.8rem] lg:h-[4rem] px-8 md:px-10 base:px-6 text-[1rem] 
                            md:text-[1.3rem] base:text-[1.38rem] lg:text-[1.4rem] xl:text-[1.2rem] 
                            3xl:text-[1.5rem] z-[40]">
                            <Button text={'book online'}
                                aria={'Click to book online'}
                                onClick={handleClick}
                            />
                        </div>
                        <div className="col-span-2 2xl:col-span-3 hidden lg:grid grid-cols-3 place-items-center w-full 
                            2xl:w-[85%] ml-0 lg:ml-[3vw] mr-0 2xl:mr-6 ">
                            <div className="hidden lg:grid col-span-1 mr-0 lg:mr-[-1vw] xl:mr-[.2vw] 2xl:mr-[-1vw]">
                                <img src="/icons/google.png" alt="Google logo"
                                    className='w-[2.6rem] lg:w-[3.8rem] 2xl:w-[4rem]' />
                            </div>
                            <div className="col-span-1 grid grid-cols-1 place-content-center text-azure">
                                <p className='text-[1.2rem] font-semibold leading-[28px]'>100 +</p>
                                <div className=''>
                                    <span className='flex font-bold'>
                                        {[...Array(5)].map((_, index) => (
                                            <HiStar key={index} className='text-[1rem]' aria-label="star rating"/>
                                        ))}
                                    </span>
                                </div>
                                <p className='hidden lg:inline-flex text-[.9rem] xl:text-[.8rem] 2xl:text-[.9rem] 
                                    font-[500] text-indigo-900 whitespace-nowrap'>
                                    Verified Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='xl-lg:col-start-2 row-start-1 xl-lg:row-start-auto mt-36 xl-lg:mt-44 3xl:mt-40
                    grid place-self-center ml-0 3xl:ml-[2.5rem]'>
                    <figure className="w-[85vw] h-[85vw]  md:w-[22rem] md:h-[22rem] base:w-[25rem] base:h-[25rem] 
                        lg-sm:w-[30rem] lg-sm:h-[30rem] lg-md:w-[32rem] lg-md:h-[32rem] lg:w-[78vw] lg:h-[78vw] 
                        xl:w-[78vw] xl:h-[78vw] xl-lg:w-[38vw] xl-lg:h-[42vw]  2xl:w-[38vw] 2xl:h-[38vw] 
                        rounded-3xl  bg-indigo-500">
                        <img ref={imgRef}
                            src="/people/black-girl.jpg"
                            alt="An African-American girl smiling brightly after a dental check-up."
                            className='w-full h-full object-cover rounded-3xl'
                        />
                    </figure>
                </section>
            </header>
        </section>
    )
}

export default Hero;
