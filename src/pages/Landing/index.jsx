import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Shop Section */}
      <div id="shop">
        <Shop />
      </div>

      {/* Reviews Section */}
      <div id="reviews">
        <Reviews />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
