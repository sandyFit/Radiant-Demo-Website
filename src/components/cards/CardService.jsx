import React from 'react';

const CardService = ({ service, index }) => {

    
    return (
        <article 
            className={`w-[80%] 3xl:w-[70%] rounded-[20px] px-10 py-6 sticky top-20 mb-16 
                ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-sky-400'}`}
        >
            <header className="flex justify-between">
                <div className="flex items-center gap-5 3xl:gap-10">
                    <figure className="flex w-12 h-12 3xl:w-16 3xl:h-16 rounded-full bg-indigo-50 
                        justify-center items-center">
                        <img 
                            src={service.iconSrc} alt={`${service.title} icon`}
                            className='w-8 h-8 3xl:w-12 3xl:h-12' />
                    </figure>
                    <h2 
                        className='title-cards z-30'>
                        {service.title}
                    </h2>
                </div>
                <span className='title-cards '>{`0${index + 1}.`}</span>
            </header>
            
            <section className="grid grid-cols-[repeat(12, minmax(5rem, 1fr))] grid-rows-[repeat(10, minmax(5rem, 1fr))]
                gap-2 mt-8">
                <figure className='col-span-4 col-start-1 col-end-5 row-span-5 h-[28rem] relative  
                bg-indigo-300 rounded-[20px] overflow-hidden  '>
                    <img src={service.imgSrc} alt={service.alt} className="w-full h-full object-cover" />
                </figure>

                <section className={`col-span-6 col-start-6 h-[28rem] text-indigo-200 font-[400] rounded-[20px] p-10
                    ${index % 2 === 0 ? 'bg-indigo-700' : 'bg-sky-600'}`}>
                    <div className={`flex flex-col ${index === 0 ? 'gap-3' : 'gap-5'}`}>
                        <p className="title-sm">
                            {service.description}
                        </p>
                        <ul className="grid grid-cols-1 list-disc gap-2">
                            {(service.categories || []).map((category, catIndex) => (
                                <li key={catIndex}>
                                    <div>
                                        <h4 className="title-sm">
                                            {category.name}
                                        </h4>
                                        <p className="text-left xl-xl:text-[.8rem] 3xl:text-[.9rem]">
                                            {category.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </section>
            
        </article>
    );
};

export default CardService;
