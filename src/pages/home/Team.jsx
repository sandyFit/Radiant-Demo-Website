import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import bioData from '../../data/bioData';
import { renderDescription } from '../../utils/functions';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Team = () => {
    

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const workItems = document.querySelectorAll('.work__photo-item');

        workItems.forEach((item, index) => {
            item.style.zIndex = workItems.length - index;
        });

        gsap.set('.work__photo-item', {
            clipPath: 'inset(0% 0% 0% 0%)'
        });

        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: '.work',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        animation.to('.work__photo-item:not(:last-child)', {
            clipPath: 'inset(0% 0% 100% 0%)',
            stagger: 0.5,
            ease: 'none'
        });
    }, []);
   

    return (
        <section className="w-full h-auto flex flex-col justify-center pt-6 3xl-sm:pt-[8rem] pb-2 xl:pb-12 
            z-10 relative">
            <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 2xl:px-24 3xl:px-32">
               
                <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6">               
                    <span 
                        className='inline-flex'
                    >
                        <TextShimmerEffect text={`(03) Team`}/>
                    </span>                         
                </div>               
            </div>

            <h2 data-aos='fade-up'
                className='big-title text-center'>
                Meet Our 
                <span className='app-title ml-8'>Team</span>
            </h2>
            <div className="work flex">
                <div className="relative w-[56%] z-10">
                    <div className="m-auto w-[84%]">
                        {bioData.map((member, index) => (
                            <div key={index} className={`bio-${index} w-full h-[100vh] flex flex-col justify-center`}>
                                <div className="ml-16 relative w-full z-20">
                                    <h3 className="text-left text-indigo-900 text-2xl md:text-4xl xl:text-5xl 
                                        font-bold w-2/3 md:w-2/4 lg:w-[80%] pt-2 tracking-wider">
                                        {member.firstName}
                                        <span className="app-title ml-4">{member.lastName}</span>
                                    </h3>
                                    <p className="text-lg md:text-xl 2xl:text-xl text-indigo-900 mt-8 w-3/4 
                                        font-[500] 2xl:w-[80%]">
                                        {renderDescription(member.description)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[40%] h-auto">
                    <div className="flex flex-col justify-center sticky w-full h-screen top-0">
                        <div className="w-[35vw] h-[35vw] relative">
                            {bioData.map((member, index) => (
                                <div key={index} className={`work__photo-item work__photo-item-${index}`}>
                                    <img src={member.imageSrc} alt={member.altText} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
