import React from 'react';

const VideoSection: React.FC = () => (
    // AJUSTE 1: Espaçamento vertical adaptável
    <section id="video" className="bg-brand-pink-light py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                {/* AJUSTE 2: Tamanhos dos textos responsivos */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Mensagem para as Famílias</h2>
                <p className="text-black-600 text-base md:text-lg">
                    Assista a este vídeo para entender melhor minha abordagem e como posso ajudar sua família nesta jornada.
                </p>
            </div>
            {/* AJUSTE 3: Aumentado o tamanho máximo do vídeo */}
            <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden">
                <div className="relative w-full pt-[56.25%] bg-black">
                    <iframe
                        // AJUSTE 4: URL atualizada sem autoplay e com som mudo
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