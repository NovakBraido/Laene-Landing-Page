import React from 'react';
import CtaButton from './common/CtaButton';

const CtaSection: React.FC = () => (
    <section className="bg-brand-pink text-white">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dê o primeiro passo para a transformação que sua família precisa.
            </h2>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-10">
                Chega de incertezas. Agende uma consulta de avaliação e vamos juntos construir um futuro com mais qualidade de vida, compreensão e felicidade para seu filho(a).
            </p>
            <CtaButton
                className="bg-white !text-brand-pink border border-gray-300 shadow-lg 
                           hover:bg-gray-100 hover:shadow-xl transition-all duration-200 
                           transform hover:-translate-y-1 cursor-pointer font-semibold 
                           px-8 py-4 rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-brand-pink focus:ring-offset-2"
            >
                Quero Agendar uma Avaliação
            </CtaButton>
        </div>
    </section>
);

export default CtaSection;