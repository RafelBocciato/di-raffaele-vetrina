
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ProductType } from "@/types/product";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Link to={`/products/${product.id}`} className="group">
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Card 
            className="overflow-hidden transition-all duration-300 h-full hover:shadow-lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-white font-medium line-clamp-2">{product.name}</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-avicola-darkgreen">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-80 p-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-avicola-darkgreen">{product.name}</h4>
            <p className="text-sm">{product.shortDescription}</p>
            <p className="text-xs text-blue-600">Clicca per maggiori dettagli</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </Link>
  );
};

export default ProductCard;
