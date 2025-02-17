import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';

function App() {
  return (
    <div>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573204997492"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
