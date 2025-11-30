// sections/Portfolio.jsx
import React, { useState } from "react";

const items = [
  { id: 1, title: "Poster Series", category: "graphic" },
  { id: 2, title: "Landing Page", category: "web" },
  { id: 3, title: "Portrait Shoot", category: "photo" },
  { id: 4, title: "Branding Kit", category: "graphic" }
];

const filters = [
  { id: "all", label: "All" },
  { id: "graphic", label: "Graphic Design" },
  { id: "web", label: "Web Design" },
  { id: "photo", label: "Photography" }
];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div className="section">
      <h2 className="section-title">Portfolio</h2>

      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${active === f.id ? "active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visible.map((item) => (
          <div key={item.id} className="portfolio-card">
            <div className="portfolio-thumb" />
            <h4 className="portfolio-title">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
