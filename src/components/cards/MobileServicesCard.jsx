import React from 'react'

const MobileServicesCard = ({ service, index }) => {
    return (
        <section
            className='w-[86vw] md:w-[76%] base:w-[80%] h-[80rem] base:h-[90%] flex mb-[1rem] sticky-element'
            aria-labelledby={`service-title-${index}`} // Associate the section with the title
        >
            <div className="w-full flex flex-col gap-6">
                <div className="flex justify-center items-center w-full py-3 glass-strong rounded-2xl">
                    <div className='w-full flex justify-between items-center'>
                        <div className="flex title-h3 items-center gap-1 lg-sm:gap-4 whitespace-nowrap px-2">
                            <span className='app-title font-[900]'>{`0${index + 1}.`}</span>
                            <h2
                                id={`service-title-${index}`} // Unique ID for each service title
                                className='z-30'
                            >
                                {service.title}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <article
                        className='w-full h-full glass-blue text-indigo-200 font-[400] rounded-[20px] p-6 lg-sm:p-10 py-2 md:py-8 base:pb-16'
                        aria-labelledby={`service-title-${index}`} // Associate the article with the title
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-[1rem] lg:text-xl mb-3 font-[600]">
                                {service.description}
                            </p>
                            <ul className="grid grid-cols-1 list-disc gap-2">
                                {(service.categories || []).map((category, catIndex) => (
                                    <li key={catIndex}>
                                        <div>
                                            <h4 className="text-[1rem] font-[600]">
                                                {category.name}
                                            </h4>
                                            <p className="text-left text-[.8rem]">
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
        </section>
    );
};

export default MobileServicesCard;
