import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { JustLanded } from "@/components/JustLanded";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Calendar, Laptop, Bike } from "lucide-react";

const categories = [
  { title: "Furniture Kit", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04" },
  { title: "Kitchen Appliances", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" },
  { title: "Electronics & Gadgets", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { title: "Bathing & Toiletries", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { title: "Bicycle & Gears", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81" },
  { title: "Winter Essentials", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <JustLanded />
        
        {/* Categories Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Home Essentials Banner */}
        <section className="relative h-[500px] w-full overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Home Essentials"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-mit-primary/10 px-4 py-2 rounded-full mb-4 animate-fadeIn">
                <Home className="text-mit-primary" />
                <span className="text-mit-primary font-semibold">Home Collection</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Home Essentials
                <span className="block text-3xl text-mit-secondary mt-2">Everything you need for your dorm</span>
              </h2>
              <Button 
                className="bg-mit-primary hover:bg-mit-accent text-white mt-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                Shop Collection
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Seasonal & Event Essentials Banner */}
        <section className="relative h-[500px] w-full overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              alt="Seasonal & Event Essentials"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 bg-mit-primary/10 px-4 py-2 rounded-full mb-4 animate-fadeIn">
                <Calendar className="text-mit-primary" />
                <span className="text-mit-primary font-semibold">Seasonal Collection</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Seasonal & Event
                <span className="block text-3xl text-mit-secondary mt-2">Essentials</span>
              </h2>
              <Button 
                className="bg-mit-primary hover:bg-mit-accent text-white mt-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                Explore Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Tech & Academic Essentials Banner */}
        <section className="relative h-[500px] w-full overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Tech & Academic Essentials"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-mit-primary/10 px-4 py-2 rounded-full mb-4 animate-fadeIn">
                <Laptop className="text-mit-primary" />
                <span className="text-mit-primary font-semibold">Tech Collection</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Tech & Academic
                <span className="block text-3xl text-mit-secondary mt-2">Essentials</span>
              </h2>
              <Button 
                className="bg-mit-primary hover:bg-mit-accent text-white mt-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                Browse Tech
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Bicycle & Related Gears Banner */}
        <section className="relative h-[500px] w-full overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Bicycle & Related Gears"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 bg-mit-primary/10 px-4 py-2 rounded-full mb-4 animate-fadeIn">
                <Bike className="text-mit-primary" />
                <span className="text-mit-primary font-semibold">Bike Collection</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Bicycle & Gears
                <span className="block text-3xl text-mit-secondary mt-2">Get Moving</span>
              </h2>
              <Button 
                className="bg-mit-primary hover:bg-mit-accent text-white mt-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                Shop Gear
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Electric Items Sale Banner */}
        <section className="relative h-[500px] w-full overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
              alt="Electric Items Sale"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
            <div className="text-right">
              <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn">
                Electric Items
                <span className="block text-6xl text-mit-secondary mt-2">ON SALE</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-md ml-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Up to 50% off on selected electronics and gadgets
              </p>
              <Button 
                className="bg-mit-primary hover:bg-mit-accent text-white transition-all duration-300 text-lg px-8 py-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                Grab Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">
                  MIT Marketplace is your trusted platform for all campus essentials,
                  making student life easier and more convenient.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Home</li>
                  <li>Categories</li>
                  <li>Student Resources</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  77 Massachusetts Ave,<br />
                  Cambridge, MA 02139<br />
                  support@mitmarketplace.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;