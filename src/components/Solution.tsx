import React from 'react';
import { CheckCircle } from './common/Icons';

const Solution: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section id="servicos" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                {/* AJUSTE 2: Tamanho do título responsivo */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Jornada de Cuidado Completa e Humanizada</h2>
            </div>
            {/* A grade responsiva já estava ótima */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    {/* AJUSTE 3: Layout interno do card agora é responsivo */}
                    <div className="flex flex-col items-center text-center gap-4 mb-4 md:flex-row md:text-left">
                        <CheckCircle className="text-brand-pink w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
                        <h3 className="font-bold text-xl md:text-2xl text-gray-800">Diagnóstico Preciso</h3>
                    </div>
                    <p className="text-gray-600 text-center md:text-left">Utilizo protocolos e avaliações reconhecidas para um diagnóstico diferencial e assertivo de Transtorno do Espectro Autista (TEA) e TDAH.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex flex-col items-center text-center gap-4 mb-4 md:flex-row md:text-left">
                        <CheckCircle className="text-brand-pink w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
                        <h3 className="font-bold text-xl md:text-2xl text-gray-800">Plano Terapêutico Singular</h3>
                    </div>
                    <p className="text-gray-600 text-center md:text-left">Desenvolvo um plano de tratamento personalizado, considerando as necessidades únicas da criança e o contexto familiar, com acompanhamento contínuo.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex flex-col items-center text-center gap-4 mb-4 md:flex-row md:text-left">
                        <CheckCircle className="text-brand-pink w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
                        <h3 className="font-bold text-xl md:text-2xl text-gray-800">Tratamento com Cannabis Medicinal</h3>
                    </div>
                    <p className="text-gray-600 text-center md:text-left">Como prescritora certificada, avalio a indicação da Cannabis medicinal como uma opção terapêutica segura e eficaz para o manejo de sintomas associados.</p>
                </div>

            </div>
        </div>
    </section>
);

export default Solution;