import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const navItems = [
        {name: "Home", href: "#hero"},
        {name: "About", href: "#about"},
        {name: "Skills", href: "#skills"},
        {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
    ]

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <nav className={`${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"} fixed w-screen z-40 transition-all duration-300`}>
        <div className='container flex items-center justify-between'>
            <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>
                        William Chong
                    </span> {" "}
                    Portfolio
                </span>
            </a>

            <div className='hidden md:flex space-x-8'>
                {navItems.map((nav, key) => (
                    <a key={key} href={nav.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                        {nav.name}
                    </a>
                ))}
            </div>

            <button onClick={() => setIsMenuOpen((prev) => !prev)} className='md:hidden p-2 text-foreground z-50' aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            <div className={`${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden`}>
                <div className='flex flex-col space-y-8 text-xl'>
                    {navItems.map((nav, key) => (
                        <a key={key} href={nav.href} className='text-foreground/80 hover:text-primary transition-colors duration-300' onClick={() => setIsMenuOpen(false)}>
                            {nav.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar