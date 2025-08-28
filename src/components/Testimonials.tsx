import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Imports de estilo
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { testimonialsData } from '../data/content';

const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">O que as famílias dizem</h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        A confiança e o resultado de quem já trilhou essa jornada comigo é minha maior recompensa.
                    </p>
                </div>
                
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full pb-16"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                             <motion.div 
                                className="bg-slate-50 p-6 md:p-8 rounded-2xl shadow-lg h-full flex flex-col border border-gray-100"
                                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex-grow">
                                    <span className="text-7xl font-serif text-brand-pink opacity-20 absolute top-4 left-4 sm:top-6 sm:left-6">“</span>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic pt-8">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 mt-6 pt-6 text-right">
                                    <p className="font-bold text-brand-pink">— {testimonial.author}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;