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

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="bg-white/75 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-gray-200/80 relative">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* HIERARQUIA: Cor do logo alterada para não competir com o CTA. Efeito hover sutil para a cor da marca. */}
                <div 
                    onClick={handleScrollToTop} 
                    className="text-2xl font-extrabold text-gray-800 tracking-tight hover:text-brand-pink transition-colors duration-300 cursor-pointer"
                >
                    Dra. Laenne Valentim
                </div>

                {/* MINIMALISMO: Aumentado o espaçamento para um visual mais "aerado". */}
                <nav className="hidden lg:flex items-center space-x-10 font-medium">
                    <AnimatedNavLink href="#servicos">Serviços</AnimatedNavLink>
                    <AnimatedNavLink href="#sobre">Sobre Mim</AnimatedNavLink>
                    <AnimatedNavLink href="#depoimentos">Depoimentos</AnimatedNavLink>
                    <AnimatedNavLink href="#faq">Dúvidas</AnimatedNavLink>
                </nav>

                {/* DESTAQUE: O botão CTA agora é o principal ponto de cor, se destacando naturalmente. */}
                <motion.a
                    href="https://linktr.ee/dralaennevalentim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-block bg-brand-pink text-white font-semibold py-2.5 px-6 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(255, 0, 132, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    Agendar Consulta
                </motion.a>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
                    >
                        {/* HIERARQUIA: Cores dos links do menu mobile também foram suavizadas. */}
                        <nav className="flex flex-col items-center space-y-6 py-8">
                            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-brand-pink font-medium transition-colors">Serviços</a>
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-brand-pink font-medium transition-colors">Sobre Mim</a>
                            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-brand-pink font-medium transition-colors">Depoimentos</a>
                            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-brand-pink font-medium transition-colors">Dúvidas</a>
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

// EFEITOS SUTIS: Cor do texto suavizada e efeito hover mais elegante.
const AnimatedNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <motion.div 
            className="relative"
            whileHover="hover"
        >
            <a href={href} className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                {children}
            </a>
            <motion.div
                className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-brand-pink"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1, originX: 0.5 } }} // Garante que a linha cresça do centro
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
        </motion.div>
    );
};

export default Navbar;