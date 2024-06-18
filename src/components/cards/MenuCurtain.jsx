import React, {useState, useEffect} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import NoBGBtn from '../buttons/NoBGBtn';

const MenuCurtain = ({ isMenuOpen }) => {

    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [submenuTransitionEnded, setSubmenuTransitionEnded] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            setSubmenuVisible(true);
        } else {
            setSubmenuVisible(false);
            setSubmenuTransitionEnded(false);
        }
    }, [isMenuOpen]);

    const handleSubmenuTransitionEnd = () => {
        if (submenuVisible) {
            setSubmenuTransitionEnded(true);
        }
    };

    return (
        <article className={`flex flex-col justify-center rounded-2xl  pl-48 pr-6 menu-img
            py-8 z-30 shadow-2xl ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            {/* Menu items */}
           <ul
                className={`flex flex-col p-10 items-start gap-3.5 rounded-2xl transition-all duration-2000
                ${submenuVisible ? 'submenu-open' : 'submenu-closed'}
                ${submenuTransitionEnded ? 'glass' : 'glass-light'}`}
                onTransitionEnd={handleSubmenuTransitionEnd}
            >
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
                <div className="flex flex-col items-end mt-20">
                    <p className='text-min-dark text-right'>
                        +1 666 333 69 69
                    </p>
                    <p className='text-min-dark text-right'>
                        info@radiantdental.com
                    </p>
                    
                    <NoBGBtn text={'Book Online'}/>
                    <div className='flex justify-between items-center mt-6 gap-[1.4rem]'
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
                </div>

            </ul>
        </article>
    );
};

export default MenuCurtain;
