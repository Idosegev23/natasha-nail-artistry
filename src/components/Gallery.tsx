import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "/images/SaveClip.App_488315355_18509905597048137_6442932375622282447_n.jpg",
      alt: "עיצוב ציפורניים מקצועי ומיוחד",
      size: "large"
    },
    {
      src: "/images/SaveClip.App_476871730_18498630571048137_3928133954692426557_n.jpg",
      alt: "פדיקור אלגנטי ומעוצב",
      size: "medium"
    },
    {
      src: "/images/SaveClip.App_459111190_370387316007210_2916329321856859509_n.jpg",
      alt: "עיצוב ציפורניים יצירתי",
      size: "medium"
    },
    {
      src: "/images/SaveClip.App_480310202_18499679896048137_3927234420439718219_n.jpg",
      alt: "מניקור מתוחכם ומעוצב",
      size: "small"
    },
    {
      src: "/images/SaveVid.to_479539110_18498920569048137_3071194289880501688_n.jpg",
      alt: "עבודת ציפורניים מקצועית",
      size: "small"
    },
    {
      src: "/images/473059650_9422712187750063_3523509698876176742_n.webp",
      alt: "יצירת אמנות על ציפורניים",
      size: "large"
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (selectedImage < images.length - 1) {
            setSelectedImage(selectedImage + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary mb-2 text-center">
          💎 הגלריה שלי 💎
        </h2>
        <p className="text-sm text-muted-foreground text-center">
          דוגמאות מהעבודות שלי
        </p>
      </div>

      {/* Mobile-First Bento Grid */}
      <div className="grid grid-cols-2 gap-3 auto-rows-[120px]">
          {images.map((image, index) => {
            const getGridClasses = (size: string, index: number) => {
              switch (size) {
                case 'large':
                  return 'col-span-2 row-span-2';
                case 'medium':
                  return index % 3 === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-2';
                case 'small':
                default:
                  return 'col-span-1 row-span-1';
              }
            };

            return (
              <div
                key={index}
                className={`bento-item group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer ${getGridClasses(image.size, index)}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out image-fade-in"
                />
                <div className="absolute inset-0 gradient-overlay-warm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Content overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-6 h-6 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
          <p className="text-sm text-muted-foreground mb-2">
            רוצה לראות עוד?
          </p>
          <a
            href="https://www.instagram.com/natasha.nails29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-semibold text-sm"
          >
            <span>📷</span>
            @natasha.nails29
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
          <div className="relative max-w-4xl max-h-[90vh] mx-4 image-fade-in">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-200 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
              <X size={28} />
            </button>
            
            {/* Navigation buttons */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            {selectedImage < images.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Main image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-center text-lg font-medium">
                {images[selectedImage].alt}
              </p>
              <p className="text-white/70 text-center text-sm mt-1">
                {selectedImage + 1} מתוך {images.length}
              </p>
            </div>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;