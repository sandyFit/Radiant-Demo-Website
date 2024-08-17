import React from 'react'
import { Link } from 'react-router-dom'

const BookingNavbar = () => {
    return (
        
        <nav className='bg-spaceCadet py-12 h-[150px]'>
            <div className="flex items-center justify-between mx-8 md:mx-24 lg:mx-36 xl:mx-44">
                <Link to="/" className="flex flex-row items-center space-x-2">
                    <img src="./logo.png" alt="Radiant's logo" className='h-16' />
                    <div className='flex flex-col'>
                        <span className="text-4xl font-bold text-azure tracking-wide">Radiant</span>
                        <span className='text-2xl font-medium text-white'>Dental Studio</span>
                    </div>
                </Link>
            

                <div className="flex">
                    <h2 className='text-center text-white3 text-xl md:text-3xl xl:text-5xl font-bold
                        w-2/3 lg:w-2/4 xl:w-2/4 2xl:w-full'>
                        <span >
                            Where
                            <span className='text-spanishBlue' style={{ margin: ' 0 1rem' }}>
                            Healthy Smiles 
                            </span>
                        </span>
                        Begin
                    </h2>
                </div>
            </div>
        </nav>
    )
}

export default BookingNavbar;