import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const JustLanded = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/858f0493-ce34-45f5-ad85-9a8d409639df.png"
          alt="Just Landed Collection"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-white mb-4 animate-fadeIn">
          Just Landed
        </h2>
        <p className="text-2xl text-white/90 mb-8 max-w-md animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          new season arrivals, dropping daily.
        </p>
        <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 text-lg px-8 py-6"
          >
            Shop Mens
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 text-lg px-8 py-6"
          >
            Shop Womens
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};