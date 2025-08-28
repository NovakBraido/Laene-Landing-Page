import React from 'react';
import { UsersIcon, RibbonIcon, LeafIcon } from './common/Icons'; // Ícones já importados

const About: React.FC = () => (
    <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                
                {/* AQUI ESTÁ A MUDANÇA: Adicionadas classes de hover na imagem */}
                <div className="md:w-1/3">
                    <img
                        src="/laene3.jpeg" 
                        alt="Dra. Laenne Valentim em seu consultório"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover max-w-sm mx-auto md:max-w-full border-4 border-white
                                   transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-3xl"
                    />
                </div>
                
                <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">Conheça a Dra. Laenne Valentim</h2>
                    <p className="text-gray-700 mb-10 text-lg text-center md:text-left leading-relaxed">
                        Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-gray-50/75 p-6 rounded-xl border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-brand-pink/50 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <UsersIcon className="w-8 h-8 text-brand-pink" />
                                <p className="font-semibold text-gray-800">Família e Comunidade</p>
                            </div>
                        </div>

                        <div className="bg-gray-50/75 p-6 rounded-xl border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-brand-pink/50 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <RibbonIcon className="w-8 h-8 text-brand-pink" />
                                <p className="font-semibold text-gray-800">Certificação em Autismo</p>
                            </div>
                        </div>

                        <div className="bg-gray-50/75 p-6 rounded-xl border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-brand-pink/50 hover:-translate-y-1">
                            <div className="flex flex-col items-center text-center gap-3">
                                <LeafIcon className="w-8 h-8 text-brand-pink" />
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