import React, { useEffect, useState, useRef } from 'react';
import reviews from '../../data/reviewsData';
import ReviewsCarousel from '../../components/cards/ReviewsCarousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Reviews = () => {


    
    return (
        <section className='flex flex-col justify-center pt-6 relative bg-slate-300'>

            <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6
                px-6 md:px-8 base:px-12 lg-sm:px-16 2xl:px-24 3xl:px-32">
                
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

                <p className='text-p1 mt-2 w-3/4 
                        2xl:w-[70%] z-20'
                        data-aos="fade-up"
                    >
                    Radiant Dental Studio always appreciates feedback from our valued patients, helping us keep improving. <br/>
                    We're thrilled to have over 100 reviews with an average rating of 4.6 out of 5 stars. 
                    Please read what others are saying about us below. We would love to
                    <span className='border-b-2 border-indigo-900 hover:border-indigo-200' style={{ margin: ' 0 .6rem' }}>
                        <a href="#" className='hover:text-indigo-200'>collect your feedback.</a> 
                        
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
