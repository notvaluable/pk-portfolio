// App.jsx
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      {/* <div className="app">
        <Sidebar />
        <main className="main">
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div> */}
    </>
  );
};

export default App;
