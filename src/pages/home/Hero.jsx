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
                    delay: 1.8,
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

            <header className="w-full grid grid-cols-1 lg:grid-cols-2 place-self-center
                place-items-center px-4 2xl:px-40">
                {/* First section - Text content */}
                <section className="col-span-1 w-full mt-4 lg:mt-40 gap-6 order-2 lg:order-1">
                    <h1 className='title-h1 w-[90%] hero__titles'>
                        <span>Reveal Your Brightest Smile </span>
                    </h1>

                    <p className='text-p1 w-[90%] pb-[-2rem] hero__caption'>
                        Let us take care of your teeth. Our dedicated team of professionals is committed to
                        providing you with first-class dental care.
                    </p>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-6 place-items-center hero__btn">
                        <div className="col-span-1 lg:col-span-3 w-full flex justify-center items-center 
                            btn-book-online h-[4rem] px-6 
                            text-[1.5rem] z-[40]">
                            <Button text={'book online'}
                                aria={'Click to book online'}
                                onClick={handleClick}
                            />
                        </div>
                        <div className="col-span-3 hidden lg:grid grid-cols-3 place-items-center w-full 
                            mr-6 ">
                            <div className="hidden lg:grid col-span-1 mr-[-1vw]">
                                <img src="/icons/google.png" alt="Google logo"
                                    className='w-[4rem]' />
                            </div>
                            <div className="col-span-1 grid grid-cols-1 place-content-center text-azure">
                                <p className='text-[1.2rem] font-semibold leading-[28px]'>100 +</p>
                                <div className=''>
                                    <span className='flex font-bold'>
                                        {[...Array(5)].map((_, index) => (
                                            <HiStar key={index}
                                                className='text-[1rem]'
                                                aria-label="star rating" />
                                        ))}
                                    </span>
                                </div>
                                <p className='hidden lg:inline-flex text-[.9rem] 
                                    font-[500] text-indigo-900 whitespace-nowrap'>
                                    Verified Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second section - Image */}
                <section className='lg:col-start-2 row-start-auto mt-28 lg:mt-40
                    grid place-self-center order-1 lg:order-2'>
                    <figure className="w-[90vw] lg:w-[38vw] h-[90vw] lg:h-[38vw] 
                        rounded-3xl bg-indigo-500">
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
