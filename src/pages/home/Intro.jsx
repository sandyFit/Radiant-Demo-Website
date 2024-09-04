import React, { useEffect } from 'react';
import '../../assets/intro.css';
import Logo from '../../components/ui/Logo';
import gsap from 'gsap';

const Intro = ({ onComplete }) => {

    useEffect(() => {
        const master = gsap.timeline({
            onComplete: onComplete, // Callback when intro finishes
        });
        const preloaderBackground = document.querySelector('.preloader__background');
        const preloaderText = document.querySelector('.preloader__text span');

        master.set('.preloader__text', {
            yPercent: 100
        })
            .to(preloaderText, {
                yPercent: 0,
                delay: 0.3
            })
            .to(preloaderText, {
                yPercent: -105,
                delay: .5
            })
              .to(preloaderBackground, {
                  yPercent: -100,
                  duration: .8,
                  ease: 'power4.inOut',
              }, '<');

    }, []);

    return (
        <section>           
            <div className="preloader z-[500]">
                <div className="preloader__text">
                    <span><Logo/></span>
                </div>
                <div className="preloader__background"></div>
            </div>
        </section>
    );
};

export default Intro;
