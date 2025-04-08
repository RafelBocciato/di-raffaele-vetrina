
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-avicola-darkgreen text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">F.lli Di Raffaele - Azienda Avicola</h3>
            <p className="mt-2 text-gray-300">Qualità e tradizione dal 1945</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white">Chi Siamo</a>
            <a href="#products" className="text-gray-300 hover:text-white">Prodotti</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contatti</a>
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
