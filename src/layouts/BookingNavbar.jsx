import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/ui/Logo';

const BookingNavbar = () => {
    return (
        
        <nav className='w-[90.5%] h-[66px] lg:h-[88px] glass absolute top-8 left-[4.6vw] rounded-[10px] 
            flex items-center border-[3px] border-zinc-50 z-[20]'>
            <article className="w-full flex items-center justify-between mx-5 lg:mx-12 h-full relative">
                <Link to="/" className="flex flex-row items-center space-x-2">
                    <Logo/>                   
                </Link>
            
                <div className="flex">
                    <h1 className='tiny-title text-indigo-900 w-full'>
                        <span>Reveal
                            <span className='app-title' style={{ margin: '0 1rem' }}>
                                Your Brightest
                            </span>
                        </span>
                        Smile
                    </h1>
                </div>
            </article>
        </nav>
    )
}

export default BookingNavbar;