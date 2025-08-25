import React from 'react';
import { InstagramIcon, } from './common/Icons';
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Dra. Laenne Valentim</h3>
                    <p className="text-gray-400">Especialista em Autismo e TDAH</p>
                    <p className="font-mono mt-1 text-white-100 text-xl">CRM 6751-RQE3445</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Navegue pelo Site</h3>
                    <ul className="space-y-2">
                        <li><a href="#servicos" className="text-gray-200 hover:text-white transition-colors">Serviços</a></li>
                        <li><a href="#sobre" className="text-gray-200 hover:text-white transition-colors">Sobre Mim</a></li>
                        <li><a href="#depoimentos" className="text-gray-200 hover:text-white transition-colors">Depoimentos</a></li>
                        <li><a href="#faq" className="text-gray-200 hover:text-white transition-colors">Dúvidas Frequentes</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Entre em Contato</h3>
                    <p className="text-gray-400 mb-4">Siga-me nas redes sociais e envie uma mensagem para agendar sua consulta.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.instagram.com/dra.laennevalentim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                        <a href="https://wa.me/69993009618" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                            <Icon path={mdiWhatsapp} size={1.39} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Dra. Laenne Valentim. Todos os direitos reservados.</p>
                <p className="text-xs mt-2">Desenvolvido com 🧠 por [Seu Nome/Sua Agência]</p>
            </div>
        </div>
    </footer>
);

export default Footer;
