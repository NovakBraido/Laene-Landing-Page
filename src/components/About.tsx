import React from 'react';
import { CheckCircle } from './common/Icons';

const About: React.FC = () => (
    <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                <div className="md:w-1/3">
                    <img
                        src="/laene2.jpg"
                        alt="Dra. Laenne Valentim"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conheça a Dra. Laenne Valentim</h2>
                    <p className="text-gray-600 mb-4 text-lg">
                        Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                    </p>
                    <p className="text-gray-600 mb-4 text-lg">
                        Acredito em uma medicina que olha para o paciente de forma integral.
                    </p>
                    <p className="text-gray-600 mb-8 text-lg">
                        Por isso, busco constantemente atualizações e novas abordagens terapêuticas, como a Cannabis medicinal, para oferecer o que há de mais moderno e eficaz, sempre com segurança e responsabilidade.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Família e Comunidade</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Certificação em Autismo</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
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