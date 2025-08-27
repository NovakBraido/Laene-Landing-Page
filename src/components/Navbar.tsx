import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ícones (sem alterações)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/75 backdrop-blur-md sticky top-0 z-40 shadow-md border-b border-gray-200 relative">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-extrabold text-brand-pink tracking-tight hover:text-brand-pink/80 transition-colors duration-300 cursor-pointer">
                    Dra. Laenne Valentim
                </div>

                {/* CORREÇÃO: Navegação para Desktop agora aparece a partir de 'lg' (1024px) */}
                <nav className="hidden lg:flex items-center space-x-8 font-medium">
                    <AnimatedNavLink href="#servicos">Serviços</AnimatedNavLink>
                    <AnimatedNavLink href="#sobre">Sobre Mim</AnimatedNavLink>
                    <AnimatedNavLink href="#depoimentos">Depoimentos</AnimatedNavLink>
                    <AnimatedNavLink href="#faq">Dúvidas</AnimatedNavLink>
                </nav>

                {/* CORREÇÃO: Botão CTA para Desktop agora aparece a partir de 'lg' */}
                <motion.a
                    href="https://linktr.ee/dralaennevalentim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-block bg-brand-pink text-white font-semibold py-2.5 px-6 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    Agendar Consulta
                </motion.a>

                {/* CORREÇÃO: Botão Hambúrguer agora desaparece a partir de 'lg' */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* CORREÇÃO: Painel do Menu Mobile agora é escondido a partir de 'lg' */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
                    >
                        <nav className="flex flex-col items-center space-y-6 py-8">
                            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-800 font-medium">Serviços</a>
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-800 font-medium">Sobre Mim</a>
                            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-800 font-medium">Depoimentos</a>
                            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-800 font-medium">Dúvidas</a>
                            <a
                                href="https://linktr.ee/dralaennevalentim"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-pink text-white font-semibold py-3 px-8 rounded-lg shadow-md mt-4"
                            >
                                Agendar Consulta
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// Componente auxiliar (sem alterações)
const AnimatedNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <motion.div 
            className="relative"
            whileHover="hover"
        >
            <a href={href} className="text-gray-800 transition-colors duration-200">
                {children}
            </a>
            <motion.div
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-brand-pink"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
        </motion.div>
    );
};

export default Navbar;