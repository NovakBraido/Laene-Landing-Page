import React from 'react';
import { CtaButtonProps } from './types';

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '' }) => (
    <a
        href="https://linktr.ee/dralaennevalentim"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block bg-brand-pink text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-brand-pink/90 transition-all transform hover:scale-105 duration-300 ease-in-out ${className}`}
    >
        {children}
    </a>
);

export default CtaButton;