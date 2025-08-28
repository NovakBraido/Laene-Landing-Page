import React from 'react';
import CtaButton from './common/CtaButton';
// Importe os novos ícones
import { SparklesIcon, ArrowRightIcon } from './common/Icons';

const CtaSection: React.FC = () => (
    // SUGESTÃO: Usar gradiente mais suave e adicionar 'relative' para elementos gráficos
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-pink to-rose-600 text-white">
        <div className="container relative z-10 mx-auto px-6 py-16 md:py-24 text-center">
            
            {/* SUGESTÃO: Adicionar elementos gráficos que reforcem a mensagem */}
            <div className="mb-8">
                <SparklesIcon className="w-12 h-12 text-white/80 mx-auto" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Dê o primeiro passo para a transformação que sua família precisa.
            </h2>
            <p className="text-rose-100 text-base sm:text-lg max-w-2xl mx-auto mb-12">
                Chega de incertezas. Agende uma consulta de avaliação e vamos juntos construir um futuro com mais qualidade de vida, compreensão e felicidade para seu filho(a).
            </p>

            {/* SUGESTÃO: Criar um botão CTA mais impactante */}
            <CtaButton
                className="bg-white !text-brand-pink text-lg font-bold shadow-2xl 
                           hover:bg-gray-100 hover:shadow-brand-pink/40 
                           transition-all duration-300 transform hover:-translate-y-1 
                           py-4 px-8 rounded-lg focus:outline-none focus:ring-4 
                           focus:ring-white/50"
            >
                <span className="flex items-center justify-center gap-3">
                    Quero Agendar uma Avaliação
                    <ArrowRightIcon className="w-6 h-6" />
                </span>
            </CtaButton>
        </div>
    </section>
);

export default CtaSection;