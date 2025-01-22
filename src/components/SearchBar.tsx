import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Search for products..."
        className="pl-10 pr-4 h-12 rounded-full border-2 border-mit-primary focus:ring-mit-accent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
};