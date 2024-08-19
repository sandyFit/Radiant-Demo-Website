import React, { useState, useEffect, useRef } from 'react'
import QuestionCard from '../../components/cards/QuestionCard';
import questions from '../../data/questions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Faqs = () => {
   
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggleAccordion = index => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    }

    gsap.registerPlugin(ScrollTrigger)

    const highHueRef = useRef(null);

    useEffect(() => {
        const animation = gsap.timeline({
            scrollTrigger: {
            trigger: '.hue-effect',
            start: 'center center', // Animation starts when the top of the element is at the center of the viewport
            toggleActions: 'play none none none', // Play the animation when triggered
            // markers: true
        }
        });

        animation.fromTo(highHueRef.current, 
        { x: '-100%', opacity: 0, color: '#2d3e5e' }, // Starting position and color
        { x: '0%', opacity: 1,  duration: 1, ease: 'power2.out' } // Ending position and animation duration
        );
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
            delay: .6,
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
        <section 
            className='relative h-auto pt-28 xl:pt-32 bg-slate-300 pb-24 xl:pb-36'>   
            
            <header className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 lg-xl:px-20 xl:px-24 2xl:px-32 3xl:px-40">              
                <div className="w-full flex justify-start items-center text-mayus-dark relative gap-6">               
                    <span 
                        className='inline-flex'>
                        <TextShimmerEffect text={`(05) Faqs`}/>
                    </span>                         
                </div>               
            </header>
            
            <div className="w-full flex flex-col justify-center items-center relative">

                <section className="w-full relative hue-effect flex flex-col justify-center items-center">
                    <h2 className='hidden xl:block text-center title-h2 lg:w-[80%] pt-2 lg:pt-4 ' >
                        Got Questions? 
                        <span className='app-title ml-0 xl:ml-4' >
                            We have Answers!
                        </span>                          
                    </h2>

                    <h2 className='block xl:hidden text-left title-h2 w-[85%] base:w-[80%] pt-2 lg:pt-4 ' >
                        Got Questions? <br/>
                        <span className='app-title ml-0' >
                            We have Answers!
                        </span>                          
                    </h2>

                     <p
                        className='text-left xl:text-center text-p1 mt-4 xl:mt-10 w-[85%] base:w-[80%] 2xl:w-[70%] '>
                        Find answers to commonly asked questions about dental care below.
                    </p>
                    {/* <h2 ref={highHueRef}
                        className='text-8xl font-[600] text-center mb-3 absolute top-0 left-[26rem] whitespace-nowrap'>
                        Got Questions?
                    </h2> */}
                </section>

                <section className="flex flex-col 2xl-sm:flex-row w-full justify-between px-6 md:px-8 base:px-12 
                    lg-sm:px-16 lg-xl:px-20 2xl-sm:px-24 2xl:px-32 3xl:px-40 pt-6 xl:pt-16 gap-4">
                    <figure className="hidden 2xl-sm:flex w-[85vw] h-[85vw] base:w-[80vw] base:h-[80vw] 
                        xl:w-[35vw] xl:h-[35vw] 
                        rounded-[10px] xl:rounded-xl bg-indigo-600 ">
                        <img ref={imgRef}
                            src="/people/asian-girl.jpg"
                            alt="A happy Asian girl displaying her beautiful smile following a dental procedure."
                            className='w-full h-full object-cover bg-center rounded-[10px] xl:rounded-xl'
                        />
                    </figure>

                    <div className="flex flex-col justify-start items-start ">
                        {questions.map((question, index) => (
                        <QuestionCard
                            key={index}
                            question={question.question}
                            answer={question.answer}
                            isOpen={index === openQuestionIndex}
                            onToggle={() => handleToggleAccordion(index)}
                        />
                        ))}
                    </div>
                </section>
            </div>
          
        </section>
    )
}

export default Faqs;
