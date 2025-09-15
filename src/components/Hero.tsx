import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram } from "lucide-react";
import natashaProfile from "@/assets/natasha-profile.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-warm min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={natashaProfile}
            alt="נטשה פרידמן דובינסקי - Nail Master"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-warm object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            נטשה פרידמן דובינסקי
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-6">
            Nail Master
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl text-accent mb-8 max-w-2xl mx-auto leading-relaxed">
            לק ג'ל • מניקור יסודי ותיקון מבנה אנטומי • פדיקור • מיני פדיקור
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>הציונות 86, אשקלון</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:0547849514" className="hover:text-primary transition-colors">
              054-7849514
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-primary" />
            <a 
              href="https://www.instagram.com/natasha.nails29" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @natasha.nails29
            </a>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-gradient-primary hover:shadow-warm transition-all duration-300 text-lg px-8 py-4 rounded-xl"
        >
          <a 
            href="https://wa.me/972547849514"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            💬 קבעי תור עכשיו
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;