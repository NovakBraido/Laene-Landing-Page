import React from 'react';
import CtaButton from './common/CtaButton';

const Hero: React.FC = () => (
    <section className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                    Diagnóstico e Tratamento de Autismo e TDAH
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                    Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna, humanizada e baseada em evidências.
                </p>
                <CtaButton>Quero Agendar uma Avaliação</CtaButton>
            </div>
        </div>
    </section>
);

export default Hero;