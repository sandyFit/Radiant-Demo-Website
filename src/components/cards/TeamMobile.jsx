import React from 'react'

const TeamMobile = ({ bioData, renderDescription }) => {
    return (
        <article>
            
            <div className="h-[280rem] w-[86%] md:w-[76%] base:w-[80%] base:h-[90%] ml-6">
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col justify-center w-full gap-8">                       
                        {bioData.map((member, index) => (
                            <div key={index} >
                                <h3 className="text-left text-indigo-900 title-medium pb-2">
                                    {member.firstName} <span className="app-title ml-1">{member.lastName}</span>
                                </h3>
                                <div className="w-[85vw] h-[85vw] rounded-lg relative">
                                    <img src={member.imageSrc} alt={member.altText}
                                        className='w-full h-full object-cover rounded-lg ' />
                                </div>
                                <p className="text-min-dark mt-4">
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
