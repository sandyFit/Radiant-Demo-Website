import React from 'react';

const ServiceCard = ({ service, index }) => (
    <div className='w-[80vw] h-[40vw]  3xl:w-[70vw] 3xl:h-[35vw] flex mb-36 sticky-element'>
        <div className="flex flex-col gap-6 ">
            <div className="flex justify-center items-center w-full py-3 glass rounded-2xl">
                <div className='w-full flex justify-between items-center px-6'>
                    <div className="flex items-center gap-3">
                        <div className="flex w-16 h-16 rounded-full bg-indigo-50 justify-center items-center">
                            <img src={service.iconSrc} alt={service.title} className='w-12 h-12' />
                        </div>
                        <h2 className='text-indigo-600 text-5xl font-[900] tracking-wider z-30'>
                            {service.title}
                        </h2>
                    </div>
                    <span className='app-title text-5xl font-[900] '>{`0${index + 1}.`}</span>
                </div>
            </div>

            <div className="flex justify-center items-center gap-6">
                <article className="relative w-[30%] h-full bg-indigo-300 rounded-[20px] overflow-hidden">
                    <img src={service.imgSrc} alt={service.alt} className="w-full h-full object-cover" />
                    {/* <div className="absolute inset-0 bg-[rgba(59,76,123,0.1)] "></div> */}
                </article>

                <article className='w-[70%] h-full glass-blue text-indigo-200 font-[400] rounded-[20px] p-12'>
                    <div className="flex flex-col">
                        <p className="text-xl font-[600]">
                            {service.description}
                        </p>
                        <ul className="grid grid-cols-1 list-disc gap-2">
                            {(service.categories || []).map((category, catIndex) => (
                                <li key={catIndex}>
                                    <div>
                                        <h4 className="text-lg font-[600]">
                                            {category.name}
                                        </h4>
                                        <p className="text-left text-[.9rem]">
                                            {category.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </div>
);

export default ServiceCard;
