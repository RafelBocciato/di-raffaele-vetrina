
import React, { useEffect } from "react";

const HistorySection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="history" className="py-20 bg-avicola-tan/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-avicola-darkgreen">
          La Nostra Storia
        </h2>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Una tradizione familiare dal 1945
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-on-scroll">
            <p className="text-gray-700">
              L'attività nasce nel 1945, in un'Italia che si rialzava dalla guerra.
              In quel tempo, tra mercati e strade di paese, si vendevano solo polli vivi, con passione e fatica.
              Tra quei banchi lavoravano due giovani intraprendenti: Vincenzo Di Raffaele e Maria Fusco.
            </p>
            
            <p className="text-gray-700">
              Con il tempo, trasmisero la loro esperienza e il loro amore per l'avicoltura al figlio, Raffaele, che diventò presto un pioniere del settore.
            </p>
            
            <p className="text-gray-700">
              Fu tra i primi in Campania ad adottare gli allevamenti in batteria, introducendo tecnologie e una nuova catena di lavorazione che rivoluzionarono il modo di fare avicoltura.
            </p>
            
            <p className="text-gray-700">
              Oggi, la tradizione continua.
              Giuseppe e Vincenzo, figli di Raffaele, portano avanti l'azienda con la stessa passione di una volta, unita a una visione moderna e dinamica.
            </p>
            
            <div className="bg-avicola-tan/20 p-6 rounded-lg mt-6 border-l-4 border-avicola-darkgreen">
              <p className="font-medium text-lg">Tre generazioni, un'unica filosofia:</p>
              <p className="text-avicola-darkgreen">💛 Rispetto per la qualità, per il cliente, per la nostra storia.</p>
            </div>
          </div>
          
          <div className="animate-on-scroll flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/52164681-43ff-4f7d-94e3-4bb721fd9f56.png" 
                alt="Fondatori dell'azienda Di Raffaele" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 shadow-md rounded text-sm font-medium text-gray-700">
                Dal 1945
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
