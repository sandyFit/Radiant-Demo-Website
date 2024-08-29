import React from 'react'
import { BsArrowDown } from 'react-icons/bs';
import { HiArrowCircleDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'
import NoBGBtn from '../../components/buttons/NoBGBtn';
import Button from '../../components/buttons/Button';

const NotFoundPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <section className=' flex justify-center h-screen'>
            <div className="flex flex-col items-center w-10/12 h-full pt-16 pb-32">

                <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-10">
                        <h1 className='title-xl text-indigo-900'>404</h1>

                        <p className='app-title text-3xl'>
                            {`(Oh no, the page you're looking for can't be found)`}
                        </p>
                    </div>
                    <div className="flex justify-between gap-12">
                        <span className='title-xl app-title'>SORRY</span>

                        <span className='flex mt-7 gap-4'>
                            {[...Array(3)].map((_, index) => (
                            <BsArrowDown key={index}
                                className='text-indigo-500 text-[9rem] font-[800]'
                                
                            />
                        ))}</span>
                    </div>
                </div>               

                <div className='mt-24 transparent-btn w-44 md:w-56 lg-sm:w-[12rem] xl:w-[16rem] 2xl-sm:w-[20rem] 
                    py-1 md:py-[.4rem] 2xl-sm:py-2 hover:text-indigo-500 text-[.8rem] 2xl-sm:text-[1.2rem]
                    font-[300]'>
                    <Button text={'Go to Homepage'}
                        aria={'Back to Homepage'}
                        onClick={goToHome} />
                </div>
            </div>

        </section>
    )
}

export default NotFoundPage;