import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Imports de estilo (sem alterações)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { testimonialsData } from '../data/content';

// Componente do ícone de aspas (sem alterações)
const QuoteIcon = () => (
    <svg className="absolute top-6 left-6 w-16 h-16 text-brand-pink opacity-10" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.33,12.49c-0.57,0.28-1.07,0.7-1.49,1.25c-0.42,0.55-0.76,1.19-1.02,1.9c-0.26,0.71-0.39,1.49-0.39,2.34 c0,1.21,0.31,2.2,0.94,2.99s1.51,1.18,2.64,1.18c0.9,0,1.69-0.26,2.37-0.79s1.2-1.27,1.54-2.24c-0.57-0.19-1.09-0.49-1.54-0.91 c-0.45-0.42-0.81-0.9-1.08-1.45c-0.27-0.55-0.4-1.12-0.4-1.71c0-0.64,0.19-1.21,0.57-1.71s0.83-0.75,1.38-0.75 c0.05,0,0.1,0,0.15,0.01C12.55,12.02,12.72,11.53,12.7,11C12.42,8.18,10.63,6,9,6C7.51,6,6.24,6.66,5.33,7.7 C4.42,8.74,4,10.06,4,11.5c0,1.69,0.5,3.17,1.5,4.44s2.3,1.9,3.9,1.9c1.93,0,3.5-0.89,4.48-2.67c0.18-0.33,0.29-0.68,0.38-1.04 C14.59,13.25,14.22,12.51,13.53,12.14C12.21,11.49,10.73,11.64,9.33,12.49z M22.33,12.49c-0.57,0.28-1.07,0.7-1.49,1.25 c-0.42,0.55-0.76,1.19-1.02,1.9c-0.26,0.71-0.39,1.49-0.39,2.34c0,1.21,0.31,2.2,0.94,2.99s1.51,1.18,2.64,1.18 c0.9,0,1.69-0.26,2.37-0.79s1.2-1.27,1.54-2.24c-0.57-0.19-1.09-0.49-1.54-0.91c-0.45-0.42-0.81-0.9-1.08-1.45 c-0.27-0.55-0.4-1.12-0.4-1.71c0-0.64,0.19-1.21,0.57-1.71s0.83-0.75,1.38-0.75c0.05,0,0.1,0,0.15,0.01 C25.55,12.02,25.72,11.53,25.7,11c-0.28-2.82-2.07-5-3.7-5c-1.49,0-2.76,0.66-3.67,1.7C17.42,8.74,17,10.06,17,11.5 c0,1.69,0.5,3.17,1.5,4.44s2.3,1.9,3.9,1.9c1.93,0,3.5-0.89,4.48-2.67c0.18-0.33,0.29-0.68,0.38-1.04 C27.59,13.25,27.22,12.51,26.53,12.14C25.21,11.49,23.73,11.64,22.33,12.49z"></path>
    </svg>
);


const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {/* AJUSTE FINO: Tamanho do título e subtítulo */}
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
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full pb-16"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                             <motion.div 
                                className="bg-white p-8 rounded-2xl shadow-xl h-[380px] flex flex-col"
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <QuoteIcon />
                                <div className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-gray-100">
                                    <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                                </div>
                                <div className="font-bold text-brand-pink text-right mt-4 flex-shrink-0">
                                    — {testimonial.author}
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