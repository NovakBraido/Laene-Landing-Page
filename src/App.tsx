import React, { useState, ReactNode, useEffect, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- TYPE DEFINITIONS ---

interface SVGProps {
    className?: string;
}

interface CtaButtonProps {
    children: ReactNode;
    className?: string;
}

interface FaqItemProps {
    question: string;
    answer: string;
}

interface ExitIntentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- DATA ---

const faqData = [
    {
        q: "Como funciona a primeira consulta?",
        a: "A primeira consulta é uma conversa aprofundada para eu entender todo o histórico da criança, as suas preocupações e o contexto familiar. É o nosso ponto de partida para traçar o melhor caminho para a investigação diagnóstica e terapêutica."
    },
    {
        q: "O tratamento com Cannabis medicinal é seguro para crianças?",
        a: "Sim. Quando bem indicado e acompanhado por um profissional qualificado, o tratamento é seguro e pode trazer benefícios significativos no controle de sintomas como irritabilidade, agitação e distúrbios do sono, melhorando a qualidade de vida."
    },
    {
        q: "Vocês atendem por plano de saúde?",
        a: "No momento, os atendimentos são particulares. No entanto, forneço toda a documentação necessária (recibo, relatório) para que você possa solicitar o reembolso junto ao seu plano de saúde, caso tenha essa cobertura."
    },
    {
        q: "O diagnóstico é definitivo?",
        a: "O diagnóstico é um processo cuidadoso e baseado em critérios técnicos. Ele serve como um guia para entendermos as necessidades da criança e direcionar as melhores intervenções. O mais importante é o acompanhamento contínuo para apoiar o desenvolvimento em cada fase."
    }
];

const testimonialsData = [
    {
        quote: "Depois de passar por vários profissionais, finalmente encontramos na Dra. Laenne o acolhimento e a competência que precisávamos. Ela nos deu o diagnóstico do nosso filho e, mais importante, um plano claro. Somos muito gratos!",
        author: "Família S. A."
    },
    {
        quote: "A Dra. Laenne é uma profissional incrível. Humana, atenciosa e muito segura no que faz. O tratamento com a Cannabis medicinal mudou a qualidade de vida do meu filho. Recomendo de olhos fechados.",
        author: "Mãe do João P."
    },
    {
        quote: "O tratamento da Dra. Laenne fez toda a diferença para nossa família. A abordagem humanizada e o acompanhamento contínuo nos deram a segurança que precisávamos para lidar com os desafios. Hoje, vemos uma evolução maravilhosa.",
        author: "Família M. V."
    },
    {
        quote: "Não tenho palavras para agradecer. A Dra. Laenne não apenas diagnosticou meu filho, como nos ensinou a entendê-lo e a criar um ambiente propício para seu desenvolvimento. É uma verdadeira parceira.",
        author: "Pai do Gabriel B."
    },
    {
        quote: "A Cannabis medicinal foi um divisor de águas. Sob a orientação da Dra. Laenne, os sintomas que tanto incomodavam meu filho diminuíram e ele passou a ter uma vida mais tranquila e feliz. É um alívio enorme.",
        author: "Família R. F."
    }
];

// --- UI COMPONENTS ---

const CheckCircle: React.FC<SVGProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const Plus: React.FC<SVGProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);


const X: React.FC<SVGProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const InstagramIcon: React.FC<SVGProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const WhatsappIcon: React.FC<SVGProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

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

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-lg w-full relative transform transition-all animate-slide-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Espere, não vá ainda!</h2>
                <p className="text-gray-600 mb-8">
                    Sabemos que a jornada pode ser cheia de dúvidas. Dê o primeiro e mais importante passo para obter as respostas que sua família precisa.
                </p>
                <CtaButton>Agendar uma Avaliação Agora</CtaButton>
            </div>
        </div>
    );
};

// --- NOVO COMPONENTE FAQ ITEM COM ANIMAÇÃO ---
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl font-medium text-gray-800">{question}</span>
                <span
                    className={`text-2xl text-gray-600 transition-transform duration-1000 ease-in-out ${
                        isOpen ? 'rotate-45' : ''
                    }`}
                >
                    <Plus className="w-6 h-6" />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
                <p className="text-gray-600 pb-6 pr-10">{answer}</p>
            </div>
        </div>
    );
};

// --- PAGE SECTIONS ---

const Navbar: React.FC = () => (
  <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-md border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      
      {/* Logo / Nome */}
      <div className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-brand-pink transition-colors cursor-pointer">
        Dra. Laenne Valentim
      </div>
      
      {/* Navegação */}
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
      
      {/* CTA */}
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

const Hero: React.FC = () => (
    <section className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                    Diagnóstico e Tratamento de Autismo e TDAH
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                    Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna, humanizada e baseada em evidências.
                </p>
                <CtaButton>Quero Agendar uma Avaliação</CtaButton>
            </div>
        </div>
    </section>
);

const About: React.FC = () => (
    <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
                <div className="md:w-1/3">
                    <img
                        src="/laene2.jpg"
                        alt="Dra. Laenne Valentim"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conheça a Dra. Laenne Valentim</h2>
                    <p className="text-gray-600 mb-4 text-lg">
                        Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                    </p>
                    <p className="text-gray-600 mb-4 text-lg">
                        Acredito em uma medicina que olha para o paciente de forma integral.
                    </p>
                    <p className="text-gray-600 mb-8 text-lg">
                        Por isso, busco constantemente atualizações e novas abordagens terapêuticas, como a Cannabis medicinal, para oferecer o que há de mais moderno e eficaz, sempre com segurança e responsabilidade.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Família e Comunidade</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Certificação em Autismo</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border">
                            <div className="flex items-start">
                                <CheckCircle className="text-brand-pink w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">Cannabis Medicinal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Problem: React.FC = () => (
    <section id="problema" className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Você se sente perdido(a) sem saber como ajudar?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Dificuldades na Escola</h3>
                    <p className="text-gray-600">Seu filho(a) apresenta problemas de concentração, aprendizado ou interação com os colegas e você não sabe a causa?</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Comportamentos Desafiadores</h3>
                    <p className="text-gray-600">Crises de choro, seletividade alimentar, dificuldades com mudanças na rotina ou comportamentos repetitivos são frequentes?</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Incerteza e Medo do Futuro</h3>
                    <p className="text-gray-600">A falta de um diagnóstico claro gera insegurança sobre como garantir o melhor desenvolvimento e bem-estar para seu filho(a)?</p>
                </div>
            </div>
        </div>
    </section>
);

const Solution: React.FC = () => (
    <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Jornada de Cuidado Completa e Humanizada</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Diagnóstico Preciso</h3>
                    </div>
                    <p className="text-gray-600">Utilizo protocolos e avaliações reconhecidas para um diagnóstico diferencial e assertivo de Transtorno do Espectro Autista (TEA) e TDAH.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Plano Terapêutico Singular</h3>
                    </div>
                    <p className="text-gray-600">Desenvolvo um plano de tratamento personalizado, considerando as necessidades únicas da criança e o contexto familiar, com acompanhamento contínuo.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-brand-pink w-12 h-12 mr-4 flex-shrink-0" />
                        <h3 className="font-bold text-2xl text-gray-800">Tratamento com Cannabis Medicinal</h3>
                    </div>
                    <p className="text-gray-600">Como prescritora certificada, avalio a indicação da Cannabis medicinal como uma opção terapêutica segura e eficaz para o manejo de sintomas associados.</p>
                </div>
            </div>
        </div>
    </section>
);


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

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que as famílias dizem</h2>
          <p className="text-gray-600 text-lg">
            A confiança e o resultado de quem já trilhou essa jornada comigo é minha maior recompensa.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2.2, // Ajustado para mostrar 2 cards e uma pequena parte do próximo
              centeredSlides: true,
            },
            0: {
              slidesPerView: 1.2, // Ajustado para telas menores
              centeredSlides: true,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="max-w-5xl mx-auto"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="bg-brand-pink-light p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <p className="text-gray-800 mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-bold text-gray-800">{testimonial.author}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};


const Faq: React.FC = () => {
    return (
        <section id="faq" className="bg-brand-pink-light pt-20 pb-20 md:pb-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes</h2>
                    <p className="text-gray-600 text-lg">
                        Esclareça alguns pontos importantes antes de agendar sua consulta.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection: React.FC = () => (
  <section className="bg-brand-pink text-white">
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Dê o primeiro passo para a transformação que sua família precisa.
      </h2>
      <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-10">
        Chega de incertezas. Agende uma consulta de avaliação e vamos juntos construir um futuro com mais qualidade de vida, compreensão e felicidade para seu filho(a).
      </p>

      <CtaButton
        className="bg-white !text-brand-pink border border-gray-300 shadow-lg 
                   hover:bg-gray-100 hover:shadow-xl transition-all duration-200 
                   transform hover:-translate-y-1 cursor-pointer font-semibold 
                   px-8 py-4 rounded-lg focus:outline-none focus:ring-2 
                   focus:ring-brand-pink focus:ring-offset-2"
      >
        Quero Agendar uma Avaliação
      </CtaButton>
    </div>
  </section>
);
const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Dra. Laenne Valentim</h3>
                    <p className="text-gray-400">Especialista em Autismo e TDAH, dedicada a oferecer um cuidado humano e completo para cada família.</p>
                    <p className="font-mono mt-4 text-gray-500">CRM 6751-RQE3445</p>
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
                            <WhatsappIcon className="w-7 h-7" />
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

// --- MAIN APP COMPONENT ---

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                setIsModalOpen(true);
                document.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="bg-white">
            <ExitIntentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Problem />
                <Solution />
                <VideoSection />
                <Testimonials />
                <Faq />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

export {};