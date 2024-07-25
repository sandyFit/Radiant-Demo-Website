import React, { useState } from 'react';
import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section id='footer' className='w-full h-auto xl:h-[36rem] bg-indigo-900 overflow-hidden relative'>
            {/* Desktop */}
            <article className='hidden xl:flex w-full flex-col justify-between relative' style={{ position: 'sticky', bottom: 0 }}>
                <div className='flex justify-evenly space-x-6 text-indigo-900 pl-32'>
                    <div>
                        <ContactCard isMenuOpen={isMenuOpen} />
                    </div>
                    <div className="flex flex-col w-full pr-16">
                        <div className="flex justify-evenly items-center w-full">
                            <div className='w-1/2 flex flex-col justify-center items-center mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-3'>
                                    BUSINESS HOURS
                                </h4>
                                <WorkingHrsTable />
                            </div>
                            <div className='w-1/2 flex flex-col items-center mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-9'>
                                    NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 top-[32rem] w-full h-16 bg-indigo-950 flex items-center justify-end text-center pr-[3rem] 2xl:pr-[7.8em] gap-[5rem] 2xl:gap-[9rem]'>
                    <p className="text-min-white">
                        ©2024 Website by
                        <a href="https://trishramos.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='ml-1 font-[500] text-indigo-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-indigo-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 '
                        >
                            Trish Ramos.
                        </a>
                    </p>
                    <div className="flex justify-evenly text-min-white list-none w-[21%]">
                        <a href='#'
                            className='ml-1 font-[400] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-indigo-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 '>
                            Terms of Use
                        </a>
                        |
                        <a href='#'
                            className='ml-1 font-[400] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-indigo-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 '>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </article>

            {/* Mobile */}
            <article className="flex lg:hidden w-full overflow-hidden flex-col justify-center items-center relative">
                <MobileFooter />
            </article>
        </section>
    );
}

export default Footer;
