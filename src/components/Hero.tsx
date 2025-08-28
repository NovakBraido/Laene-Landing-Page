import React from 'react';
import CtaButton from './common/CtaButton';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
// Importe os novos ícones que você adicionou
import { BrainCircuitIcon, HeartPulseIcon, DnaIcon } from './common/Icons';


const Hero: React.FC = () => (
    // SUGESTÃO: Fundo mais sutil com gradiente suave
    <section className="bg-gradient-to-br from-white via-pink-50 to-rose-100/50 py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-y-12 md:gap-x-16 text-center md:text-left">
                
                {/* SUGESTÃO: Quebra de título corrigida (coluna mais larga) */}
                <div className="md:w-7/12 lg:w-1/2">
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
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
                    </motion.h1>
                </div>

                <div className="md:w-5/12 lg:w-1/2 flex flex-col items-center md:items-start">
                    <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-md">
                        Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna e baseada em evidências.
                    </p>
                    
                    {/* SUGESTÃO: Diferenciar o CTA com tamanho e ícone */}
                    <CtaButton className="text-lg py-4 px-8 shadow-lg shadow-brand-pink/30 hover:shadow-xl hover:shadow-brand-pink/40">
                        Quero Agendar uma Avaliação
                    </CtaButton>
                    
                    {/* SUGESTÃO: Elementos visuais de confiança médica */}
                    <div className="flex space-x-8 mt-12 text-gray-500">
                        <div className="flex items-center gap-2">
                            <BrainCircuitIcon className="w-5 h-5" />
                            <span className="text-sm">Neurodesenvolvimento</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HeartPulseIcon className="w-5 h-5" />
                            <span className="text-sm">Cuidado Humanizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DnaIcon className="w-5 h-5" />
                            <span className="text-sm">Baseado em Evidências</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;