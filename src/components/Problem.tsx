import React from 'react';

const Problem: React.FC = () => (
    <section id="problema" className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Você se sente perdido(a) sem saber como ajudar?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Dificuldades na Escola</h3>
                    <p className="text-gray-600">Seu filho(a) apresenta problemas de concentração, aprendizado ou interação com os colegas e você não sabe a causa?</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Comportamentos Desafiadores</h3>
                    <p className="text-gray-600">Crises de choro, seletividade alimentar, dificuldades com mudanças na rotina ou comportamentos repetitivos são frequentes?</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Incerteza e Medo do Futuro</h3>
                    <p className="text-gray-600">A falta de um diagnóstico claro gera insegurança sobre como garantir o melhor desenvolvimento e bem-estar para seu filho(a)?</p>
                </div>
            </div>
        </div>
    </section>
);

export default Problem;