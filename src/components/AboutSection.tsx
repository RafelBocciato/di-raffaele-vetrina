
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
          <div ref={sectionRef} className="animate-on-scroll">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Siamo un'azienda a conduzione familiare con anni di esperienza nella rivendita
              di prodotti avicoli. Offriamo uova fresche, pollame selezionato 
              e mangimi di qualità a privati, negozi e ristoranti.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
              Dal 1945, la nostra famiglia porta avanti questa attività con passione e dedizione, 
              mantenendo vive le tradizioni e garantendo sempre la massima qualità in ogni 
              aspetto del nostro lavoro.
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
