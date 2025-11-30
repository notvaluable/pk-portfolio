// sections/Home.jsx
const Home = () => {
  return (
    <div className="section home-section">
      <div className="home-text">
        <div>
          <img src="./images/LOGO.png" className="logo" />
        </div>
        <div className="info">
          <p className="eyebrow">Hi there!</p>
          <h1>
            I&apos;m <span className="highlight">Pranay Kadam</span>
          </h1>
          <p className="subtitle">Software Engineer | Digital Marketing</p>
          <p className="paragraph">
            Leading the development of high-quality, accessible email templates and <br className="hide"/> web assets using HTML5, CSS3, JavaScript.
          </p>
          <button className="primary-btn">More about me</button>
        </div>
      </div>

      <div className="home-photo">
        <img src="./images/dp.png" className="photo" />
      </div>
    </div>
  );
};

export default Home;