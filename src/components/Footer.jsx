import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-floral-green text-cream/80 border-t border-cream/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <h2 className="font-heading text-3xl text-gold mb-4">OmKar Flowers</h2>
                        <p className="font-body text-sm leading-relaxed max-w-sm mb-6">
                            Crafting unforgettable moments with Ranchi's finest fresh flowers and premium floral decorations for all occasions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/omkar_flowers_?igsh=NDFseHlkcDJqZ2Yx_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://wa.me/919709783627" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 font-body text-sm">
                            <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
                            <li><a href="#catalog" className="hover:text-gold transition-colors">Catalog</a></li>
                            <li><a href="#shop" className="hover:text-gold transition-colors">Shop</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact mini */}
                    <div>
                        <h3 className="font-heading text-xl text-white mb-6">Contact</h3>
                        <ul className="space-y-4 font-body text-sm">
                            <li className="flex items-start">
                                <MapPin size={16} className="mt-1 mr-3 text-gold flex-shrink-0" />
                                <span>Opp. Hanuman Mandir, Morabadi, Ranchi</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-3 text-gold flex-shrink-0" />
                                <span>+91 9709783627</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs font-body">
                    <p>&copy; {new Date().getFullYear()} OmKar Flowers. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed elegantly.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
