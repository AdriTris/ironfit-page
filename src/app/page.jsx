import Navbar from "../components/Navbar/Navbar";
import BackgroundF from "../components/BackgroundF/BackgroundF";
import Features from "../components/Features/Features";
import Programs from "../components/Programs/Programs";
import AboutUs from "../components/aboutus/AboutUs";
import Plans from "../components/Plans/Plans";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Join from "../components/Join/Join";

function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <BackgroundF />
      <Features />
      <Programs />
      <AboutUs />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default HomePage;
