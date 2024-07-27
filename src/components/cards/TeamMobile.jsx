import React from 'react'

const TeamMobile = ({ bioData, renderDescription }) => {
    return (
        <article>
            
            <div className="h-[280rem] md:h-[324rem] w-[86%] md:w-[85%] base:w-[82%] base:h-[90%] lg-sm:w-[80%] 
                ml-6 md:ml-8 base:ml-12 lg-sm:ml-16 lg-xl:ml-20 xl:ml-24">
                <h2 data-aos='fade-up' className='hidden xl-sm:block big-title text-left'>
                        Meet Our <span className='app-title '>Team</span>
                    </h2>
                <div className="w-full flex items-center"> 
                    <div className="grid grid-cols-1 xl-sm:grid-cols-2 w-full gap-8 xl-sm:gap-12 2xl:gap-8">                       
                        {bioData.map((member, index) => (
                            <div key={index} >
                                <h3 className="text-left text-indigo-900 title-medium pb-2">
                                    {member.firstName} <span className="app-title ml-1">{member.lastName}</span>
                                </h3>
                                <div className="w-[85vw] h-[85vw] base:w-[80vw] base:h-[80vw] lg-xl:w-[78vw] 
                                    lg-xl:h-[78vw] xl-sm:w-[37vw] xl-sm:h-[37vw] rounded-lg relative">
                                    <img src={member.imageSrc} alt={member.altText}
                                        className='w-full h-full object-cover rounded-lg ' />
                                </div>
                                <p className="text-min-dark mt-4 xl-sm:w-full">
                                    {renderDescription(member.description)}
                                </p>
                            </div>
                        ))}
                        
                    </div>
                </div>

                {/* <div className="relative w-[86%] z-10">
                    <div className="m-auto">
                        {bioData.map((member, index) => (
                            <div key={index} className={`bio-${index} w-full h-[100vh] flex flex-col justify-center`}>
                                <div className="relative w-full z-20">
                                    <h3 className="text-left text-indigo-900 title-medium  pt-2">
                                        {member.firstName} <span className="app-title ml-4">{member.lastName}</span>
                                    </h3>
                                    <p className="text-min-dark mt-8 ">
                                        {renderDescription(member.description)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>*/}

                
            </div>
        </article>
    );
}

export default TeamMobile;
