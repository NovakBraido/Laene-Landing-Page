import React from 'react';
import { ExitIntentModalProps } from './common/types';
import { X } from './common/Icons';
import CtaButton from './common/CtaButton';

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        // AJUSTE 1: Um pouco mais de espaço nas laterais em telas pequenas
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-lg w-full relative transform transition-all animate-slide-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Espere, não vá ainda!</h2>
                {/* AJUSTE 2: Tamanho do texto e espaçamento entre linhas adaptáveis */}
                <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                    Sabemos que a jornada pode ser cheia de dúvidas. Dê o primeiro e mais importante passo para obter as respostas que sua família precisa.
                </p>
                {/* AJUSTE 3: Tamanho do botão adaptável */}
                <CtaButton className="text-base md:text-lg py-3 px-6 md:py-4 md:px-8">
                    Agendar uma Avaliação Agora
                </CtaButton>
            </div>
        </div>
    );
};

export default ExitIntentModal;