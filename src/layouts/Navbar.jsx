import React, {useEffect, useState} from 'react';
import Logo from '../components/ui/Logo';
import GlassMenuRight from '../components/cards/GlassMenuRight';
import gsap from 'gsap';
import { defaults } from 'autoprefixer';

const Navbar = ({ onIntroComplete }) => {

    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    }

    const handleMenuClose = () => {
        setVisible(false);
    }

    useEffect(() => {
        const master = gsap.timeline();
        const navWrapper = document.querySelector('.nav__wrapper');
        const navLogo = document.querySelector('.nav__logo');
        const navBtn = document.querySelector('.nav__btn');

        const setInitialState = () => {
            gsap.set(navWrapper, {
                // yPercent: -100,
                autoAlpha: 0
            });

            // gsap.set(navLogo, {
            //     yPercent: -100,
            //     autoAlpha: 0
            // });

            // gsap.set(navBtn, {
            //     yPercent: -100,
            //     autoAlpha: 0
            // });
        }

        const uiAnimation = () => {
            const tl = gsap.timeline({
                defaults: {
                    delay: 2,
                    duration: .8,
                    ease: 'power3.out'
                }
            });

            tl.to(navWrapper, {
                // yPercent: 0,
                autoAlpha: 1
            })
            //     .to([navLogo, navBtn], {
            //         yPercent: 0,
            //         autoAlpha: 1
            // })

            return tl;
        }

        master
            .add(setInitialState())
            .add(uiAnimation(), '<')

    }, [])

    return (
        <nav className='w-[90.5%] h-[66px] lg:h-[88px] glass absolute top-8 left-[4.6vw] rounded-[10px] 
            flex items-center border-[3px] border-zinc-50 z-[20] nav__wrapper'
            aria-label='main-navigation'>
            <section className="flex items-center justify-between mx-5 lg:mx-12 w-full h-full relative
                text-indigo-900 nav__logo">
                <span><Logo /></span>
                
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg"
                    className='hidden lg:block absolute left-[15.8rem] top-1/2 
                    transform -translate-y-1/2'
                    aria-hidden="true">
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <button
                    onClick={toggleMenu}
                    className="flex z-[1000] nav__btn"
                    aria-expanded={visible}
                    aria-controls="menu"
                    aria-label={visible ? "Close menu" : "Open menu"}
                    >
                    <div className="group relative flex text-mayus-dark items-center gap-2">
                        <span className="relative inline-flex overflow-hidden">
                            <div className="hidden lg:block translate-y-0 transition duration-500 
                                group-hover:-translate-y-[85%]">
                                {visible ? 'close' : 'menu'}
                            </div>
                            <div className="absolute translate-y-[85%] transition duration-500 
                                group-hover:translate-y-0">
                                {visible ? 'close' : 'open'}
                            </div>
                        </span>
                        <div className="flex flex-col items-end cursor-pointer gap-[5px]">
                            <div className={`line group-hover:w-[3.5rem] line-1 ${visible ? 'active' : ''}`}></div>
                            <div className={`line line-2 ${visible ? 'active' : ''}`}></div>
                            <div className={`line group-hover:w-[3.5rem] line-3 ${visible ? 'active' : ''}`}></div>
                        </div>
                    </div>
                </button>

               
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg" className='hidden lg:block absolute right-44 
                    top-1/2 transform -translate-y-1/2'
                    aria-hidden="true">
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <div className="absolute top-[6.4rem] -right-6 lg:-right-12"
                    id="menu"
                    role="menu" 
                >
                    <GlassMenuRight isMenuOpen={visible} onClose={handleMenuClose} />
                </div>

            </section>
        </nav>
    );
};

export default Navbar;
