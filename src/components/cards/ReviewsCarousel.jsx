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
        <div className='flex justify-center items-center w-full relative'>
            <div className="relative flex justify-center items-center w-full">
                <div className="absolute xl:right-[14.2rem] -bottom-6 lg-sm:-bottom-[2.2rem] lg-xl:-bottom-[3.3rem] 
                    xl:bottom-12 space-x-12 md:space-x-10 base:space-x-4 lg-sm:space-x-[4.58rem] lg:space-x-20 
                    lg-xl:space-x-[5.5rem] xl:space-x-4 z-20 py-0 flex">
                    <button aria-label='Previous'
                        className='w-28 md:w-40 base:w-48 lg-sm:w-56 lg:w-60 lg-xl:w-64 xl:w-36 h-10 lg-sm:h-12 
                            lg-xl:h-16 xl:h-20 bg-indigo-600 hover:bg-indigo-700 shadow-lg rounded-[10px] 
                            xl:rounded-xl text-indigo-100 text-3xl flex justify-center items-center'
                        onClick={goPrev}
                    >
                        ⋘
                    </button>
                    <button aria-label='Next'
                        className='w-28 md:w-40 base:w-48 lg-sm:w-56 lg:w-60 lg-xl:w-64 xl:w-36 h-10 lg-sm:h-12 
                            lg-xl:h-16 xl:h-20 bg-indigo-600 hover:bg-indigo-700 shadow-lg rounded-[10px] 
                            xl:rounded-xl text-indigo-100 text-3xl flex justify-center items-center'
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
        </div>
    );
};

export default ReviewsCarousel;
