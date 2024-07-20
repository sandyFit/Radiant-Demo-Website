import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Button from '../../components/buttons/Button';

const Hero = () => {
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
            className='w-full min-h-screen bg-slate-300'>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 place-content-center place-items-center 
                px-2 base:px-8 xl:px-10 2xl:px-24 3xl:px-32 ml-0 2xl:ml-2 3xl:ml-0">
                <article className="col-span-1 col-start-1 grid w-[90%] xl:w-[90%] 2xl:w-full mt-8 xl:mt-40 gap-6">
                    <h1 className='title-h1 w-full'>
                        <span>Reveal
                            <span className='app-title' style={{ margin: '0 1rem' }}>
                                Your Brightest
                            </span>
                        </span>
                        Smile
                    </h1>

                    <p className='text-p1 w-[96%] md:w-full 2xl:w-[90%]'>
                        Let us take care of your teeth. Our dedicated team of professionals is committed to providing you
                        with first-class dental care.
                    </p>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-6 place-items-center 
                        2xl:place-items-end ">
                        <div className="col-span-3 w-full flex justify-center items-center btn-book-online 
                            h-12 md:h-[3.6rem] base:h-[3.8rem] lg:h-[4rem] px-8 md:px-10 base:px-6 text-[1rem] 
                            md:text-[1.3rem] base:text-[1.38rem] lg:text-[1.4rem] xl:text-[1.2rem] 2xl:text-[1.5rem]
                            z-[40]">
                            <Button text={'book online'} />
                        </div>
                        <div className="col-span-2 2xl:col-span-3 hidden lg:grid grid-cols-3 place-items-center w-full 
                            2xl:w-[85%] ml-0 lg:ml-[3vw] mr-0 2xl:mr-6">
                            <div className="hidden lg:grid col-span-1 mr-0 lg:mr-[-1vw] xl:mr-[.2vw] 2xl:mr-[-1vw]">
                                <img src="/icons/google.png" alt="Google logo"
                                    className='w-[2.6rem] lg:w-[3.8rem] 2xl:w-[4rem]' />
                            </div>
                            <div className="col-span-1 grid grid-cols-1 place-content-center text-azure">
                                <p className='text-[1.2rem] font-semibold leading-[28px]'>100 +</p>
                                <div className=''>
                                    <span className='flex font-bold'>
                                        {[...Array(5)].map((_, index) => (
                                            <HiStar key={index} className='text-[1rem]' />
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
                </article>

                <article className='xl:col-start-2 row-start-1 xl:row-start-auto mt-36 xl:mt-44 3xl:mt-36
                    grid place-self-center ml-0 3xl:ml-[2.5rem]'>
                    <div className="w-[85vw] h-[85vw]  md:w-[22rem] md:h-[22rem] base:w-[25rem] base:h-[25rem] 
                        lg-sm:w-[30rem] lg-sm:h-[30rem] lg-md:w-[32rem] lg-md:h-[32rem] lg:w-[78vw] lg:h-[78vw] xl:w-[40vw] xl:h-[40vw] 2xl:w-[38vw] 3xl:w-[40vw]
                        rounded-3xl  bg-indigo-500">
                        <img ref={imgRef}
                        src="/people/black-girl.jpg"
                        alt="beautiful smiley black girl"
                        className='w-full h-full object-cover rounded-3xl'
                    />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Hero;
