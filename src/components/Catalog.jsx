import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Papa from 'papaparse';

const Catalog = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Papa.parse('/data/catalog.csv', {
            download: true,
            header: true,
            complete: (results) => {
                const parsedData = results.data.filter(row => row.title && row.image);
                setCategories(parsedData);
            }
        });
    }, []);

    return (
        <section id="catalog" className="py-16 md:py-24 bg-cream relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-heading text-floral-green mb-4 sm:mb-6"
                    >
                        Our Floral Collections
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg text-floral-green/70 font-body px-2"
                    >
                        Explore our meticulously crafted arrangements, tailored for every sentiment and occasion.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-500 transform hover:-translate-y-2 border border-blush/30"
                        >
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-sage/10">
                                <div className="absolute inset-0 bg-floral-green/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            <div className="p-5 sm:p-6 md:p-8 flex flex-col bg-gradient-to-b from-white to-cream/20">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-floral-green mb-2 sm:mb-3">{category.title}</h3>
                                <p className="text-floral-green/70 font-body text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                                    {category.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="mt-auto inline-flex items-center text-gold font-medium font-body hover:text-floral-green transition-colors duration-300 w-fit group/btn text-sm"
                                >
                                    Inquire Now
                                    <svg className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Catalog;
