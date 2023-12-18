import Navbar from "./components/navbar";
import Testimonials from "./components/Testimonial";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Card from "./components/card";
import Hero from "./components/Hero";
import MemberShip from "./components/MemberShip";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <MemberShip />
      <Testimonials />
      <Plans />
      <Contact />
      <Footer />
    </>
  );
};
export default Main;
