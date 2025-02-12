import Header from "./pages/Header";
import Navbar from "./features/header/Navbar";
import Hero from "./features/header/Hero";
import Main from "./pages/Main";
import Experience from "./features/main/Experience";
import Article from "./ui/Article";
import Achievements from "./features/main/Achievements";
import Rewards from "./ui/Rewards";
import About from "./features/main/About";
import AboutSection from "./ui/AboutSection";
import Blog from "./features/main/Blog";
import BlogSection from "./ui/BlogSection";
import Testimonials from "./features/main/Testimonials";
import TestimonialsSection from "./ui/TestimonialsSection";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./pages/Footer";
import Contact from "./features/main/Contact";
import ContactSection from "./ui/ContactSection";
import Foot from "./features/footer/Foot";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#eee]">
      {/* Header section */}
      <Header>
        <Navbar />
        <Hero />
      </Header>

      {/* Main section */}
      <Main>
        <Experience>
          <Article />
        </Experience>
        <Achievements>
          <Rewards />
        </Achievements>
        <About>
          <AboutSection />
        </About>
        <Blog>
          <BlogSection />
        </Blog>
        <Testimonials>
          <TestimonialsSection />
        </Testimonials>
        <Contact>
          <ContactSection />
        </Contact>
      </Main>

      {/* Footer section */}
      <Footer>
        <Foot />
      </Footer>
    </div>
  );
}

export default App;
