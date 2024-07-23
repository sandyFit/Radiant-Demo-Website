import React from 'react'

const TeamMobile = ({ bioData, renderDescription }) => {
    return (
        <article>
            
            <div className="grid grid-cols-1 place-content-center">
                <div className="w-full ">
                    <div className="flex flex-col justify-center sticky w-full h-screen top-0">
                        <div className="w-[86vw] h-[86vw] rounded-lg relative">
                            {bioData.map((member, index) => (
                                <div key={index} >
                                    <img src={member.imageSrc} alt={member.altText}
                                        className='w-full h-full object-cover rounded-lg '/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative  z-10">
                    <div className="m-auto">
                        {bioData.map((member, index) => (
                            <div key={index} className={`bio-${index} w-full h-[100vh] flex flex-col justify-center`}>
                                <div className="ml-16 relative w-full z-20">
                                    <h3 className="text-left text-indigo-900 title-medium w-2/3 md:w-2/4 lg:w-[80%] pt-2">
                                        {member.firstName} <span className="app-title ml-4">{member.lastName}</span>
                                    </h3>
                                    <p className="text-p1 mt-8 w-3/4 2xl:w-[80%]">
                                        {renderDescription(member.description)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </article>
    );
}

export default TeamMobile;
