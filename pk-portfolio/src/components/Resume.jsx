// sections/Resume.jsx
const education = [
  {
    period: "2010 - 2014",
    title: "Bachelor of Design",
    place: "Design University"
  },
  {
    period: "2008 - 2010",
    title: "Graphic Design Diploma",
    place: "Art College"
  }
];

const experience = [
  {
    period: "2019 - Present",
    title: "Senior Graphic Designer",
    place: "Creative Studio"
  },
  {
    period: "2014 - 2019",
    title: "Graphic Designer",
    place: "Agency XYZ"
  }
];

const Resume = () => {
  return (
    <div className="section">
      <h2 className="section-title">Resume</h2>
      <div className="two-column">
        <div>
          <h3 className="subheading">Education</h3>
          {education.map((item) => (
            <div key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h4>{item.title}</h4>
              <p className="muted">{item.place}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="subheading">Experience</h3>
          {experience.map((item) => (
            <div key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h4>{item.title}</h4>
              <p className="muted">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
