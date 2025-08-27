import React from 'react';
import CtaButton from './common/CtaButton';

const CtaSection: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section className="bg-brand-pink text-white">
        <div className="container mx-auto px-6 py-16 md:py-20 text-center">
            {/* AJUSTE 2: Tamanho do título responsivo */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Dê o primeiro passo para a transformação que sua família precisa.
            </h2>
            <p className="text-pink-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
                Chega de incertezas. Agende uma consulta de avaliação e vamos juntos construir um futuro com mais qualidade de vida, compreensão e felicidade para seu filho(a).
            </p>
            <CtaButton
                // AJUSTE 3: Tamanho do botão adaptável
                className="bg-white !text-brand-pink border border-gray-300 shadow-lg 
                           hover:bg-gray-100 hover:shadow-xl transition-all duration-200 
                           transform hover:-translate-y-1 cursor-pointer font-semibold 
                           py-3 px-6 md:py-4 md:px-8 rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-brand-pink focus:ring-offset-2"
            >
                Quero Agendar uma Avaliação
            </CtaButton>
        </div>
    </section>
);

export default CtaSection;