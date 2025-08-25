import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialsData } from '../data/content';

const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que as famílias dizem</h2>
                    <p className="text-gray-600 text-lg">
                        A confiança e o resultado de quem já trilhou essa jornada comigo é minha maior recompensa.
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.2,
                            centeredSlides: true,
                        },
                        0: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className="max-w-5xl mx-auto"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="pb-12">
                            <div className="bg-brand-pink-light p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                                <p className="text-gray-800 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="font-bold text-gray-800">{testimonial.author}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;