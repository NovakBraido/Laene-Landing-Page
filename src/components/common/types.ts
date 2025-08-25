import { ReactNode } from 'react';

export interface SVGProps {
    className?: string;
}

export interface CtaButtonProps {
    children: ReactNode;
    className?: string;
}

export interface FaqItemProps {
    question: string;
    answer: string;
}

export interface ExitIntentModalProps {
    isOpen: boolean;
    onClose: () => void;
}