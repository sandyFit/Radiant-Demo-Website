import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NoBGBtn from '../buttons/NoBGBtn';

const GlassMenuRight = ({ isMenuOpen, onClose }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            onClose(); // Call the function to close the menu
        }, 1000);
    };

    return (
        <article className={`w-[16rem] h-[28rem] rounded-[10px] glass-strong shadow-2xl
            ${isMenuOpen ? 'menu-open-right' : 'menu-closed-right'}`}
            style={{ zIndex: isMenuOpen ? 100 : 0 }}
        >
            <ul
                className={`flex flex-col pl-10 pr-8 py-8 items-end gap-3.5 rounded-2xl transition-all 
                    duration-2000`}
            >
                {['index', 'about', 'services', 'staff', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li key={index}
                            className='ml-1 font-[700] app-title title-links relative after:absolute after:-bottom-1
                            after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 
                            after:bg-indigo-600 after:transition-transform after:duration-300 
                            after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                            hover:after:scale-x-100 hover:after:text-indigo-600'>
                            <ScrollLink to={item}
                                smooth={true}
                                duration={500}
                                offset={120}
                                onClick={handleClick} // Trigger the handleClick function
                            >
                                {item}
                            </ScrollLink>
                        </li>
                    ))}
                <div className="flex flex-col justify-start items-end mt-10 ">
                    <p className='text-min-dark '>+1 666 333 69 69</p>
                    <p className='text-min-dark '>info@radiantdental.com</p>
                    
                    <NoBGBtn text={'Book Online'} />
                </div>
            </ul>
        </article>
    );
};

export default GlassMenuRight;
