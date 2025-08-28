import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExitIntentModalProps } from './common/types';
import { X } from './common/Icons';
import CtaButton from './common/CtaButton';

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-lg w-full relative"
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Espere, não vá ainda!</h2>
                        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                            Sabemos que a jornada pode ser cheia de dúvidas. Dê o primeiro e mais importante passo para obter as respostas que sua família precisa.
                        </p>
                        <CtaButton className="text-base md:text-lg py-3 px-6 md:py-4 md:px-8">
                            Agendar uma Avaliação Agora
                        </CtaButton>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentModal;