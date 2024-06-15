import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import NoBGBtn from '../buttons/NoBGBtn';

const MenuHero = ({ isMenuOpen }) => {
    return (
        <article className={`flex flex-col rounded-2xl glass pr-48 pl-6 menu-img-hero
            py-8 z-[30] shadow-2xl ${isMenuOpen ? 'menu-open-right' : 'menu-closed-right'}`}
            
        >
            {/* Menu items */}
            <ul className="flex flex-col glass-light p-10 items-start gap-3.5 rounded-2xl">
                {['index', 'about', 'services', 'staff', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li key={index}
                            className='app-title text-[2.5rem] leading-[30px] font-anybody font-[700] uppercase
                            hover:text-opacity-65'>
                            <ScrollLink to={item} smooth={true} duration={500}>
                                {item}
                            </ScrollLink>
                        </li>
                    ))}
                <div className="flex flex-col mt-20">
                    <p className='text-min-dark text-left'>
                        +1 666 333 69 69
                    </p>
                    <p className='text-min-dark text-left'>
                        info@radiantdental.com
                    </p>
                    
                    <NoBGBtn text={'Book Online'}/>
                </div>

                <div className='flex justify-between items-center mt-4 gap-5'
                    style={{ zIndex: 1000 }}>                                             
                    <a href="https://instagram.com">
                        <FaInstagram
                            style={{ fontSize: '1.5rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s' }}
                            onMouseOver={(e) => e.target.style.color = '#4f46e5'}
                            onMouseOut={(e) => e.target.style.color = '#312e81'}
                        />
                    </a>

                    <a href="https://twitter.com">
                        <BsTwitterX
                            style={{ fontSize: '1.25rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s', marginTop: '1px' }}
                            onMouseOver={(e) => e.target.style.color = '#4f46e5'}
                            onMouseOut={(e) => e.target.style.color = '#312e81'}
                        />
                    </a>

                    <a href="https://linkedin.com">
                        <AiFillLinkedin
                            style={{ fontSize: '1.5rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s' }}
                            onMouseOver={(e) => e.target.style.color = '#4f46e5'}
                            onMouseOut={(e) => e.target.style.color = '#312e81'}
                        />
                    </a>
                </div>
            </ul>  
        </article>
    )
}

export default MenuHero;
