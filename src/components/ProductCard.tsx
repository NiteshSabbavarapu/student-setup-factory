import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  category: string;
}

export const ProductCard = ({ title, image, price, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-fadeIn">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-mit-primary" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-mit-primary">{price}</span>
          <Button className="bg-mit-primary hover:bg-mit-accent">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};