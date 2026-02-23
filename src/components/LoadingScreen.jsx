import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a12] overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            {/* Ambient glow behind the logo */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(198,167,94,0.15) 0%, rgba(198,167,94,0.05) 40%, transparent 70%)',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.2, 1], opacity: [0, 0.8, 0.6] }}
                transition={{ duration: 2, ease: 'easeOut' }}
            />

            {/* Sparkle particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold/60 rounded-full"
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${15 + Math.random() * 70}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 1.5 + Math.random() * 1,
                        delay: 0.5 + Math.random() * 1.5,
                        repeat: 1,
                        repeatDelay: Math.random() * 0.5,
                    }}
                />
            ))}

            {/* Logo Image */}
            <motion.div
                className="relative z-10 w-[280px] h-[180px] sm:w-[420px] sm:h-[260px] md:w-[550px] md:h-[340px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src="/images/omkar_logo_splash.jpg"
                    alt="OmKar Flowers"
                    className="w-full h-full object-contain rounded-2xl shadow-2xl"
                    style={{
                        filter: 'drop-shadow(0 0 40px rgba(198,167,94,0.3))',
                    }}
                />
            </motion.div>

            {/* Tagline */}
            <motion.p
                className="relative z-10 mt-6 sm:mt-8 text-gold/70 font-body text-xs sm:text-sm tracking-[0.3em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                Crafting Moments with Fresh Blooms
            </motion.p>

            {/* Elegant loading bar */}
            <motion.div
                className="relative z-10 mt-8 sm:mt-10 w-40 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #C6A75E, transparent)',
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                        duration: 1.2,
                        repeat: 1,
                        ease: 'easeInOut',
                    }}
                    onAnimationComplete={() => {
                        // After the loading animation completes, trigger the transition
                        setTimeout(() => onFinish(), 300);
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
