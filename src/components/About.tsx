import React from 'react';
import { UsersIcon, RibbonIcon, LeafIcon } from './common/Icons';

const About: React.FC = () => (
    <section id="sobre" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
            {/* --- NOVA ESTRUTURA: Container Flex para as duas colunas --- */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                
                {/* --- Coluna da Imagem (Esquerda) --- */}
                <div className="md:w-2/5 w-full max-w-sm mx-auto">
                    <div className="p-1.5 rounded-xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
                                   transition-all duration-300 ease-in-out hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                        <img
                            src="/laene3.jpeg" 
                            alt="Dra. Laenne Valentim em seu consultório"
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* --- Coluna do Texto (Direita) --- */}
                <div className="md:w-3/5">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Conheça a Dra. Laenne Valentim
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        <div className="bg-slate-50/75 p-4 rounded-xl border border-gray-200/80 transition-shadow hover:shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-pink/10 p-3 rounded-lg">
                                    <UsersIcon className="w-6 h-6 text-brand-pink" />
                                </div>
                                <p className="font-semibold text-gray-800">Família e Comunidade</p>
                            </div>
                        </div>

                        <div className="bg-slate-50/75 p-4 rounded-xl border border-gray-200/80 transition-shadow hover:shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-pink/10 p-3 rounded-lg">
                                    <RibbonIcon className="w-6 h-6 text-brand-pink" />
                                </div>
                                <p className="font-semibold text-gray-800">Certificação em Autismo</p>
                            </div>
                        </div>

                        <div className="bg-slate-50/75 p-4 rounded-xl border border-gray-200/80 transition-shadow hover:shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-pink/10 p-3 rounded-lg">
                                    <LeafIcon className="w-6 h-6 text-brand-pink" />
                                </div>
                                <p className="font-semibold text-gray-800">Cannabis Medicinal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;