import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram } from "lucide-react";
import natashaLogo from "@/assets/natasha-logo.png";

const Hero = () => {
  return (
    <section className="pt-8 pb-6 px-6 text-center">
      {/* Profile Section */}
      <div className="mb-6">
        <img
          src={natashaLogo}
          alt="נטשה פרידמן דובינסקי - Nail Master"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-3 border-primary shadow-lg object-cover"
        />
        <h1 className="text-2xl font-bold text-primary mb-1">
          נטשה פרידמן דובינסקי
        </h1>
        <h2 className="text-lg text-secondary font-semibold mb-3">
          💅 Nail Master 💅
        </h2>
      </div>

      {/* Services */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            ✨ לק ג'ל • מניקור יסודי ותיקון מבנה אנטומי<br/>
            🦶 פדיקור • מיני פדיקור ✨
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6 text-sm">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4 text-primary" />
          <span>הציונות 86, אשקלון</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Phone className="w-4 h-4 text-primary" />
          <a href="tel:0547849514" className="hover:text-primary transition-colors">
            054-7849514
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Instagram className="w-4 h-4 text-primary" />
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

      {/* CTA Button */}
      <Button
        asChild
        size="sm"
        className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300 text-base py-3 rounded-xl"
      >
        <a 
          href="https://wa.me/972547849514"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          💬 קבעי תור עכשיו
        </a>
      </Button>
    </section>
  );
};

export default Hero;