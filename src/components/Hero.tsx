
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Avicola Di Raffaele
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Qualità e tradizione dal 1945
          </p>
          <Button
            variant="default"
            className="bg-avicola-green hover:bg-avicola-darkgreen text-white px-6 py-3 rounded-md text-lg"
            onClick={() => {
              document.querySelector("#products")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Scopri i nostri prodotti
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19l-7-7 1.5-1.5L12 16l5.5-5.5L19 12l-7 7z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
