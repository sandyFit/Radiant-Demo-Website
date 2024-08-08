import React, { useEffect, useRef } from 'react';
import { renderDescription } from '../../utils/functions';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReviewsCard = ({ name, srcImg, review, triggerOnScroll = true }) => {
    const imgRef = useRef(null);
    const starsRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        gsap.fromTo(img, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);

    useEffect(() => {
        if (!starsRef.current) return;

        const stars = starsRef.current.querySelectorAll(".star");

        if (stars.length > 0) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: starsRef.current,
                    start: "top 100%",
                    end: "bottom bottom",
                    toggleActions: "play none none none",  // Only play the animation once when the trigger enters the viewport
                    once: true,  // Ensures the trigger will not contribute to any ScrollTrigger related callbacks after it's triggered once
                }
            });

            stars.forEach((star, index) => {
                timeline.fromTo(star, {
                    opacity: 0.3,
                    scale: 0.8,
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });
        }
    }, [triggerOnScroll]);

    return (
        <section className='flex justify-center items-center w-full relative'>
            <div className="flex flex-col xl-sm:flex-row justify-center items-center xl-sm:items-start 
                2xl:items-center gap-2 md:gap-3 2xl:gap-6">
                <article className="grid grid-cols-1 place-items-center gap-2 md:gap-3 xl-2xl:gap-4 2xl:gap-6">
                    <div className='w-[85vw] h-[85vw] base:w-[80vw] base:h-[80vw] xl-sm:w-[20.8rem] 
                        xl-sm:h-[20.8rem] xl-md:w-[22rem] xl-md:h-[22rem] xl-2xl:w-[20.8rem] 
                        xl-2xl:h-[20.8rem] rounded-xl bg-indigo-600 shadow-lg overflow-hidden'>
                        <img
                            ref={imgRef}
                            src={srcImg}
                            alt={`Our patient ${name}`}
                            className='w-full h-full object-cover rounded-[10px] xl:rounded-xl'
                        />
                    </div>

                    <div className="flex flex-col w-[85vw] base:w-[80vw] xl-sm:w-[20.8rem] xl-md:w-[22rem] 
                        xl-2xl:w-[20.8rem] h-10 xl-2xl:h-16 2xl:h-20 
                        bg-indigo-600 shadow-lg rounded-[10px] 2xl:rounded-xl justify-center items-center">
                        <h4 className='text-indigo-200 title-h5 '>
                            {name}
                        </h4>
                    </div>

                    <div className='hidden xl-sm:flex xl-2xl:hidden w-[20.8rem] xl-md:w-[22rem] h-12 glass 
                        justify-center items-center rounded-xl'>
                        <span className='flex text-indigo-500' ref={starsRef}>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index}
                                    style={{ fontSize: '2.6rem' }}
                                    aria-label="Star rating"
                                    className="star" />
                            ))}
                        </span>
                    </div>
                </article>

                <article className="grid grid-cols-1 xl-2xl:gap-4 2xl:gap-6">
                    <div className="w-[85vw] h-[15.4rem] base:w-[80vw] base:h-[18rem] lg-sm:h-[14rem] lg-xl:h-[12rem]
                        xl-sm:w-[19rem] xl-sm:h-[24rem] xl-md:w-[20rem] xl-md:h-[25.2rem] xl:w-[22.6rem]
                        xl:h-[25.28rem] xl-xl:w-[27.2rem] xl-2xl:w-[31rem] xl-3xl:w-[33rem] 2xl:w-[44rem] 
                        xl-2xl:h-[20.8rem] bg-indigo-600 relative hover:bg-indigo-700 rounded-[10px] 
                        2xl:rounded-xl text-indigo-200 px-4 2xl:px-16 shadow-lg ">
                        <span className="hidden xl-md:block text-[10rem] 2xl:text-[12rem] absolute 
                            xl-md:bottom-[12.8rem] xl:bottom-[10.6rem] xl-2xl:bottom-[7.8rem] 2xl:bottom-[4.5rem]
                            xl-md:left-6 2xl:left-16">
                            ”
                        </span>
                        <p className="text-p2 mt-6 xl-md:mt-[4.2rem] xl-xl:mt-[8rem] xl:mt-[6.6rem] 
                            xl-2xl:mt-[5rem] 2xl:mt-[6.6rem] px-3">
                            {renderDescription(review)}
                        </p>
                    </div>

                    <div className='hidden xl-2xl:flex w-[16rem] 2xl:w-[23.4rem] h-16 2xl:h-20 glass justify-center items-center rounded-xl'>
                        <span className='flex text-indigo-500' ref={starsRef}>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index}
                                    aria-label="Star rating"
                                    className="star text-[2.8rem] 2xl:text-[3.6rem]" />
                            ))}
                        </span>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ReviewsCard;
