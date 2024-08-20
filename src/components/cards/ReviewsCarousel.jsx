import React, { useCallback, useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';


const ReviewsCarousel = ({ reviews }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, [reviews.length]);

    const goPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const renderCards = () => {
        const review = reviews[activeIndex];
        if (review) {
            return <ReviewsCard key={activeIndex} {...review} />;
        }
        return null;
    };

    return (
        <article className='flex justify-center items-center w-full relative'>
            <div className="relative flex justify-center items-center w-full">
                <div className="absolute xl-sm:right-[4.6rem] xl-md:right-20 xl:right-[5.4rem] 
                    xl-xl:right-[6.2rem] xl-2xl:right-[6.5rem] xl-3xl:right-[7rem] 2xl-md:right-[8.6rem]
                    2xl-lg:right-[8.8rem] 2xl:right-[9.4rem] 2xl-xl:right-[9rem] 3xl-sm:right-[10.5rem] 
                    3xl-md:right-[12rem] 3xl:right-[14.2rem] -bottom-6 
                    lg-sm:-bottom-[2.2rem] lg-xl:-bottom-[3.3rem] xl-sm:bottom-6 xl:bottom-12 
                    space-x-12 md:space-x-10 base:space-x-4 lg-sm:space-x-[4.58rem] lg:space-x-20
                    lg-xl:space-x-[5.5rem] xl-sm:space-x-4 xl-md:space-x-8 xl:space-x-3 2xl-lg:space-x-6 z-20
                    py-0 flex">
                    <button aria-label='Previous'
                        className='w-28 md:w-40 base:w-48 lg-sm:w-56 lg:w-60 lg-xl:w-64 xl-sm:w-36 xl:w-[10.9rem]
                            xl-xl:w-[13.2rem] xl-2xl:w-[6.74rem] xl-3xl:w-[7.72rem] 2xl-sm:w-[7.88rem] 
                            2xl-lg:w-[8.1rem] 2xl:w-[8.5rem] 2xl-xl:w-[8.88rem]
                            h-10 lg-sm:h-12 lg-xl:h-16 xl-sm:h-12 xl:h-12 xl-2xl:h-16 2xl-lg:h-20 bg-indigo-600 
                            hover:bg-indigo-700 shadow-lg rounded-[10px] 2xl:rounded-xl text-indigo-100 
                            text-3xl flex justify-center items-center'
                        onClick={goPrev}
                    >
                        ⋘
                    </button>
                    <button aria-label='Next'
                        className='w-28 md:w-40 base:w-48 lg-sm:w-56 lg:w-60 lg-xl:w-64 xl-sm:w-36 xl:w-[10.9rem]
                            xl-xl:w-[13.2rem] xl-2xl:w-[6.74rem] xl-3xl:w-[7.72rem] 2xl-sm:w-[7.88rem] 
                            2xl-lg:w-[8.1rem] 2xl:w-[8.5rem] 2xl-xl:w-[8.88rem] h-10 lg-sm:h-12 lg-xl:h-16 xl-sm:h-12 
                            xl:h-12 xl-2xl:h-16 2xl-lg:h-20 bg-indigo-600 
                            hover:bg-indigo-700 shadow-lg rounded-[10px] 2xl:rounded-xl text-indigo-100 
                            text-3xl flex justify-center items-center'
                        onClick={goNext}
                    >
                        ⋙
                    </button>
                </div>
                <div className='relative overflow-hidden w-auto'>
                    <div className='flex justify-center items-center gap-6 my-6 xl:my-12'>
                        {renderCards()}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ReviewsCarousel;
