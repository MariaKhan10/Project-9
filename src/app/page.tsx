import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import ToolsOverview from "./components/ToolsOverview";
import About from "./components/about";


export default function Home() {
  return (
     <>
      <Navbar />
      <section id="about">
        <About />
      </section>

       <ToolsOverview />
       <section id="pricing">
        <Pricing />
       </section>
      
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </>
  );
}
