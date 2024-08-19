import React from 'react';
import { BsEnvelopeAtFill, BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ContactCard = ({ isMenuOpen }) => {
    return (
        <article
            id='contact'
            className='bg-sky-400 w-full md:w-[22rem] base:w-[25rem] lg-sm:w-[30rem] xl:w-[28rem] 2xl:w-[30rem]
            h-[30rem] lg-sm:h-[38.70rem] 
            flex flex-col items-center px-4 space-y-4 relative'
            style={{ zIndex: 5, pointerEvents: isMenuOpen ? 'none' : 'auto' }}
        >
            <h4 className='title-h4 text-center mt-12 lg-sm:mt-20'>CONTACT US</h4>

            <h5 className='title-contact text-center'>
                Call us today or book online
            </h5>

            <address className="flex flex-col justify-start text-indigo-900">
                <div className='flex gap-2 text-[1.1rem] lg-sm:text-[1.5rem] mx-4 mt-6'>
                    <ImLocation2 aria-label="Office location" />
                    <p className='w-48 ml-2 text-links'>
                        Radiant Dental Studio
                        <br />
                        123 Main Street
                        <br />
                        Anytown, NJ 07001
                    </p>
                </div>

                <div className='flex gap-2 text-[1.1rem] lg-sm:text-[1.3rem] mx-4 mt-6'>
                    <FaPhoneAlt aria-label="Contact phone number"/>
                    <p className='ml-2 text-links'>+1 666 333 69 69</p>
                </div>

                <div className='flex gap-2 text-[1.1rem] lg-sm:text-[1.4rem] mb-11 mx-4 mt-6'>
                    <BsEnvelopeAtFill aria-label="Send email"/>
                    <a href='mailto:info@radiantdental.com'
                        className='ml-2 text-links relative after:absolute after:bottom-0 
                        after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                        after:bg-indigo-900 after:transition-transform after:duration-300 
                        after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                        hover:after:scale-x-100 '
                        style={{ zIndex: 20, pointerEvents: 'auto' }}
                    >
                        info@radiantdental.com
                    </a>
                </div>
            </address>

            <h5 className='title-contact text-center  lg-sm:pt-3'>
                Follow us everywhere
            </h5>

            <div className='flex justify-between gap-12 md:gap-16 lg-sm:gap-20' >
                <a href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram profile"
                    style={{ zIndex: 2000, pointerEvents: 'auto' }}>
                    <FaInstagram className='text-[1.5rem] lg-sm:text-[2rem] cursor-pointer text-indigo-900 hover:text-indigo-700'
                        style={{ transition: 'opacity 0.3s' }}
                    />
                </a>
                <a href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"     
                    aria-label="Check our LinkedIn profile"
                    style={{ zIndex: 2000, pointerEvents: 'auto' }}>
                    <AiFillLinkedin className='text-[1.5rem] lg-sm:text-[2rem] cursor-pointer text-indigo-900 hover:text-indigo-700'
                        style={{ transition: 'opacity 0.3s' }}
                    />
                </a>
                <a href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check our Twitter profile"
                    style={{ zIndex: 20, pointerEvents: 'auto' }}>
                    <BsTwitterX className='text-[1.3rem] lg-sm:text-[1.8rem] cursor-pointer 
                        text-indigo-900 hover:text-indigo-700 mt-[1px]'
                        style={{ transition: 'opacity 0.3s' }}
                    />
                </a>
            </div>
        </article>
    );
};

export default ContactCard;
