import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Solution from './components/Solution';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ExitIntentModal from './components/ExitIntentModal';

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