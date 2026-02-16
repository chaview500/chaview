import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Strengths from './components/Strengths';
import WhyGo from './components/WhyGo';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Strengths />
        <WhyGo />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;