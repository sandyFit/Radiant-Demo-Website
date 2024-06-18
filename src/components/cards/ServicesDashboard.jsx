import React from 'react';
import servicesCardData from '../../data/servicesCardData';
import ServiceCard from '../cards/ServicesCard';

const ServicesDashboard = () => {
    if (!servicesCardData || !Array.isArray(servicesCardData)) {
        console.error("servicesCardData is undefined or not an array");
        return null;
    }

    return (
        <div className='flex flex-col items-center relative'>
            {servicesCardData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    );
};

export default ServicesDashboard;

