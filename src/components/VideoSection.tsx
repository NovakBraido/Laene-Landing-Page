import React from 'react';

const VideoSection: React.FC = () => (
    <section id="video" className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Mensagem para as Famílias</h2>
                <p className="text-gray-600 text-lg">
                    Assista a este vídeo para entender melhor minha abordagem e como posso ajudar sua família nesta jornada.
                </p>
            </div>
            <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
                <div className="relative w-full pt-[56.25%] bg-black">
                    <iframe
                        src="https://www.youtube.com/embed/DVEQJCxQGbo?rel=0&modestbranding=1&autoplay=1&fs=0&iv_load_policy=3"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Vídeo de Apresentação"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;