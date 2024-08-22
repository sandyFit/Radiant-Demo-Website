import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NoBGBtn from '../buttons/NoBGBtn';

const GlassMenu = ({ isMenuOpen, onClose }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            onClose(); // Call the function to close the menu
        }, 1000);
    };

    return (
        <article className={`w-[16rem] h-[28rem] rounded-[10px] glass shadow-2xl
            ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
            style={{ zIndex: isMenuOpen ? 100 : 0 }}
            aria-hidden={!isMenuOpen}
        >
            <ul
                className={`flex flex-col pl-10 pr-8 py-8 items-start gap-3.5 rounded-2xl transition-all 
                    duration-2000`}
                aria-label="Site Navigation" 
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
                                aria-label={`Scroll to ${item}`}
                                smooth={true}
                                duration={500}
                                offset={120}
                                onClick={handleClick} // Trigger the handleClick function
                            >
                                {item}
                            </ScrollLink>
                        </li>
                    ))}
                <section className="flex flex-col justify-end items-start mt-10 ">
                    <p className='text-min-dark '>+1 666 333 69 69</p>
                    <p className='text-min-dark '>info@radiantdental.com</p>
                    
                    <NoBGBtn text={'Book Online'} />
                </section>
            </ul>
        </article>
    );
};

export default GlassMenu;
