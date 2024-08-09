import React, { useState, useEffect } from 'react';
import services from '../../data/services';
import ServicesDashboard from '../../components/cards/ServicesDashboard';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import AOS from 'aos';

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

    useEffect(() => {
        AOS.refresh();
    }, [selectedService]);

    return (
        <section
            className='w-full pt-20 xl-2xl:pt-32 2xl-sm:pt-40 3xl-sm:pt-[8rem] bg-slate-300'>
            <div className="w-full flex justify-start items-center text-mayus-dark mb-20 2xl:mb-2 
                px-6 md:px-8 base:px-12 lg-sm:px-16 lg-xl:px-20 xl:px-24 2xl:px-32 3xl:px-40 relative gap-6">
                <div className="w-full flex justify-start items-center text-mayus-dark mb-4 lg:mb-0 relative gap-6">               
                <span 
                    className='inline-flex'
                >
                    <TextShimmerEffect text={`(02) Services`}/>
                </span>                         
            </div>            
            </div>

            <div className="flex justify-center mt-[-5rem] 2xl:mt-4 3xl:mt-6 ">
                <div className="flex flex-col  justify-start items-center gap-8 relative">
                    <h2
                        className='hidden xl:block text-left xl:text-center title-h2 w-[80%] xl:w-full
                            2xl-md:w-[60%] pt-2 tracking-wider'
                        data-aos="fade-up"
                    >
                        World-Class
                        <span className='app-title mx-4'>Services</span>
                        with the 
                        <span className='app-title mx-4'>Highest</span>
                        Standards
                    </h2>  
                    
                    <h2
                        className='block xl:hidden text-left title-h2 w-[80%] md:w-[85%] base:w-[82%] lg-xl:w-[80%]
                            whitespace-nowrap
                            pt-2 tracking-wider' >
                        World-Class<br/>
                        <span className='app-title mr-2 whitespace-nowrap'>Services</span>
                        with the <br/>
                        <span className='app-title mr-2'>Highest</span>
                        Standards
                    </h2>                    

                    <p className='text-p1 mt-[-.6rem] w-[80%] md:w-[85%] base:w-[82%] lg-xl:w-[80%] 3xl:w-[70%]'>
                        Providing high-quality dental care in a comfortable and relaxed environment is one of our top priorities.
                        Our expert team prioritizes both aesthetics and well-being, ensuring top-quality services
                        that make you look and feel your best.
                    </p>

                    <div className="flex justify-center relative mt-1 xl:mt-6" >
                        <ServicesDashboard />
                    </div>                   
                </div>
            </div>
        </section>
    );
};

export default Services;
