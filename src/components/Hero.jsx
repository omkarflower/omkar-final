import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-blush">
            {/* Background with floral pattern/image */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero_banner.png')",
                }}
            />

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-cream/40 to-blush/60" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto pt-24 pb-20">
                <motion.h1
                    className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-floral-green mb-4 sm:mb-6 drop-shadow-sm leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    OmKar Flowers
                </motion.h1>

                <motion.p
                    className="font-body text-base sm:text-lg md:text-2xl text-floral-green/80 mb-8 sm:mb-10 tracking-wide font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Crafting Moments with Fresh Blooms
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href="#catalog"
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-floral-green text-cream font-body rounded-full hover:bg-gold hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center tracking-wider text-sm sm:text-base"
                    >
                        View Catalog
                    </a>
                    <a
                        href="#contact"
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-floral-green text-floral-green font-body rounded-full hover:bg-floral-green hover:text-cream transition-all duration-300 w-full sm:w-auto text-center tracking-wider text-sm sm:text-base"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-floral-green/50 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-3 bg-floral-green/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
