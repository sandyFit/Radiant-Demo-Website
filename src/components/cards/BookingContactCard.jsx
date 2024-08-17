import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { BsEnvelopeAtFill } from 'react-icons/bs';

const BookingContactCard = () => {
    return (
        <article className="flex mt-4 gap-32">
            <div className="flex justify-center w-80"> {/* Wrap the text next to the icon in a div */}
                <ImLocation2 style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }}/>
                <p className='text-xl font-medium'>
                    Radiant Dental Studio
                    11.63 Main Street
                    Anytown, NJ 07001
                </p>
            </div>

            <div className='flex justify-center ml-2 w-72'> {/* Add ml-8 or another gap value here */}
                <FaPhoneAlt style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }} />
                <p className='text-xl font-medium'>
                    991 318 66 99
                </p>
            </div>

            <div className='flex justify-center ml-2'> {/* Add ml-8 or another gap value here */}
                <BsEnvelopeAtFill style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }} />
                <p className='text-xl font-medium'>
                    info@radiantdental.com
                </p>
            </div>
        </article>
    )
}

export default BookingContactCard;
