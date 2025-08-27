import React from 'react';
import { CheckCircle } from './common/Icons';

const About: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section id="sobre" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* A imagem já estava bem responsiva, sem necessidade de alteração */}
                <div className="md:w-1/3">
                    <img
                        src="/laene2.jpg"
                        alt="Dra. Laenne Valentim"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover max-w-sm mx-auto md:max-w-full"
                    />
                </div>
                <div className="md:w-2/3">
                    {/* O título e os parágrafos também já estavam bem configurados */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">Conheça a Dra. Laenne Valentim</h2>
                    <p className="text-black-600 mb-4 text-lg text-center md:text-left">
                        Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                    </p>
                    {/* AJUSTE 2: Alinhamento dos cards de destaque */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            {/* Mudanças aqui para centralizar no mobile */}
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3">
                                <CheckCircle className="text-brand-pink w-6 h-6 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Família e Comunidade</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                             {/* Mudanças aqui para centralizar no mobile */}
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3">
                                <CheckCircle className="text-brand-pink w-6 h-6 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Certificação em Autismo</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                             {/* Mudanças aqui para centralizar no mobile */}
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3">
                                <CheckCircle className="text-brand-pink w-6 h-6 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Cannabis Medicinal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;