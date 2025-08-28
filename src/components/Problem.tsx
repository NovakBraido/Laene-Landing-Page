import React from 'react';
import { motion } from 'framer-motion';
import { BookMarkedIcon, SirenIcon, CompassIcon } from './common/Icons';

const Problem: React.FC = () => (
    <section id="problema" className="bg-brand-pink-light py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Você se sente perdido(a) sem saber como ajudar?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <motion.div 
                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-pink-light mb-6">
                        <BookMarkedIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Dificuldades na Escola</h3>
                    <p className="text-gray-600 leading-relaxed">Seu filho(a) apresenta problemas de concentração, aprendizado ou interação com os colegas e você não sabe a causa?</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-pink-light mb-6">
                        <SirenIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Comportamentos Desafiadores</h3>
                    <p className="text-gray-600 leading-relaxed">Crises de choro, seletividade alimentar, dificuldades com mudanças na rotina ou comportamentos repetitivos são frequentes?</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-pink-light mb-6">
                        <CompassIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Incerteza e Medo do Futuro</h3>
                    <p className="text-gray-600 leading-relaxed">A falta de um diagnóstico claro gera insegurança sobre como garantir o melhor desenvolvimento e bem-estar para seu filho(a)?</p>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Problem;