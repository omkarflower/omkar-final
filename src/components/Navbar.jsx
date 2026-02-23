import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Catalog', href: '#catalog' },
        { name: 'Shop', href: '#shop' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="font-heading text-xl sm:text-2xl font-bold text-floral-green tracking-wide">
                            OmKar Flowers
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-body text-floral-green hover:text-gold transition-colors duration-200 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm uppercase tracking-wider relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-floral-green hover:text-gold focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100 bg-cream/95 backdrop-blur-md shadow-md' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-body text-floral-green hover:text-gold hover:bg-white/50 block px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider text-center transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
