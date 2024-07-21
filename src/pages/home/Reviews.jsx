import React, { useEffect, useState, useRef } from 'react';
import reviews from '../../data/reviewsData';
import ReviewsCarousel from '../../components/cards/ReviewsCarousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Reviews = () => {


    
    return (
        <section
            className='flex flex-col justify-center pt-16 relative bg-slate-300'>

            <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 2xl:px-24 3xl:px-40">
                
                <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6">               
                    <span 
                        className='inline-flex'
                    >
                        <TextShimmerEffect text={`(04) Reviews`}/>
                    </span>                         
                </div>               
            </div>

            <div className="flex flex-col items-center gap-8 relative">
                <h2 className='text-center text-indigo-900 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold
                    w-2/3 md:w-2/4 lg:w-[80%] pt-2 lg:pt-4' data-aos='fade-up'>
                    Your  
                    <span className='app-title' style={{ margin: ' 0 1rem' }}>
                        Opinion
                    </span>   
                    Matters
                </h2>

                <p className='text-p1 mt-2 w-3/4 2xl:w-[70%] '
                        data-aos="fade-up"
                    >
                    Radiant Dental Studio always appreciates feedback from our valued patients, helping us keep improving. <br/>
                    We're thrilled to have over 100 reviews with an average rating of 4.6 out of 5 stars. 
                    Please read what others are saying about us below. We would love to
                    <span >
                        <a href="#"
                            className='ml-1 font-[700] app-title relative after:absolute after:bottom-0 
                            after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 
                            after:bg-indigo-400 after:transition-transform after:duration-300 
                            after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                            hover:after:scale-x-100 '>
                            collect your feedback.
                        </a> 
                        
                    </span><br/>
                </p>
            </div>

            {/* Cards Render Dynamically acording to Responsive Size */}
            <div className="flex justify-center items-center" data-aos='zoom-in-up'>
                <ReviewsCarousel
                reviews={reviews}
                autoSlide={true}
                autoSlideInterval={6000}
                />

            </div>

            {/* <p className='font-cursive text-azure text-[4.5rem] absolute right-48 -bottom-32 transform
                -rotate-12 z-10'>
                Thank You!
            </p> */}
        </section>
    )
}

export default Reviews;
