import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Digital Business Card Container */}
      <div className="digital-card max-w-md mx-auto bg-white min-h-screen relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200/30 to-transparent rounded-full translate-y-20 -translate-x-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <Services />
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
