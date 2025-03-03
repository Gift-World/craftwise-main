import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import BuiltToLast from "./components/Blogs/BuiltToLast";
import Blogs from "./components/Blogs/Blogs";
import TalentBridge from "./pages/minipages/TalentBridge";
import LearningCulture from "./components/Blogs/LearningCulture";
import PosterSection from "./components/PosterSection";

// Initialize Google Analytics
ReactGA.initialize("G-453EHGH7V6"); // Replace with your GA4 Measurement ID

// Component to track page views
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

const App = () => {
  const location = useLocation();

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
      <AnalyticsTracker />
      <Routes>
        <Route path="/managers" element={<NewManagersProgram />} />
        <Route path="/emerging" element={<EmergingLeadersProgram />} />
        <Route path="/legacy" element={<LegacyLeadersProgram />} />
        <Route path="/rising" element={<RisingProfessionalsProgram />} />
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/talent" element={<TalentBridge />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/built-to-last" element={<BuiltToLast />} />
        <Route path ="/learning-culture" element={<LearningCulture />} />
        <Route path ="/risingposter" element={<PosterSection />} />
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
