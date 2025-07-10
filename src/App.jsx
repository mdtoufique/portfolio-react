import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"

function App() {

  useEffect(() => {
  setTimeout(() => {
    window.history.replaceState(null, '', '#home');
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}, []);



  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundColor: 'var(--dim-white)',
          color: 'var(--text-color)'
        }}
      >
        <main className="flex-1 w-full">
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
       <Analytics />
    </>
  );
}

export default App;
