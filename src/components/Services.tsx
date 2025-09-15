const Services = () => {
  const services = [
    {
      title: "לק ג'ל",
      description: "צביעת ציפורניים עמידה ויפה שמחזיקה עד 3 שבועות",
      icon: "💅",
    },
    {
      title: "מניקור יסודי",
      description: "טיפול מקיף הכולל עיצוב, ליטוש ותיקון מבנה אנטומי",
      icon: "✨",
    },
    {
      title: "פדיקור",
      description: "טיפול מלא לכפות הרגליים וציפורני הרגליים",
      icon: "🦶",
    },
    {
      title: "מיני פדיקור",
      description: "טיפול מהיר ויעיל לציפורני הרגליים",
      icon: "💎",
    },
  ];

  return (
    <section className="py-6 px-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary mb-2 text-center">
          🌟 השירותים שלי 🌟
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-rose-50/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group border border-rose-100"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-sm font-semibold text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;