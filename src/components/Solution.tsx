import React from 'react';
import { TargetIcon, ClipboardListIcon, LeafIcon } from './common/Icons';

const Solution: React.FC = () => (
    <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Uma Jornada de Cuidado Completa e Humanizada</h2>
            </div>
            
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <div 
                    aria-hidden="true" 
                    className="hidden lg:block absolute top-1/3 left-0 w-full h-px bg-gray-300 border-t border-dashed"
                ></div>

                {/* Card 1: Diagnóstico - Efeito de hover adicionado aqui */}
                <div className="relative bg-gradient-to-br from-rose-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center
                            transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:border-brand-pink/50">
                    <p className="font-semibold text-brand-pink mb-2">Passo 01</p>
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
                        <TargetIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Diagnóstico Preciso</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Utilizo protocolos e avaliações reconhecidas para um diagnóstico diferencial e assertivo de TEA e TDAH.</p>
                </div>

                {/* Card 2: Plano - Efeito de hover adicionado aqui */}
                <div className="relative bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center
                            transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:border-brand-pink/50">
                    <p className="font-semibold text-brand-pink mb-2">Passo 02</p>
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
                        <ClipboardListIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Plano Terapêutico Singular</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Desenvolvo um plano de tratamento personalizado, considerando as necessidades únicas da criança e o contexto familiar.</p>
                </div>

                {/* Card 3: Tratamento - Efeito de hover adicionado aqui */}
                <div className="relative bg-gradient-to-br from-fuchsia-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center
                            transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:border-brand-pink/50">
                    <p className="font-semibold text-brand-pink mb-2">Passo 03</p>
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
                        <LeafIcon className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">Tratamento com Cannabis Medicinal</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Avalio a indicação da Cannabis medicinal como uma opção terapêutica segura e eficaz para o manejo de sintomas associados.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Solution;