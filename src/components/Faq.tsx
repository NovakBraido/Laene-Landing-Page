
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqItemProps } from './common/types';
import { ChevronDownIcon } from './common/Icons'; 
import { faqData } from '../data/content';

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            className={`bg-white rounded-xl transition-all duration-300 ${
                isOpen ? 'shadow-lg border-brand-pink/50' : 'shadow-sm border-gray-200/80'
            }`}
            whileHover={{ 
                y: -3, 
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" 
            }}
        >
            <button
                className="flex justify-between items-center w-full p-6 text-left gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg md:text-xl font-medium transition-colors ${
                    isOpen ? 'text-brand-pink' : 'text-gray-800'
                }`}>
                    {question}
                </span>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 transition-colors ${
                        isOpen ? 'text-brand-pink' : 'text-gray-500'
                    }`}
                >
                    <ChevronDownIcon className="w-6 h-6" />
                </motion.div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 px-6 pb-6 text-base md:text-lg leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Faq: React.FC = () => {
    return (
        <section id="faq" className="bg-brand-pink-light py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes</h2>
                    <p className="text-gray-700 text-base md:text-lg">
                        Esclareça alguns pontos importantes antes de agendar sua consulta.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;