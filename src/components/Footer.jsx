import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-floral-green text-cream/80 border-t border-cream/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2">
                        <h2 className="font-heading text-2xl sm:text-3xl text-gold mb-3 sm:mb-4">OmKar Flowers</h2>
                        <p className="font-body text-xs sm:text-sm leading-relaxed max-w-sm mb-4 sm:mb-6">
                            Crafting unforgettable moments with Ranchi's finest fresh flowers and premium floral decorations for all occasions.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <a href="https://www.instagram.com/omkar_flowers_?igsh=NDFseHlkcDJqZ2Yx_" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="https://wa.me/918709783627" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors">
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl text-white mb-4 sm:mb-6">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3 font-body text-xs sm:text-sm">
                            <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
                            <li><a href="#catalog" className="hover:text-gold transition-colors">Catalog</a></li>
                            <li><a href="#shop" className="hover:text-gold transition-colors">Shop</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact mini */}
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl text-white mb-4 sm:mb-6">Contact</h3>
                        <ul className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm">
                            <li className="flex items-start">
                                <MapPin size={14} className="mt-1 mr-2 sm:mr-3 text-gold flex-shrink-0" />
                                <span>Opp. Hanuman Mandir, Morabadi, Ranchi</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={14} className="mr-2 sm:mr-3 text-gold flex-shrink-0" />
                                <span>+91 8709783627</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-body gap-2">
                    <p>&copy; {new Date().getFullYear()} OmKar Flowers. All rights reserved.</p>
                    <p>Designed elegantly.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
