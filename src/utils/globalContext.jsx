import { createContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Global Context
export const GlobalContext = createContext(undefined);

// Context Provider Component
export const ContextProvider = ({ children }) => {
    const [image, setImage] = useState(null);


    return (
        <GlobalContext.Provider value={{ image, setImage }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Image Animation Hook
export const useAnimateImage = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const image = imgRef.current;

        gsap.fromTo(image, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: image,
                start: "top 80%",
                end: "bottom 80%",
                once: true, // Animation will run only once
            },
        });
    }, []);

    return imgRef;
};
