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
            <div className="flex flex-col items-center w-10/12 h-full pt-16 base:pt-12 lg-md:pt-24 xl-sm:pt-16
                 xl-xl:pt-28 2xl:pt-20 
                 3xl-sm:pt-12 ">

                <section className="grid grid-cols-1 xl-xl:grid-cols-6 grid-rows-2 xl-xl:grid-rows-1">
                    <div className="col-span-4 col-start-1 col-end-5 row-start-1 row-end-2 ">
                        <h1 className=' title-xl text-indigo-900'>404</h1>         
                        <p className=' title-xl app-title'>PAGE NOT FOUND</p>
                    </div>
                    <section className="w-full xl-xl:col-span-2 xl-xl:col-start-5 row-start-2 xl-xl:row-start-1 mt-6 
                        lg-md:mt-4 xl-sm:mt-6 xl-xl:mt-auto">                        
                        <div className=" flex flex-col justify-end items-center gap-10 base:gap-6 xl-xl:gap-16">
                            <p className='app-title col-span-2 text-[1.2rem] md:text-[1.3rem] lg-sm:text-[1.4rem] 
                                2xl-md:text-[1.5rem] 3xl-sm:text-[1.6rem] 3xl:text-3xl text-center
                                w-64 2xl-md:w-72 3xl:w-96'>
                                {`(Oh no, the page you're looking for is not here)`}
                            </p>
                            <span className='flex'>                               
                                <BsArrowDown
                                        className='text-indigo-900 text-[4rem] lg-sm:text-[5rem] xl-xl:text-[6rem] 
                                        xl-3xl:text-[7rem] 3xl-sm:text-[8.2rem] 3xl:text-[9rem] font-[800]'                              
                                />
                            </span>
                            <div className='transparent-btn w-56 md:w-64 
                                lg-sm:w-[18rem] xl:w-[16rem] 2xl-sm:w-[20rem] py-1 md:py-[.4rem] 2xl-sm:py-2 
                                hover:text-indigo-500 text-[1rem] 2xl-sm:text-[1.2rem] font-[300]'>
                                <Button text={'Go to Homepage'}
                                    aria={'Go to Homepage'}
                                    onClick={goToHome} />
                            </div>
                        </div>

                    </section>
                </section>               

                
            </div>

        </section>
    )
}

export default NotFoundPage;
