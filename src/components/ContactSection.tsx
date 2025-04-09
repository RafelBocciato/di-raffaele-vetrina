
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare, Truck } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
}) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="bg-avicola-green/20 p-3 rounded-full">
        <Icon className="h-6 w-6 text-avicola-darkgreen" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        {href ? (
          <a
            href={href}
            className="text-avicola-darkgreen hover:text-avicola-green transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-avicola-tan/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Sezione vendita all'ingrosso */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-avicola-green/20 rounded-full">
              <Truck className="w-10 h-10 text-avicola-darkgreen" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-avicola-darkgreen mb-4">Vendita all'Ingrosso</h3>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Offriamo servizi di vendita all'ingrosso con spedizioni in tutta la Campania per rivenditori, ristoranti e attività commerciali.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-avicola-tan/20 p-4 rounded-md">
                <h4 className="font-semibold text-avicola-darkgreen mb-2">Spedizione in tutta la Campania</h4>
                <p>Consegniamo i nostri prodotti freschi direttamente presso la tua attività</p>
              </div>
              <div className="bg-avicola-tan/20 p-4 rounded-md">
                <h4 className="font-semibold text-avicola-darkgreen mb-2">Ritiro in Sede</h4>
                <p>Possibilità di ritirare direttamente presso il nostro punto vendita a Frattaminore</p>
              </div>
            </div>
            <Button
              className="mt-4 bg-avicola-darkgreen hover:bg-avicola-green text-white"
              onClick={() => {
                window.open(
                  "https://wa.me/393922566798?text=Ciao,%20sono%20interessato%20alla%20vendita%20all'ingrosso.",
                  "_blank",
                  "noopener noreferrer"
                );
              }}
            >
              Richiedi Informazioni per l'Ingrosso
            </Button>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-avicola-darkgreen">
          Contattaci
        </h2>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Siamo a tua disposizione
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-on-scroll">
            <ContactItem
              icon={Phone}
              title="Telefono"
              content="392 256 6798"
              href="tel:+393922566798"
            />
            <ContactItem
              icon={Mail}
              title="Email"
              content="lelesteam2012@hotmail.it"
              href="mailto:lelesteam2012@hotmail.it"
            />
            <ContactItem
              icon={MapPin}
              title="Località"
              content="Frattaminore (NA), Via Spagnuolo 28"
            />

            <div className="pt-4">
              <Button
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center gap-2"
                onClick={() => {
                  window.open(
                    "https://wa.me/393922566798?text=Ciao,%20vorrei%20avere%20informazioni%20sui%20vostri%20prodotti.",
                    "_blank",
                    "noopener noreferrer"
                  );
                }}
              >
                <MessageSquare className="h-5 w-5" />
                Contattaci su WhatsApp
              </Button>
            </div>
          </div>

          <div className="animate-on-scroll h-[400px]">
            <iframe
              title="Mappa"
              className="w-full h-full rounded-lg shadow-md border border-gray-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.384228693051!2d14.262999813424636!3d40.95642278901889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b088f11e8a773%3A0xabcdef26183bcd94!2s80020%20Frattaminore%20NA!5e0!3m2!1sit!2sit!4v1585307601234!5m2!1sit!2sit"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
