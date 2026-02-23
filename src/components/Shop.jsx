import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Papa from 'papaparse';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Papa.parse('/data/shop.csv', {
            download: true,
            header: true,
            complete: (results) => {
                const parsedData = results.data.filter(row => row.id && row.name);
                setProducts(parsedData);
            }
        });
    }, []);

    return (
        <section id="shop" className="py-16 md:py-24 bg-white relative z-10">
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
                        Featured Products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg text-floral-green/70 font-body px-2"
                    >
                        Delight your loved ones with our signature handcrafted collections, available for delivery today.
                    </motion.p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-8 lg:gap-y-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-cream/30 rounded-2xl overflow-hidden hover:bg-cream/70 transition-colors duration-500 border border-blush/30 hover:shadow-soft"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-sage/10">
                                <div className="absolute inset-0 bg-floral-green/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm text-gold font-bold font-body text-xs sm:text-sm">
                                    {product.price}
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-heading text-floral-green mb-1 sm:mb-2">{product.name}</h3>
                                <p className="text-floral-green/70 font-body text-xs sm:text-sm mb-4 sm:mb-6 flex-grow leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Order Button */}
                                <div className="mt-auto">
                                    <a
                                        href={`https://wa.me/918709783627?text=Hi!%20I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-center items-center py-2.5 sm:py-3 px-4 border border-floral-green text-floral-green font-body font-medium rounded-xl hover:bg-floral-green hover:text-white transition-all duration-300 group/btn text-sm"
                                    >
                                        <ShoppingBag size={16} className="mr-2 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        Order via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Shop;
