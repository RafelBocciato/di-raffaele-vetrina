
import React, { useEffect } from "react";
import { Egg, ChevronRight, ChefHat, Package, Plus, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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

const ViewMoreCard = () => {
  return (
    <Link 
      to="/products" 
      className="animate-on-scroll group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center justify-center h-full"
      style={{ animationDelay: "600ms" }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-avicola-green/20 rounded-full group-hover:bg-avicola-green/40 transition-colors">
          <Plus className="w-10 h-10 text-avicola-darkgreen" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-avicola-darkgreen text-center">
        Visualizza Altri Prodotti
      </h3>
      <p className="text-gray-600 text-center">Scopri la gamma completa dei nostri prodotti</p>
    </Link>
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
      title: "Pollame Fresco",
      description:
        "Tagli classici di pollo, gallina e tacchino di alta qualità",
      icon: Egg,
      delay: "0ms",
    },
    {
      title: "Preparati Pronti da Cuocere",
      description:
        "Involtini di pollo, spiedini di tacchino, bocconcini, fettine e nodini",
      icon: ChefHat,
      delay: "150ms",
    },
    {
      title: "Specialità e Miste",
      description:
        "Salsiccia e cervellata di tacchino, fegatini, cuoricini, durelli",
      icon: Heart,
      delay: "300ms",
    },
    {
      title: "Prodotti Confezionati AIA e Amadori",
      description:
        "Selezione di prodotti delle migliori marche",
      icon: ShoppingBag,
      delay: "450ms",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              delay={product.delay}
            />
          ))}
          <ViewMoreCard />
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link
            to="/products"
            className="inline-flex items-center text-avicola-darkgreen hover:text-avicola-green transition-colors font-medium"
          >
            Contattaci per informazioni sui prodotti
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
