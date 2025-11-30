import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';

// components/Sidebar.jsx
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" }
];

const Sidebar = () => {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="avatar" />
        <h2 className="name">Your Name</h2>
        <p className="role">Graphic Designer / Photographer</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="nav-btn"
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        {/* Replace with real icons / links */}
        <a href="#" className="icon-circle"><Linkedin size={16} /></a>
        <a href="#" className="icon-circle"><Facebook size={16} /></a>
        <a href="#" className="icon-circle"><Instagram size={16} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;