import React, { useState } from 'react';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';
import HoursTable from '../components/forms/HoursTable';

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <footer id='footer' className='w-full h-auto xl:h-[36rem] bg-indigo-900 overflow-hidden '>
            {/* Desktop */}
            <section className='hidden xl:flex w-full flex-col justify-between relative'
                style={{ position: 'sticky', bottom: 0 }}>
                <section className='flex justify-evenly space-x-6 text-indigo-900 2xl:pl-16 3xl:pl-32'>
                    <div>
                        <ContactCard isMenuOpen={isMenuOpen} />
                    </div>
                    <div className="flex flex-col w-full pr-16 2xl-sm:pr-12">
                        <div className="flex xl:flex-col 2xl-sm:flex-row justify-evenly items-center  w-full">
                            <div className='w-full 2xl-sm:w-1/2 flex flex-col justify-center items-center 
                                mt-[5rem] xl:mt-12 2xl-sm:mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-3 xl:mb-0 2xl:mb-3'>
                                    BUSINESS HOURS
                                </h4>
                                <HoursTable />
                            </div>
                            <div className='w-full 2xl-sm:w-1/2 flex flex-col items-center mt-[5rem] 
                                xl:mt-10 2xl-sm:mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-9 xl:mb-3 2xl:mb-6'>
                                    NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='absolute inset-0 top-[32rem] w-full h-16 bg-indigo-950 flex items-center 
                    justify-end text-center pr-[1rem] xl-lg:pr-7 2xl-sm:pr-16 2xl-md:pr-24 2xl-lg:pr-28 2xl:pr-20
                    3xl-sm:pr-[6.5rem] 3xl-md:pr-[7rem] 3xl:pr-[6.6rem] gap-[3rem] 2xl-sm:gap-[7rem] 2xl-md:gap-[6.5rem] 2xl-lg:gap-[8rem] 
                    2xl:gap-[6.4rem] 2xl-xl:gap-[8.2rem] 3xl-sm:gap-[8.2rem] 3xl-md:gap-[9.8rem] 3xl:gap-[9.4rem]'>
                    <p className="text-min-white">
                        ©2024 Website by
                        <a href="https://trishramos.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='ml-1 font-[500] text-indigo-500 relative after:absolute after:bottom-0 
                                after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom 
                                after:scale-x-0 after:bg-indigo-500 after:transition-transform after:duration-300 
                                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                                hover:after:scale-x-100 '
                        >
                            Trish Ramos.
                        </a>
                    </p>

                    <nav aria-label="Footer links" className='w-[21%]'>
                        <ul className="flex justify-evenly text-min-white list-none ">
                            <li>
                                <a href='#'
                                    className='mr-1 font-[400] relative after:absolute after:bottom-0 after:left-0 
                                        after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0
                                        after:bg-indigo-300 after:transition-transform after:duration-300
                                        after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                        hover:after:scale-x-100 '>
                                    Terms of Use
                                </a>
                            </li>
                            |
                            <li>
                                <a href='#'
                                    className='ml-1 font-[400] relative after:absolute after:bottom-0 after:left-0 
                                    after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0
                                    after:bg-indigo-300 after:transition-transform after:duration-300
                                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 '>
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>

            {/* Mobile */}
            <section className="flex xl:hidden w-full overflow-hidden flex-col justify-center items-center relative">
                <MobileFooter />
            </section>
        </footer>
    );
}

export default Footer;
