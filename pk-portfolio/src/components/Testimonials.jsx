// sections/Testimonials.jsx
const testimonials = [
  {
    name: "Jenny",
    role: "Marketing Manager",
    text: "Benjamin delivered exactly what we needed and more.",
    rating: 5
  },
  {
    name: "Mila",
    role: "Art Director",
    text: "Great collaborator with a strong eye for detail.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar" />
              <div>
                <h4>{t.name}</h4>
                <p className="muted">{t.role}</p>
              </div>
            </div>
            <p className="paragraph">{t.text}</p>
            <div className="stars">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
