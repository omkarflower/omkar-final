import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Shop from './components/Shop';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-cream font-body text-floral-green overflow-x-hidden selection:bg-gold/30 selection:text-floral-green">
          <Navbar />
          <Hero />
          <Catalog />
          <Shop />
          <Services />
          <Gallery />
          <Features />
          <Contact />
          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

export default App;
