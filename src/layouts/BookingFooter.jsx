import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookingFooter = () => {
    return (
        <article className='w-full flex flex-col items-center'>          

            <div className="bg-spanishBlue w-full h-3 mt-6"></div>

            <div className="bg-spaceCadet flex flex-col items-end w-full h-auto p-6">

                <div className='flex justify-end w-1/2 text-slate-200 my-6 mr-16 gap-12'>
                <FaInstagram 
                    style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.75}
                    onMouseOut={(e) => e.target.style.opacity = 2}
                />
                <AiFillLinkedin
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.75}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                />
                <BsTwitterX 
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.75}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                /> 
                </div>
                
                <div className="flex justify-between items-center w-full gap-[10rem]">
                    <p className="text-lg font-light text-blue-400 ">
                        © 2024 Design & Development by Trish Ramos.
                    </p>
                    <div className="flex justify-evenly text-blue-400
                        list-none text-lg w-[30%] ">
                        <Link to='/terms' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Terms of Use
                        </Link>
                            |
                        <Link to='/policy' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Privacy Policy
                        </Link>                          
                    </div>
                </div>           
            </div>
        </article>
    )
}

export default BookingFooter;
