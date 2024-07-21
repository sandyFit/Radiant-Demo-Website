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
                    start: "top 90%",
                    end: "bottom 10%",
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
                    // delay: index * 0.05,
                    ease: "power2.out",
                });
            });
        }
    }, [triggerOnScroll]);

    return (
        <section className='flex justify-center items-center w-full relative'>
            <div className="flex justify-center items-center gap-6">
                <article className="grid grid-cols-1 gap-6">
                    <div className='w-[20.8rem] h-[20.8rem] rounded-xl bg-indigo-600 shadow-lg overflow-hidden'>
                        <img
                            ref={imgRef}
                            src={srcImg}
                            alt={`${name} avatar`}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </div>

                    <div className="flex flex-col w-[20.8rem] h-20 bg-indigo-600 shadow-lg rounded-xl justify-center items-center">
                        <h4 className='text-indigo-200 text-[1.6rem] font-[500]'>
                            {name}
                        </h4>
                    </div>
                </article>

                <article className="grid grid-cols-1 gap-6">
                    <div className="w-[44rem] h-[20.8rem] bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-indigo-200 px-16 shadow-lg relative">
                        <span className="text-[12rem] absolute bottom-16 left-16">”</span>
                        <p className="text-[1.08rem] font-normal mt-[8rem] m-0 p-0">
                            {renderDescription(review)}
                        </p>
                    </div>

                    <div className='flex w-[23.4rem] h-20 glass justify-center items-center rounded-xl'>
                        <span className='flex text-indigo-500' ref={starsRef}>
                            {[...Array(5)].map((_, index) => (
                                <HiStar key={index} style={{ fontSize: '3.6rem' }} className="star" />
                            ))}
                        </span>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ReviewsCard;
