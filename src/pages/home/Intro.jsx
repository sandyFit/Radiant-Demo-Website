import React, { useEffect } from 'react';
import '../../assets/intro.css';
import Logo from '../../components/ui/Logo';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/alertSlice';
import Loader from '../../components/ui/Loader';

const Intro = ({ onComplete }) => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.alerts.loading); // Get the loading state

    useEffect(() => {
        // Dispatch showLoading when the intro starts
        dispatch(showLoading());

        const master = gsap.timeline({
            onComplete: () => {
                dispatch(hideLoading()); // Hide the loader when the animation completes
                onComplete && onComplete(); // Call the provided onComplete callback
            }
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
            <div className="z-[1000]"></div>
            {loading && <Loader/>}
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
