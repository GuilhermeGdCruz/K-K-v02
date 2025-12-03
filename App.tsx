import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/About'; // Using the refactored About as Benefits
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Founders from './components/Founders';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-brand-black bg-white selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Founders />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;