import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
// import ClientLogos from "@/components/ClientLogos";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <ClientLogos /> */}
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <Clients />
      <Advantages />
      <div id="process">
        <Process />
      </div>
      <Capabilities />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
