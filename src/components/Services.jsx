import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown, Clock, Car, PartyPopper } from 'lucide-react';

const servicesList = [
    { icon: Heart, title: 'Wedding Stage Decoration' },
    { icon: Crown, title: 'Mandap Decoration' },
    { icon: Sparkles, title: 'Custom Bouquet Design' },
    { icon: PartyPopper, title: 'Event Floral Styling' },
    { icon: Clock, title: 'Traditional Garland Making' },
    { icon: Car, title: 'Car Decoration' },
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-blush/20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Services List */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-heading text-floral-green mb-6"
                        >
                            Our Premium Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-floral-green/70 font-body mb-10"
                        >
                            Beyond stunning blooms, we offer comprehensive floral design services to elevate your most cherished moments.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {servicesList.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors border border-transparent hover:border-gold/20"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm">
                                                <Icon size={20} strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-heading text-floral-green leading-snug">{service.title}</h3>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-12"
                        >
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-white text-floral-green font-body rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-sm font-medium tracking-wide border border-floral-green/10"
                            >
                                Discuss Your Event
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Elegant Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative background shape */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-sage/20 to-gold/10 rounded-[2rem] transform rotate-3 -z-10" />

                        <div className="rounded-[2rem] overflow-hidden shadow-soft relative group">
                            <div className="absolute inset-0 bg-floral-green/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop"
                                alt="Elegant wedding floral decoration"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 aspect-[4/5]"
                            />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-soft border border-blush/50 hidden md:block"
                        >
                            <p className="font-heading text-2xl text-gold mb-1">10+ Years</p>
                            <p className="font-body text-sm text-floral-green/80 uppercase tracking-widest">Of Excellence</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
