import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
// import MobileFooter from './MobileFooter';



const Footer = () => {


    return (
        <section className='w-full h-[36rem] bg-indigo-900 overflow-hidden'>

            {/* Desktop */}

            <article className='w-full flex flex-col justify-between relative'>

                <div className='flex justify-evenly space-x-6 text-indigo-900 pl-32'>
                    <div >
                        <ContactCard/>
                    </div>
          
                    <div className="flex flex-col w-full pr-16">
                        <div className="flex justify-evenly items-center w-full">
                            <div className='w-1/2 flex flex-col justify-center items-center mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-3'>
                                WORKING HOURS
                                </h4>
                                <WorkingHrsTable />                                     
                            </div>

                            <div className='w-1/2 flex flex-col items-center mt-[5rem]'>
                                <h4 className='title-h4 text-center mb-8'>
                                NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput/>
                            </div>
                        </div>                        
                    </div>                   
                </div>

                
                <div className='absolute inset-0 top-[32rem] w-full h-16 bg-indigo-950 flex items-center justify-end
                    text-center pr-[3rem] 2xl:pr-[7.8em] gap-[5rem] 2xl:gap-[5.5em]'>
                    <p className="text-min-white ">
                        ©2024 Design & Development by Trish Ramos. 
                    </p>
                    <div className="flex justify-evenly text-min-white
                        list-none w-[21%]  ">
                        <a href='#'
                            style={{color: '#a5b4fc', textDecoration: 'none'}}>
                            Terms of Use
                        </a>
                            |
                        <a href='#' 
                            style={{color: '#a5b4fc', textDecoration: 'none'}}>
                            Privacy Policy
                        </a>                          
                    </div>
                </div>

            </article>

            {/* Mobile */}
            {/* <article className="2xl:hidden flex flex-col justify-center items-center">
                <MobileFooter/>
            </article> */}
      
        </section>
    )
}

export default Footer;
