
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productData } from "@/data/products";
import ScrollToTop from "@/components/ScrollToTop";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(productData.find(p => p.id.toString() === id));
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  
  useEffect(() => {
    // Trova il prodotto con l'ID specificato
    const foundProduct = productData.find(p => p.id.toString() === id);
    setProduct(foundProduct);
    setSelectedImage(foundProduct?.image || "");
    
    // Imposta il titolo della pagina e scorri in alto
    document.title = foundProduct ? `${foundProduct.name} - F.lli Di Raffaele` : "Prodotto non trovato";
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col p-6">
          <h1 className="text-2xl font-bold mb-4">Prodotto non trovato</h1>
          <Link to="/products">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Torna ai prodotti
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link to="/products">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Torna ai prodotti
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex space-x-2 p-1">
                  {[product.image, ...product.gallery || []].map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-avicola-green' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} - immagine ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-avicola-darkgreen mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.category}</p>
              
              <Tabs defaultValue="description" className="mt-6">
                <TabsList>
                  <TabsTrigger value="description">Descrizione</TabsTrigger>
                  <TabsTrigger value="details">Dettagli</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-gray-700">{product.description}</p>
                </TabsContent>
                <TabsContent value="details" className="mt-4">
                  <ul className="space-y-2">
                    {product.details?.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-avicola-green rounded-full mr-2 mt-1.5"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Per informazioni</h3>
                <p className="mb-4">Contattaci via telefono o WhatsApp per richiedere informazioni su questo prodotto.</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-avicola-green hover:bg-avicola-darkgreen">
                    Contatta via WhatsApp
                  </Button>
                  <Button variant="outline">
                    Telefono: 392 256 6798
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductDetail;
