import React from 'react';

const MotionText = ({ icon, part1, part2 }) => {
    const renderTextBlock = () => (
        <>
            <span className='app-title text-opacity-45 font-outline-2 mx-24'>{icon}</span>
            <span className='text-indigo-900 mr-4 pt-[4px]'>{part1}</span>
            <span className="app-title">{part2}</span>
        </>
    );

    return (
        <div className=" font-anybody text-5xl font-[500] pb-12"
            style={{ overflow: 'hidden' }}>
            <h2 className='text-center text-indigo-900 motion-text font-regular'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {Array(6).fill(null).map((_, index) => (
                        <React.Fragment key={index}>
                            {renderTextBlock()}
                        </React.Fragment>
                    ))}
                </div>
            </h2>
        </div>
    );
};

export default MotionText;
