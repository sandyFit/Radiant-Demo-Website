import React, {useState} from 'react';
import Logo from '../components/ui/Logo';
import MenuHero from '../components/cards/MenuHero';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    }

    return (
        <nav className='w-[90.5%] h-[66px] lg:h-[88px] glass-strong absolute top-8 left-[4.6vw] rounded-[10px] 
            flex items-center border-[3px] border-zinc-50 z-[20]'>
            <article className="flex items-center justify-between mx-5 lg:mx-12 w-full h-full relative">
                <Logo />
                
                <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg"
                    className='hidden lg:block absolute left-[15.8rem] top-1/2 
                    transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <button onClick={toggleMenu}
                    className="flex z-[1000]">
                    <div className="group relative flex text-mayus-dark items-center gap-2">
                        <span className="relative inline-flex overflow-hidden">
                            <div className="hidden lg:block translate-y-0 skew-y-0 transition duration-500 
                            group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                {visible ? 'close' : 'menu'}
                            </div>
                            <div className="absolute translate-y-[110%] skew-y-12 
                            transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
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
                    top-1/2 transform -translate-y-1/2'>
                    <line x1="5" y1="0" x2="5" y2="70" stroke="#fafafa" strokeWidth="2"/>
                </svg>

                <div className="absolute -top-0 -right-6 lg:-right-12 ">                   
                    <MenuHero isMenuOpen={visible}/>                   
                </div>

            </article>
        </nav>
    );
};

export default Navbar;
