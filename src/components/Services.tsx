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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            השירותים שלי
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            מגוון רחב של שירותי יופי וטיפוח לציפורניים ברמה הגבוהה ביותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;