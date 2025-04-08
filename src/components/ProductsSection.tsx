
import React, { useEffect } from "react";
import { Egg, ChevronRight, Utensils, Package } from "lucide-react";

const ProductCard = ({
  title,
  description,
  icon: Icon,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
}) => {
  return (
    <div
      className="animate-on-scroll bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-avicola-green/20 rounded-full">
          <Icon className="w-10 h-10 text-avicola-darkgreen" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-avicola-darkgreen text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ProductsSection = () => {
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

  const products = [
    {
      title: "Uova Fresche",
      description:
        "Direttamente dal nostro allevamento, consegnate ogni giorno",
      icon: Egg,
      delay: "0ms",
    },
    {
      title: "Polli e Galline",
      description:
        "Pollame selezionato, allevato con cura e passione",
      icon: Utensils,
      delay: "150ms",
    },
    {
      title: "Mangimi e Accessori",
      description:
        "Una selezione di mangimi e prodotti utili",
      icon: Package,
      delay: "300ms",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-avicola-darkgreen">
          I Nostri Prodotti
        </h2>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Qualità genuina per ogni esigenza
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              delay={product.delay}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="#contact"
            className="inline-flex items-center text-avicola-darkgreen hover:text-avicola-green transition-colors font-medium"
          >
            Contattaci per informazioni sui prodotti
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
