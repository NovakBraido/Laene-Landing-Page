import React from 'react';
import CtaButton from './common/CtaButton';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => (
    <section className="bg-brand-pink-light py-24 md:py-32">
        <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-y-12 md:gap-x-20 text-center md:text-left">
                
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Respostas e acolhimento para o{' '}
                        <span className="text-brand-pink">
                            <ReactTyped
                                strings={['Autismo e TDAH']}
                                typeSpeed={60}
                                backSpeed={160}
                                loop
                                showCursor={true}
                                cursorChar="|"
                            />
                        </span>
                    </h1>
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg md:text-xl text-black-800 mb-10 leading-relaxed">
                        Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna e baseada em evidências.
                    </p>
                    <div className="text-center">
                        <CtaButton>Quero Agendar uma Avaliação</CtaButton>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;