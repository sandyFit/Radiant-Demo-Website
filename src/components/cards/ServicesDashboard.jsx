import React, { useEffect, useState } from 'react';
import servicesCardData from '../../data/servicesCardData';
import ServiceCard from '../cards/ServicesCard';
import MobileServicesCard from './MobileServicesCard';

const ServicesDashboard = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 950);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!servicesCardData || !Array.isArray(servicesCardData)) {
        console.error("servicesCardData is undefined or not an array");
        return null;
    }

    return (
        <div className='flex flex-col justify-center items-center w-full relative'>
            {isMobile ? (
                servicesCardData.map((service, index) => (
                    <MobileServicesCard key={index} service={service} index={index} />
                ))
            ) : (
                servicesCardData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))
            )}
        </div>
    );
};

export default ServicesDashboard;
