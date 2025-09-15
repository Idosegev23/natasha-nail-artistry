import nailArt1 from "@/assets/nail-art-1.jpg";
import nailArt2 from "@/assets/nail-art-2.jpg";
import nailArt3 from "@/assets/nail-art-3.jpg";

const Gallery = () => {
  const images = [
    {
      src: nailArt1,
      alt: "עיצוב ציפורניים אלגנטי בגוונים חמים",
    },
    {
      src: nailArt2,
      alt: "פדיקור מקצועי עם לק איכותי",
    },
    {
      src: nailArt3,
      alt: "עיצוב ציפורניים גיאומטרי מתוחכם",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            הגלריה שלי
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            דוגמאות מהעבודות שלי - כל יצירה מותאמת אישית ומבוצעת ברמה הגבוהה ביותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            רוצה לראות עוד? עקבי אחרי ב-Instagram
          </p>
          <a
            href="https://www.instagram.com/natasha.nails29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-semibold"
          >
            <span>📷</span>
            @natasha.nails29
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;