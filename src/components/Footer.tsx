
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-avicola-darkgreen text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/094274f4-f298-41a4-9ad9-5e9779809dd8.png" 
              alt="F.lli Di Raffaele Logo" 
              className="h-16 mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">F.lli Di Raffaele - Azienda Avicola</h3>
              <p className="mt-2 text-gray-300">Qualità e tradizione dal 1945</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/#about" className="text-gray-300 hover:text-white">Chi Siamo</Link>
            <Link to="/products" className="text-gray-300 hover:text-white">Prodotti</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white">Contatti</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} F.lli Di Raffaele - Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
