import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Mission from './pages/Mission';
import Products from './pages/Products';
import Production from './pages/Production';
import Rnd from './pages/Rnd';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Manufacturing from './pages/Manufacturing';
import ScrollToTop from './components/ScrollToTop';
import FloatingSocial from './components/FloatingSocial';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/products" element={<Products />} />
            <Route path="/production" element={<Production />} />
            <Route path="/rnd" element={<Rnd />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
          </Routes>
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </Router>
  );
}

export default App;
