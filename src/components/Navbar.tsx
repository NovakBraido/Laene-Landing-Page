import React from 'react';
import { motion } from 'framer-motion'; // 1. Importar o 'motion'

const Navbar: React.FC = () => (
    <header className="bg-white/65 backdrop-blur-md sticky top-0 z-40 shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
<div className="text-2xl font-extrabold text-brand-pink tracking-tight hover:text-black/100 transition-colors duration-300 cursor-pointer">
    Dra. Laenne Valentim
</div>


            {/* Navegação Animada */}
            <nav className="hidden md:flex items-center space-x-8 font-medium">
                <AnimatedNavLink href="#servicos">Serviços</AnimatedNavLink>
                <AnimatedNavLink href="#sobre">Sobre Mim</AnimatedNavLink>
                <AnimatedNavLink href="#depoimentos">Depoimentos</AnimatedNavLink>
                <AnimatedNavLink href="#faq">Dúvidas</AnimatedNavLink>
            </nav>

            {/* Botão CTA com Animação de Acento */}
            <motion.a
                href="https://linktr.ee/dralaennevalentim"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block bg-brand-pink text-white font-semibold py-2.5 px-6 rounded-lg shadow-md"
                whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.4)" 
                }} // Animação de escala e sombra ao passar o mouse
                transition={{ type: "spring", stiffness: 300, damping: 20 }} // Efeito "mola" suave
            >
                Agendar Consulta
            </motion.a>
        </div>
    </header>
);

// Componente auxiliar para os links animados da navegação
const AnimatedNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <motion.div 
            className="relative"
            whileHover="hover" // Ativa o estado "hover" para os componentes filhos
        >
            <a href={href} className="text-gray-800 transition-colors duration-200">
                {children}
            </a>
            {/* A linha de sublinhado animada */}
            <motion.div
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-brand-pink"
                initial={{ scaleX: 0 }} // Estado inicial: sem largura
                variants={{
                    hover: { scaleX: 1 } // Estado "hover": largura total
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }} // Animação suave
            />
        </motion.div>
    );
};


export default Navbar;