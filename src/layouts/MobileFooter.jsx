import React from 'react'
import ContactCard from '../components/cards/ContactCard'
import WorkingHrsTable from '../components/forms/WorkingHrsTable'
import NewsletterInput from '../components/forms/NewsletterInput'

const MobileFooter = () => {
    return (
        <article className="flex flex-col justify-center items-center bg-indigo-900 w-full overflow-x-hidden 
            sticky bottom-0">
            <div id='contact'>
                <ContactCard/>
            </div>

            <div className="flex flex-col mt-20">
                <h4 className='title-h4 text-center'>
                    WORKING HOURS
                </h4>
                <WorkingHrsTable/>
            </div>

            <div className='w-[18rem] flex flex-col items-center my-20 '>
                <h4 className='title-h4 text-center mb-6'>
                    NEWSLETTER SIGN UP
                </h4>
                <NewsletterInput/>
            </div>

            <div className='w-full flex bg-indigo-950 flex-col justify-center items-center py-3'>
                 <div className="flex justify-evenly text-min-white list-none w-[76%]">
                    <a href='#'
                        className='ml-1 font-[400] relative after:absolute after:bottom-0 
                        after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                        after:bg-indigo-300 after:transition-transform after:duration-300 
                        after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                        hover:after:scale-x-100 '>
                        Terms of Use
                    </a>
                        |
                    <a href='#'
                        className='ml-1 font-[400] relative after:absolute after:bottom-0 
                        after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                        after:bg-indigo-300 after:transition-transform after:duration-300 
                        after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                        hover:after:scale-x-100 '>
                        Privacy Policy
                    </a>                          
                </div>
                
                <div className="text-min-white text-center mx-auto mt-2">
                    © 2024 Website by 
                    <a href="https://trishramos.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='ml-1 font-[500] text-indigo-500 relative after:absolute after:bottom-0 
                            after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 
                            after:bg-indigo-500 after:transition-transform after:duration-300 
                            after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                            hover:after:scale-x-100 '
                        >
                        Trish Ramos
                    </a>                   
                </div>
            </div>

        </article>
    )
}

export default MobileFooter;
