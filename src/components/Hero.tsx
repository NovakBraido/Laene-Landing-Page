import React from 'react';
import CtaButton from './common/CtaButton';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section className="bg-brand-pink-light py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-y-12 md:gap-x-20 text-center md:text-left">
                
                <div className="md:w-1/2">
                    {/* AJUSTE 2: Tamanho do título agora é responsivo */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Respostas e acolhimento para o{' '}
                        <span className="text-brand-pink">
                            <ReactTyped
                                strings={['Autismo e TDAH']}
                                typeSpeed={100}
                                backSpeed={180}
                                loop
                                showCursor={true}
                                cursorChar="|"
                            />
                        </span>
                    </h1>
                </div>
                <div className="md:w-1/2">
                    {/* AJUSTE 3: Corrigida a classe de cor do texto */}
                    <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                        Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna e baseada em evidências.
                    </p>
                    <div className="md:text-center lg:text-left"> {/* Ajuste fino no alinhamento do botão */}
                        <CtaButton>Quero Agendar uma Avaliação</CtaButton>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;