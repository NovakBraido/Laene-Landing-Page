import React from 'react';
// Importe o novo ícone
import { PlayCircleIcon } from './common/Icons';

const VideoSection: React.FC = () => (
    // SUGESTÃO: Adicionado 'relative' e 'overflow-hidden' para o novo fundo
    <section id="video" className="relative overflow-hidden bg-brand-pink-light py-16 md:py-20 lg:py-28">
        {/* NOVO: Elemento de fundo para dar profundidade e contexto visual */}
        <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-brand-pink/20 rounded-full blur-3xl opacity-50"
        ></div>
        
        {/* Container principal agora fica acima do fundo novo */}
        <div className="relative z-10 container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <PlayCircleIcon className="w-8 h-8 text-brand-pink" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Uma Mensagem para as Famílias</h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Assista a este vídeo para entender melhor minha abordagem e como posso ajudar sua família nesta jornada.
                </p>
            </div>
            
            {/* SUGESTÃO: Moldura de destaque para o vídeo */}
            <div className="max-w-6xl mx-auto p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl">
                <div className="relative w-full pt-[56.25%] bg-black rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/DVEQJCxQGbo?rel=0&modestbranding=1&iv_load_policy=3&mute=1"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Vídeo de Apresentação da Dra. Laenne Valentim"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;