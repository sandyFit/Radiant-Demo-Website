import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

const MenuCurtain = ({ isMenuOpen }) => {
    return (
        <article className={`flex flex-col justify-center rounded-3xl glass pl-48 pr-6 menu-img
            py-8 z-30 shadow-2xl ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            {/* Menu items */}
            <ul className="flex flex-col glass-light p-10 items-end gap-3.5 rounded-2xl">
                {['index', 'about', 'services', 'staff', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li key={index}
                            className='app-title text-[2.5rem] leading-[30px] font-anybody font-[700] uppercase
                            hover:text-opacity-65'>
                            <ScrollLink to={item} smooth={true} duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </ScrollLink>
                        </li>
                    ))}
                <div className="flex flex-col mt-24">
                    <p className='text-[1rem] text-right text-indigo-900 font-[600]'>
                        +1 666 333 69 69
                    </p>
                    <p className='text-[1rem] text-right text-indigo-900 font-[600]'>
                        info@radiantdental.com
                    </p>
                    <button className='text-[1rem] text-right text-indigo-900 font-[600]'>
                        Book Online &#129141;
                    </button>
                </div>
                <div className='flex  justify-between items-center gap-7'
                    style={{ zIndex: 1000 }}>                                             
                    <FaInstagram
                        style={{ fontSize: '1.2rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                    <BsTwitterX
                        style={{ fontSize: '1rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s', marginTop: '1px' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                    <AiFillLinkedin
                        style={{ fontSize: '1.2rem', color: '#312e81', cursor: 'pointer', transition: 'opacity 0.1s' }}
                        onMouseOver={(e) => e.target.style.opacity = 0.75}
                        onMouseOut={(e) => e.target.style.opacity = 1}
                    />
                </div>
            </ul>
        </article>
    );
};

export default MenuCurtain;
