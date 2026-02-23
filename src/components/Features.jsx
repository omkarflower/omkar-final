import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Palette, IndianRupee, Users, Truck, ShieldCheck } from 'lucide-react';

const features = [
    { icon: Leaf, text: 'Fresh Flowers Daily' },
    { icon: Palette, text: 'Customized Designs' },
    { icon: IndianRupee, text: 'Affordable Packages' },
    { icon: Users, text: 'Professional Decor Team' },
    { icon: Truck, text: 'On-Time Setup' },
    { icon: ShieldCheck, text: 'Serving Ranchi with Quality & Trust' },
];

const Features = () => {
    return (
        <section id="features" className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading text-floral-green mb-6"
                    >
                        Why Choose Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-floral-green/70 font-body"
                    >
                        We are committed to delivering excellence, ensuring your special moments are adorned with perfection.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-cream/40 rounded-2xl p-8 hover:bg-cream/80 transition-colors duration-300 flex flex-col items-center text-center group border border-blush/20 hover:border-gold/30"
                            >
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-floral-green mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:text-gold">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-heading text-floral-green mb-2">{feature.text}</h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
