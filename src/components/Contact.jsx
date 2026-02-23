import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-blush/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading text-floral-green mb-6"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-floral-green/70 font-body"
                    >
                        Ready to add floral elegance to your life? Reach out to us for orders, inquiries, or custom designs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-soft border border-gold/10">

                    {/* Contact Information */}
                    <div className="p-10 lg:p-14 bg-floral-green text-cream relative overflow-hidden">
                        {/* Decorative background circle */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                        <h3 className="text-3xl font-heading mb-8 relative z-10">Contact Information</h3>

                        <div className="space-y-8 relative z-10">
                            <a href="tel:+919709783627" className="flex items-start class flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mr-4 group-hover:bg-gold transition-colors">
                                    <Phone size={20} className="text-cream group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-sm text-cream/70 uppercase tracking-wider mb-1">Phone</p>
                                    <p className="font-heading text-xl">+91 9709783627</p>
                                </div>
                            </a>

                            <a href="https://wa.me/919709783627" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                                    <MessageCircle size={20} className="text-cream group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-sm text-cream/70 uppercase tracking-wider mb-1">WhatsApp</p>
                                    <p className="font-heading text-xl">+91 9709783627</p>
                                </div>
                            </a>

                            <a href="mailto:omkarflowershop@gmail.com" className="flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mr-4 group-hover:bg-gold transition-colors">
                                    <Mail size={20} className="text-cream group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-sm text-cream/70 uppercase tracking-wider mb-1">Email</p>
                                    <p className="font-heading text-lg break-all">omkarflowershop@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://goo.gl/maps/MorabadiRanchi" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mr-4 group-hover:bg-gold transition-colors flex-shrink-0">
                                    <MapPin size={20} className="text-cream group-hover:text-white" />
                                </div>
                                <div className="max-w-[80%]">
                                    <p className="font-body text-sm text-cream/70 uppercase tracking-wider mb-1">Address</p>
                                    <p className="font-heading text-lg leading-snug">Opp. Hanuman Mandir, Morabadi, Ranchi</p>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/omkar_flowers_?igsh=NDFseHlkcDJqZ2Yx_" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center mr-4 group-hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 transition-all">
                                    <Instagram size={20} className="text-cream group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-sm text-cream/70 uppercase tracking-wider mb-1">Instagram</p>
                                    <p className="font-heading text-lg break-all">@omkar_flowers_</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Map Embed Location */}
                    <div className="h-[400px] lg:h-auto min-h-[400px] relative w-full bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14656.331406859424!2d85.3188!3d23.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e17e8841a0e1%3A0xe24d275727b2d5a3!2sMorabadi%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            title="OmKar Flowers Location Map"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
