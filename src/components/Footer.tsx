import { Phone, MapPin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">נטשה פרידמן דובינסקי</h3>
            <p className="opacity-90">Nail Master</p>
            <p className="opacity-75 mt-2">מקצועיות, איכות ותשומת לב לכל פרט</p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">השירותים</h4>
            <ul className="space-y-2 opacity-90">
              <li>לק ג'ל</li>
              <li>מניקור יסודי</li>
              <li>פדיקור</li>
              <li>מיני פדיקור</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">יצירת קשר</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span className="opacity-90">הציונות 86, אשקלון</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <a href="tel:0547849514" className="opacity-90 hover:opacity-100 transition-opacity">
                  054-7849514
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://www.instagram.com/natasha.nails29" 
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @natasha.nails29
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 opacity-75">
            נוצר עם <Heart className="w-4 h-4 text-red-400 fill-current" /> לנטשה
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;