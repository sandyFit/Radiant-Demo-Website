import React from 'react';
import ContactCard from '../components/cards/ContactCard';
import NewsletterInput from '../components/forms/NewsletterInput';
import HoursTable from '../components/forms/HoursTable';

const MobileFooter = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-indigo-900 w-full mt-5 md:mt-10 
            overflow-x-hidden">
            <div id='contact'>
                <ContactCard/>
            </div>

            <section className="w-full flex flex-col lg-sm:flex-row justify-between lg-sm:px-16 lg-xl:px-24 xl-md:px-28">

                <div className="flex flex-col mt-20">
                    <h4 className='title-h4 text-center'>
                        BUSINESS HOURS
                    </h4>
                    <HoursTable/>
                </div>

                <div className=' flex flex-col items-center my-20 '>
                    <h4 className='title-h4 text-center mb-6'>
                        NEWSLETTER SIGN UP
                    </h4>
                    <NewsletterInput/>
                </div>
            </section>

            <section className='w-full flex bg-indigo-950 flex-col lg:flex-row justify-center lg:justify-between 
                items-center py-3'>
                
                <nav aria-label="Footer links"
                    className='w-[76%] md:w-[60%] lg-sm:w-[45%] lg:w-1/2'>
                    <div className="flex justify-evenly text-min-white list-none ">
                        <li>
                            <a href='#'
                                className='ml-1 font-[400] relative after:absolute after:bottom-0 
                                after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                                after:bg-indigo-300 after:transition-transform after:duration-300 
                                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                                hover:after:scale-x-100 '>
                                Terms of Use
                            </a>
                        </li>
                        |
                        <li>
                            <a href='#'
                                className='ml-1 font-[400] relative after:absolute after:bottom-0 
                                after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                                after:bg-indigo-300 after:transition-transform after:duration-300 
                                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                                hover:after:scale-x-100 '>
                                Privacy Policy
                            </a>                          
                        </li>
                    </div>
                </nav>
                
                
                <div className="text-min-white text-center mx-auto mt-2 lg:w-1/2">
                    © 2024 Website by 
                    <a href="https://trishramos.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='ml-1 font-[500] text-indigo-500 relative after:absolute after:bottom-0 
                            after:left-0 after:right-0 after:h-[1px] after:w-fdivl after:origin-bottom after:scale-x-0 
                            after:bg-indigo-500 after:transition-transform after:duration-300 
                            after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                            hover:after:scale-x-100 '
                        >
                        Trish Ramos
                    </a>                   
                </div>
                
            </section>

        </footer>
    )
}

export default MobileFooter;
