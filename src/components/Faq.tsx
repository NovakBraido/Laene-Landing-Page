import React, { useState } from 'react';
import { FaqItemProps } from './common/types';
import { Plus } from './common/Icons';
import { faqData } from '../data/content';

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-6 text-left gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* AJUSTE 3: Tamanho da fonte da pergunta responsivo */}
                <span className="text-lg md:text-xl font-medium text-gray-800">{question}</span>
                <span
                    className={`text-2xl text-gray-600 transition-transform duration-500 ease-in-out flex-shrink-0 ${
                        isOpen ? 'rotate-45' : ''
                    }`}
                >
                    <Plus className="w-6 h-6" />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
                {/* AJUSTE 4: Tamanho e espaçamento da resposta otimizados */}
                <p className="text-gray-600 pb-6 pr-4 md:pr-10 text-base md:text-lg leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    return (
        // AJUSTE 1: Espaçamento vertical adaptável
        <section id="faq" className="bg-brand-pink-light py-16 md:py-20 lg:pb-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    {/* AJUSTE 2: Tamanhos dos textos do cabeçalho responsivos */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes</h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Esclareça alguns pontos importantes antes de agendar sua consulta.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;