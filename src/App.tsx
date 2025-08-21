import React, { useState, ReactNode, useEffect } from 'react';

// FONT & ICONS (Normally you'd import these in your main CSS or index.html)
// For this example, we'll assume they are loaded.
// Lucide React for icons: npm install lucide-react

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

// --- SVG ICON COMPONENTS ---

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

const Minus: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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


// --- UI COMPONENTS ---

// Reusable button component for consistent CTAs
const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '' }) => (
  <a
    href="https://linktr.ee/dralaennevalentim" // Link direto para o agendamento
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block bg-brand-pink text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-brand-pink/90 transition-all transform hover:scale-105 duration-300 ease-in-out ${className}`}
  >
    {children}
  </a>
);

// --- MODAL COMPONENT ---
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


// --- PAGE SECTIONS / COMPONENTS ---

const Navbar: React.FC = () => (
  <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-gray-800 tracking-tight">
        Dra. Laenne Valentim
      </div>
      <nav className="hidden md:flex items-center space-x-8 font-medium">
        <a href="#servicos" className="text-gray-600 hover:text-brand-pink transition-colors">Serviços</a>
        <a href="#sobre" className="text-gray-600 hover:text-brand-pink transition-colors">Sobre Mim</a>
        <a href="#depoimentos" className="text-gray-600 hover:text-brand-pink transition-colors">Depoimentos</a>
        <a href="#faq" className="text-gray-600 hover:text-brand-pink transition-colors">Dúvidas</a>
      </nav>
      <a
        href="https://linktr.ee/dralaennevalentim"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block bg-brand-pink text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-pink/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
          Clareza e Acolhimento no Diagnóstico e Tratamento de Autismo e TDAH
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Ajudo famílias a compreenderem o diagnóstico e a encontrarem o melhor caminho para uma vida plena e feliz, com uma abordagem moderna, humanizada e baseada em evidências.
        </p>
        <CtaButton>Quero Agendar uma Avaliação</CtaButton>
        <div className="mt-8 text-sm text-gray-500">
          Atendimento online e presencial
        </div>
      </div>
    </div>
  </section>
);

const Problem: React.FC = () => (
  <section id="problema" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Você se sente perdido(a) sem saber como ajudar?</h2>
        <p className="text-gray-600 text-lg mb-12">
          Muitas famílias chegam até mim com as mesmas angústias. Se você se identifica com alguma destas situações, saiba que não está sozinho(a) e existe um caminho.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-xl text-gray-800 mb-3">Dificuldades na Escola</h3>
          <p className="text-gray-600">Seu filho(a) apresenta problemas de concentração, aprendizado ou interação com os colegas e você não sabe a causa?</p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-xl text-gray-800 mb-3">Comportamentos Desafiadores</h3>
          <p className="text-gray-600">Crises de choro, seletividade alimentar, dificuldades com mudanças na rotina ou comportamentos repetitivos são frequentes?</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-xl text-gray-800 mb-3">Incerteza e Medo do Futuro</h3>
          <p className="text-gray-600">A falta de um diagnóstico claro gera insegurança sobre como garantir o melhor desenvolvimento e bem-estar para seu filho(a)?</p>
        </div>
      </div>
    </div>
  </section>
);

const Solution: React.FC = () => (
  <section id="servicos" className="py-20 bg-brand-pink-light">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uma Jornada de Cuidado Completa e Humanizada</h2>
        <p className="text-gray-600 text-lg">
          Meu trabalho vai além do diagnóstico. Crio um plano terapêutico individualizado e dou o suporte necessário para que sua família se sinta segura e amparada em cada etapa.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
          <CheckCircle className="text-brand-pink w-12 h-12 mb-4" />
          <h3 className="font-bold text-2xl text-gray-800 mb-3">Diagnóstico Preciso</h3>
          <p className="text-gray-600">Utilizo protocolos e avaliações reconhecidas para um diagnóstico diferencial e assertivo de Transtorno do Espectro Autista (TEA) e TDAH.</p>
        </div>
        {/* Service 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
          <CheckCircle className="text-brand-pink w-12 h-12 mb-4" />
          <h3 className="font-bold text-2xl text-gray-800 mb-3">Plano Terapêutico Singular</h3>
          <p className="text-gray-600">Desenvolvo um plano de tratamento personalizado, considerando as necessidades únicas da criança e o contexto familiar, com acompanhamento contínuo.</p>
        </div>
        {/* Service 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
           <CheckCircle className="text-brand-pink w-12 h-12 mb-4" />
          <h3 className="font-bold text-2xl text-gray-800 mb-3">Tratamento com Cannabis Medicinal</h3>
          <p className="text-gray-600">Como prescritora certificada, avalio a indicação da Cannabis medicinal como uma opção terapêutica segura e eficaz para o manejo de sintomas associados.</p>
        </div>
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
    <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                <div className="md:w-1/3">
                    {/* SUBSTITUA PELA FOTO PROFISSIONAL DA DRA. LAENNE */}
                    <img
                        src="https://placehold.co/400x500/FF0084/FFFFFF?text=Dra.+Laenne"
                        alt="Dra. Laenne Valentim"
                        className="rounded-xl shadow-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conheça a Dra. Laenne Valentim</h2>
                    <p className="text-gray-600 mb-4 text-lg">
                        Sou Médica de Família e Comunidade, com dedicação e foco no diagnóstico e tratamento do Autismo e TDAH. Minha paixão é poder transformar vidas, oferecendo não apenas meu conhecimento técnico, mas também um ombro amigo e um porto seguro para as famílias que acompanho.
                    </p>
                    <p className="text-gray-600 mb-6 text-lg">
                        Acredito em uma medicina que olha para o paciente de forma integral. Por isso, busco constantemente atualizações e novas abordagens terapêuticas, como a Cannabis medicinal, para oferecer o que há de mais moderno e eficaz, sempre com segurança e responsabilidade.
                    </p>
                    <div className="space-y-3 text-gray-700">
                        <p className="flex items-center">
                            <CheckCircle className="text-brand-pink mr-3 flex-shrink-0"/>
                            <strong>Médica de Família e Comunidade</strong>
                            <span className="ml-2 text-gray-500 font-medium">(CRM 6751-RQE3445)</span>
                        </p>
                        <p className="flex items-center">
                            <CheckCircle className="text-brand-pink mr-3 flex-shrink-0"/>
                            <strong>Certificação em Autismo</strong>
                            <span className="ml-1">pelo Dr. Thiago Castro</span>
                        </p>
                        <p className="flex items-center">
                            <CheckCircle className="text-brand-pink mr-3 flex-shrink-0"/>
                            <strong>Prescritora de Cannabis Medicinal</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const VideoSection: React.FC = () => (
  <section id="video" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Uma Mensagem para as Famílias
        </h2>
        <p className="text-gray-600 text-lg">
          Assista a este vídeo para entender melhor minha abordagem e como posso ajudar sua família nesta jornada.
        </p>
      </div>
      <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-black">
          <iframe
            src="https://www.youtube.com/embed/6329VNivYM4"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vídeo de Apresentação"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);


const Testimonials: React.FC = () => (
  <section id="depoimentos" className="py-20 bg-brand-pink-light">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que as famílias dizem</h2>
        <p className="text-gray-600 text-lg">
          A confiança e o resultado de quem já trilhou essa jornada comigo é minha maior recompensa.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Depoimento 1 - SUBSTITUIR COM DEPOIMENTOS REAIS */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <p className="text-gray-600 mb-6">"Depois de passar por vários profissionais, finalmente encontramos na Dra. Laenne o acolhimento e a competência que precisávamos. Ela nos deu o diagnóstico do nosso filho e, mais importante, um plano claro. Somos muito gratos!"</p>
          <div className="font-bold text-gray-800">- Família S. A.</div>
        </div>
        {/* Depoimento 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <p className="text-gray-600 mb-6">"A Dra. Laenne é uma profissional incrível. Humana, atenciosa e muito segura no que faz. O tratamento com a Cannabis medicinal mudou a qualidade de vida do meu filho. Recomendo de olhos fechados."</p>
          <div className="font-bold text-gray-800">- Mãe do João P.</div>
        </div>
      </div>
    </div>
  </section>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <Minus className="text-brand-pink"/> : <Plus className="text-gray-500"/>}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
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

    return (
        <section id="faq" className="py-20 bg-white">
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
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Dê o primeiro passo para a transformação que sua família precisa.</h2>
      <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-10">
        Chega de incertezas. Agende uma consulta de avaliação e vamos juntos construir um futuro com mais qualidade de vida, compreensão e felicidade para seu filho(a).
      </p>
      <CtaButton className="bg-white text-brand-pink hover:bg-gray-100">Agendar Minha Consulta Agora</CtaButton>
    </div>
  </section>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Coluna 1: Sobre */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Dra. Laenne Valentim</h3>
                    <p className="text-gray-400">Especialista em Autismo e TDAH, dedicada a oferecer um cuidado humano e completo para cada família.</p>
                    <p className="font-mono mt-4 text-gray-500">CRM 6751-RQE3445</p>
                </div>

                {/* Coluna 2: Navegação */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Navegue pelo Site</h3>
                    <ul className="space-y-2">
                        <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                        <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Mim</a></li>
                        <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                        <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Dúvidas Frequentes</a></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato e Redes Sociais */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Entre em Contato</h3>
                    <p className="text-gray-400 mb-4">Siga-me nas redes sociais e envie uma mensagem para agendar sua consulta.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.instagram.com/dra.laennevalentim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                            <InstagramIcon className="w-7 h-7" />
                        </a>
                        {/* SUBSTITUA '#' PELO SEU LINK DO WHATSAPP */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
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
      // Abre o modal se o cursor sair pela parte de cima da janela
      if (e.clientY <= 0) {
        setIsModalOpen(true);
        // Remove o listener após a primeira ativação para não incomodar o usuário
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
        <Problem />
        <Solution />
        <About />
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
