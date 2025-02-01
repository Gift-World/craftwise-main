import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import BenefitsSection from "./components/Benefits/BenefitsSection";
import ContactSection from "./components/Contact/ContactSection";
import EmergingLeadersProgram from "./pages/minipages/EmergingLeadersProgram";
import NewManagersProgram from "./pages/minipages/NewManagersProgram";
import RisingProfessionalsProgram from "./pages/minipages/RisingProfessionalsProgram";
import LegacyLeadersProgram from "./pages/minipages/LegacyLeadersProgram";
import ScrollToTop from "./ScrollToTop";

// Initialize Google Analytics
ReactGA.initialize("G-C083LV0PVF"); // Replace with your actual GA4 Measurement ID

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Ensures scrolling happens after page load
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/managers" element={<NewManagersProgram />} />
        <Route path="/emerging" element={<EmergingLeadersProgram />} />
        <Route path="/legacy" element={<LegacyLeadersProgram />} />
        <Route path="/rising" element={<RisingProfessionalsProgram />} />
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </>
  );
};

// Wrap App in Router
const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
