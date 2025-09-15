import { Phone, MapPin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary to-primary/90 text-primary-foreground py-6 px-6 mt-6">
      <div className="text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">✨ נטשה פרידמן דובינסקי ✨</h3>
          <p className="text-sm opacity-90">מקצועיות, איכות ותשומת לב לכל פרט</p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4">
          <p className="flex items-center justify-center gap-2 opacity-75 text-sm">
            נוצר עם <Heart className="w-3 h-3 text-red-400 fill-current" /> לנטשה 💅
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;