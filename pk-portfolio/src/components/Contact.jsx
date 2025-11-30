// sections/Contact.jsx
const Contact = () => {
  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <p className="paragraph">Feel free to contact me!</p>

      <form className="contact-form">
        <div className="two-column">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea rows="4" placeholder="Message" />
        <button className="primary-btn" type="submit">
          Send Message
        </button>
      </form>

      <div className="contact-details">
        <div>email@example.com</div>
        <div>+1 234 567 890</div>
      </div>
    </div>
  );
};

export default Contact;
