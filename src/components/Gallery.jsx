import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Papa from 'papaparse';

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        Papa.parse('/data/gallery.csv', {
            download: true,
            header: true,
            complete: (results) => {
                const parsedData = results.data.filter(row => row.id && row.src);
                setGalleryImages(parsedData);
            }
        });
    }, []);

    return (
        <section id="gallery" className="py-16 md:py-24 bg-cream relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-heading text-floral-green mb-4 sm:mb-6"
                    >
                        A Glimpse of Joy
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg text-floral-green/70 font-body px-2"
                    >
                        Browse through our gallery of curated moments, brought to life with our finest floral designs.
                    </motion.p>
                </div>

                {/* Masonry-style CSS Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group ${img.cls}`}
                            onClick={() => setSelectedImg(img)}
                        >
                            <div className="absolute inset-0 bg-floral-green/20 group-hover:bg-floral-green/0 transition-colors duration-500 z-10" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-floral-green/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gold transition-colors z-50"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={30} strokeWidth={1.5} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex justify-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.alt}
                                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border-4 border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
