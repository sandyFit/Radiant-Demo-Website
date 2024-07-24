import React from 'react'

const CardServiceMobile = ({ service, index }) => {
   return (
        <section 
           className={`grid grid-cols-1 w-[86%] h-[98%] md:w-[85%] base:w-[82%] base:h-[90%] mb-8 pb-10
                rounded-lg sticky top-12 ${index % 2 === 0 ? 'bg-indigo-600' : 'bg-sky-600'}`}

        >
           <div className="flex pt-12 pl-8">      
               <span className='title-cards mr-2'>{`0${index + 1}.`}</span>
                <h2 className='title-cards z-30'>
                    {service.title}
                </h2>
                
            </div>
            
            <div className="grid grid-cols-1 gap-3 p-2 md:p-5">
                <article className={` text-indigo-200 font-[400] rounded-[10px] px-6
                    `}>
                    <div className="flex flex-col ">
                        <p className="title-sm mb-3 font-[600]">
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
            
        </section>
    );
}

export default CardServiceMobile