import React from 'react';
import { CheckCircle } from './common/Icons';

const Solution: React.FC = () => (
    <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Jornada de Cuidado Completa e Humanizada</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Diagnóstico Preciso</h3>
                    </div>
                    <p className="text-gray-600">Utilizo protocolos e avaliações reconhecidas para um diagnóstico diferencial e assertivo de Transtorno do Espectro Autista (TEA) e TDAH.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Plano Terapêutico Singular</h3>
                    </div>
                    <p className="text-gray-600">Desenvolvo um plano de tratamento personalizado, considerando as necessidades únicas da criança e o contexto familiar, com acompanhamento contínuo.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Tratamento com Cannabis Medicinal</h3>
                    </div>
                    <p className="text-gray-600">Como prescritora certificada, avalio a indicação da Cannabis medicinal como uma opção terapêutica segura e eficaz para o manejo de sintomas associados.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Solution;