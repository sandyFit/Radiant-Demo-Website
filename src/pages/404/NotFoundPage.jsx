import React from 'react'
import { BsArrowDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import Button from '../../components/buttons/Button';

const NotFoundPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <section className=' flex justify-center h-screen'>
            <div className="flex flex-col items-center w-10/12 h-full pt-24 lg-sm:pt-16 xl-sm:pt-40 xl-3xl:pt-24 
                pb-32">

                <section className="flex flex-col j">
                    <div className="flex flex-col xl-sm:flex-row justify-center xl-sm:justify-between 
                        items-center gap-0 3xl:gap-16">
                        <h1 className='title-xl text-indigo-900'>404</h1>

                        <p className='app-title w-[80%] xl-sm:w-[40%] xl-3xl:w-[30%] 3xl-md:w-[28%] 3xl:w-[35%] 
                            text-[1rem] xl-xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl-sm:text-[1.5rem] 3xl:text-3xl
                            text-center'>
                            {`(Oh no, the page you're looking for can't be found)`}
                        </p>
                    </div>
                    <div className="flex flex-col xl-sm:flex-row justify-center xl-sm:justify-between items-center 
                        gap-0 xl-sm:gap-8 xl-3xl:gap-12 3xl:gap-12">
                        <span className='title-xl app-title'>SORRY</span>

                        <span className='flex mt-8 md:mt-5 lg-sm:mt-0 xl-xl:mt-3 3xl:mt-7 gap-4 md:gap-8 xl-sm:gap-0 
                            2xl:gap-3 3xl-sm:gap-4'>
                            {[...Array(3)].map((_, index) => (
                            <BsArrowDown key={index}
                                    className='text-indigo-500 text-[4rem] lg-sm:text-[5rem] xl-xl:text-[6rem] 
                                    xl-3xl:text-[7rem] 3xl-sm:text-[8.2rem] 3xl:text-[9rem] font-[800]'                              
                            />
                        ))}</span>
                    </div>
                </section>               

                <div className='mt-20 md:mt-16 lg-sm:mt-10 xl-3xl:mt-16 3xl:mt-20 transparent-btn w-56 md:w-64 
                    lg-sm:w-[18rem] xl:w-[16rem] 2xl-sm:w-[20rem] py-1 md:py-[.4rem] 2xl-sm:py-2 
                    hover:text-indigo-500 text-[1rem] 2xl-sm:text-[1.2rem] font-[300]'>
                    <Button text={'Go to Homepage'}
                        aria={'Back to Homepage'}
                        onClick={goToHome} />
                </div>
            </div>

        </section>
    )
}

export default NotFoundPage;