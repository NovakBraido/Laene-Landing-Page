import React from 'react';

const Problem: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section id="problema" className="bg-brand-pink-light py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                {/* AJUSTE 2: Tamanho do título responsivo */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Você se sente perdido(a) sem saber como ajudar?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* AJUSTE 3: Espaçamento e textos dos cards agora são responsivos */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-lg md:text-xl text-black-600 mb-3">Dificuldades na Escola</h3>
                    <p className="text-black-600">Seu filho(a) apresenta problemas de concentração, aprendizado ou interação com os colegas e você não sabe a causa?</p>
                </div>
                <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-lg md:text-xl text-black-600 mb-3">Comportamentos Desafiadores</h3>
                    <p className="text-black-600">Crises de choro, seletividade alimentar, dificuldades com mudanças na rotina ou comportamentos repetitivos são frequentes?</p>
                </div>
                <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-lg md:text-xl text-black-600 mb-3">Incerteza e Medo do Futuro</h3>
                    <p className="text-black-600">A falta de um diagnóstico claro gera insegurança sobre como garantir o melhor desenvolvimento e bem-estar para seu filho(a)?</p>
                </div>
            </div>
        </div>
    </section>
);

export default Problem;