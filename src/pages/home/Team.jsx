import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bioData from '../../data/bioData';
import { renderDescription } from '../../utils/functions';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import TeamMobile from '../../components/cards/TeamMobile';

const Team = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 950);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
        <section id='staff'
            className="w-full h-auto flex flex-col justify-center pt-20 3xl-sm:pt-[8rem] pb-2 xl:pb-12 
            bg-slate-300 z-10 relative">
            <header className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 lg-xl:px-20 xl:px-24 2xl:px-32 3xl:px-40">
               
                <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0
                    relative gap-6">               
                    <span 
                        className='inline-flex'
                    >
                        <TextShimmerEffect text={`(03) Staff`}/>
                    </span>                         
                </div>               
            </header>

            {isMobile ? (
                <TeamMobile bioData={bioData} renderDescription={renderDescription} />
            ) : (
                <section>
                    <h2 data-aos='fade-up' className='big-title text-center'>
                        Meet Our Team
                    </h2>

                    <div className="w-full work flex xl-xl:mt-[-5rem] 2xl:mt-0 2xl:pl-6">
                        <div className="relative w-[50%] 3xl:w-[54%] z-10">
                            <div className="m-auto w-[85%] 3xl:w-[75%]">
                                {bioData.map((member, index) => (
                                    <div key={index} className={`bio-${index} w-full h-[100vh] flex flex-col 
                                        justify-center`}>
                                        <div className="ml-16 relative w-full z-20">
                                            <h3 className="text-left text-indigo-900 title-medium lg:w-[80%] 3xl:pt-2">
                                                {member.name}
                                                
                                            </h3>
                                            <p className="text-p1 mt-8 w-3/4 2xl:w-[80%]">
                                                {renderDescription(member.description)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-[36%] h-auto">
                            <div className="flex flex-col justify-center sticky w-full h-screen top-0">
                                <div className="w-[40vw] h-[40vw] 2xl:w-[35vw] 2xl:h-[35vw] relative">
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
            )}
        </section>
    );
};

export default Team;
