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
        <article className={`flex flex-col justify-center rounded-2xl pl-6 md:pl-24 base:pl-40 xl:pl-48 pr-6 
            menu-img py-[3.1rem] z-30 shadow-2xl w-[92%] xl:w-full
            ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
            style={{ zIndex: isMenuOpen ? 100 : 0 }}
        >
            {/* Menu items */}
           <ul
                className={`flex flex-col pl-10 pr-8 py-12 items-end gap-3.5 rounded-2xl transition-all 
                    duration-2000
                ${submenuVisible ? 'submenu-open' : 'submenu-closed'}
                ${submenuTransitionEnded ? 'glass' : 'glass-light'}`}
                onTransitionEnd={handleSubmenuTransitionEnd}
            >
                {['index', 'about', 'services', 'staff', 'reviews', 'faq', 'contact']
                    .map((item, index) => (
                        <li key={index}
                            className='app-title title-links hover:text-opacity-65'>
                            <ScrollLink to={item}
                                smooth={true}
                                duration={500}
                                offset={120}
                            >
                                {item}
                            </ScrollLink>
                        </li>
                    ))}
               <div className="flex flex-col justify-end items-end mt-10 ">
                    <p className='text-min-dark '>+1 666 333 69 69</p>
                    <p className='text-min-dark '>info@radiantdental.com</p>
                    
                    <NoBGBtn text={'Book Online'} />
                </div>
                    
                {/* <div className='flex justify-between items-center mt-4 gap-[1.4rem]'>    
                    <a href="https://instagram.com">
                        <FaInstagram
                            
                        />
                    </a>

                    <a href="https://twitter.com">
                        <BsTwitterX
                            
                        />
                    </a>

                    <a href="https://linkedin.com">
                        <AiFillLinkedin
                            
                        />
                    </a>
                </div> */}
               
            </ul>
        </article>
    );
};

export default MenuCurtain;
