import React from 'react';

const Navbar: React.FC = () => (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-brand-pink transition-colors cursor-pointer">
                Dra. Laenne Valentim
            </div>
            <nav className="hidden md:flex items-center space-x-8 font-medium">
                <a href="#servicos" className="text-gray-800 hover:text-brand-pink transition-colors duration-200">
                    Serviços
                </a>
                <a href="#sobre" className="text-gray-800 hover:text-brand-pink transition-colors duration-200">
                    Sobre Mim
                </a>
                <a href="#depoimentos" className="text-gray-800 hover:text-brand-pink transition-colors duration-200">
                    Depoimentos
                </a>
                <a href="#faq" className="text-gray-800 hover:text-brand-pink transition-colors duration-200">
                    Dúvidas
                </a>
            </nav>
            <a
                href="https://linktr.ee/dralaennevalentim"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block bg-brand-pink text-white font-semibold py-2.5 px-6 rounded-lg 
                            shadow-md transition-all duration-300 ease-out 
                            hover:bg-brand-pink/90 hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
                Agendar Consulta
            </a>
        </div>
    </header>
);

export default Navbar;