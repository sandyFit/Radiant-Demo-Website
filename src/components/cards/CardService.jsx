import React from 'react';

const CardService = ({ service, index }) => {
    return (
        <section 
            className={`w-[70%] rounded-[20px] px-10 py-6 sticky-element mb-16
                ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-sky-400'}`}

        >
            <div className="flex justify-between">
                <div className="flex items-center gap-10">
                    <figure className="flex w-16 h-16 rounded-full bg-indigo-50 justify-center items-center">
                        <img src={service.iconSrc} alt={service.title} className='w-12 h-12' />
                    </figure>
                    <h2 className='title-cards z-30'>
                        {service.title}
                    </h2>
                </div>
                <span className='title-cards '>{`0${index + 1}.`}</span>
            </div>
            
            <div className="grid grid-cols-[repeat(12, minmax(5rem, 1fr))] grid-rows-[repeat(10, minmax(5rem, 1fr))]
                gap-2 mt-8">
                <figure className='col-span-4 col-start-1 col-end-5 row-span-5 h-[28rem] relative  
                bg-indigo-300 rounded-[20px] overflow-hidden  '>
                    <img src={service.imgSrc} alt={service.title} className="w-full h-full object-cover" />
                </figure>

                <article className={`col-span-6 col-start-6 h-[28rem] text-indigo-200 font-[400] rounded-[20px] p-10
                    ${index % 2 === 0 ? 'bg-indigo-700' : 'bg-sky-600'}`}>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl mb-3 font-[600]">
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
            
        </section>
    );
};

export default CardService;
