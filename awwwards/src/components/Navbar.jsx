import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { MdPlayCircleFilled } from "react-icons/md";
import { useWindowScroll } from 'react-use'
import gsap from 'gsap';

const Navbar = () => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if(currentScrollY === 0){
            // Topmost position: show navbar without floating-nav
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY){
            // Scrolling down: hide navbar and floating-nav
            setIsNavVisible(false)
            navContainerRef.current.classList.remove('floating-nav')
        } else if (currentScrollY < lastScrollY){
            // Scrolling up: show navbar with floating-nav
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })
    },[isNavVisible])


    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
        if(isAudioPlaying){
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }

    }, [isAudioPlaying])

    const navItems = ['About', 'Radiant', 'Story', 'Contact'];

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-end p-4'>
                {/* <div className='flex items-center gap-7'>
                    <img 
                        src='/img/logo.png'
                        alt='logo'
                        className='w-10'
                    />

                    <Button 
                        id="product-button"
                        title="Products"
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />
                </div> */}

                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a className='nav-hover-btn' key={item} href={`#${item.toLowerCase()}`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    
                    <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                        <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                        {isAudioPlaying ? (
                            <>
                                {[1, 2, 3, 4, 5].map((bar) => (
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s`}}/>                                
                                ))}                        
                            </>
                        ): <MdPlayCircleFilled fill='white' size={20}/>}
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar