// sections/About.jsx
const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Done", value: "350+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Followers", value: "45K" }
];

const services = [
  { title: "Print Design", description: "Brochures, posters, and branding." },
  { title: "Web Design", description: "Modern, responsive web interfaces." },
  { title: "Photography", description: "Product and lifestyle photography." }
];

const About = () => {
  return (
    <div className="section">
      <h2 className="section-title">About Me</h2>
      <p className="paragraph">
        I&apos;m Benjamin Smith, a graphic designer and photographer who loves
        clean layouts and bold color palettes.
      </p>

      <div className="about-grid">
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="services-list">
          <h3 className="subheading">What I Do?</h3>
          {services.map((svc) => (
            <div key={svc.title} className="service-item">
              <h4>{svc.title}</h4>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
