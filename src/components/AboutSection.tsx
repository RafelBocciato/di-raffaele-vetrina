
import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" className="py-20 bg-avicola-tan/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-avicola-darkgreen">
          Chi Siamo
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={sectionRef} className="animate-on-scroll space-y-4">
            <p className="text-gray-700">
              Siamo un'azienda a conduzione familiare, attiva da oltre 75 anni nel settore avicolo.
              Oggi lavoriamo esclusivamente all'ingrosso, offrendo prodotti freschi e selezionati a negozi, supermercati, macellerie, gastronomie e ristoranti.
            </p>
            <p className="text-gray-700">
              Ogni giorno prepariamo involtini, spiedini, filetti, salsicce, bocconcini, fuselli e molto altro, con carni fresche e aromi naturali di nostra selezione.
              Il tutto nel pieno rispetto delle normative vigenti e con un'attenzione rigorosa alla catena del freddo.
            </p>
            <p className="text-gray-700">
              La fiducia che abbiamo costruito negli anni è il risultato di un lavoro costante, fatto di serietà, puntualità e cura per ogni singolo cliente.
              La terza generazione della famiglia Di Raffaele continua oggi con lo stesso impegno di sempre, guardando al futuro senza dimenticare da dove tutto è cominciato.
            </p>
            <p className="text-gray-700">
              Effettuiamo consegne rapide in tutta la Campania oppure ritiro diretto in sede, in base alle esigenze del cliente.
            </p>
            <p className="font-medium text-avicola-darkgreen italic">
              Quello che facciamo, lo facciamo da sempre con il cuore. E si sente ad ogni morso.
            </p>
          </div>
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt="Azienda avicola"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
