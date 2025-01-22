import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
}

export const CategoryCard = ({ title, image }: CategoryCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <button className="flex items-center text-white group-hover:underline">
          <span>Explore Now</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};