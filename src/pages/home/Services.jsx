import React, { useRef, useState, useEffect } from 'react';
import services from '../../data/services';
import ServicesDashboard from '../../components/cards/ServicesDashboard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        console.log('Opening modal with service:', service);

        if (service) {
            const fullServiceData = services.find(s => s.title === service.title);
            if (fullServiceData) {
                setSelectedService(fullServiceData);
            } else {
                setSelectedService(service);
            }
            setIsModalOpen(true);
        }
    };

    

    return (
        <section id='services'
            className='w-full rounded-b-[30px] pt-16 3xl-sm:pt-[8rem] bg-slate-300'>
            <div className="w-full flex justify-start items-center text-mayus-dark mb-20 
                px-6 md:px-8 base:px-12 lg-sm:px-16 2xl:px-24 3xl:px-32 relative gap-6">
                <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6">               
                <span 
                    className='inline-flex'
                >
                    <TextShimmerEffect text={`(02) Services`}/>
                </span>                         
            </div>            
            </div>

            <div className="flex justify-center mt-6 3xl:mt-16 ">
                <div className="flex flex-col items-center gap-8 relative">
                    <h2
                        className='text-left xl:text-center title-h2 w-[80%] xl:w-[65%] 3xl:w-[50%]
                         pt-2 tracking-wider'
                        data-aos="fade-up"
                    >
                        Expert
                        <span className='app-title mx-4'>Dental Care</span>
                        for Beauty and Well-being
                    </h2>                    

                    <p
                        className='text-p1 mt-[-.6rem] w-[80%] 2xl:w-[70%] z-20'
                        data-aos="fade-up"
                    >
                        Experience top-quality dental care that enhances the beauty and longevity of your smile.
                        Our expert team prioritizes both aesthetics and well-being, ensuring comprehensive services
                        that make you look and feel your best.
                    </p>

                    <div className="flex justify-center relative mt-6">
                        <ServicesDashboard />
                    </div>                   
                </div>
            </div>
        </section>
    );
};

export default Services;
