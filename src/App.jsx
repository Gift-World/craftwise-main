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
import BuiltToLast from "./components/Blogs/Articles/BuiltToLast";
import Blogs from "./components/Blogs/Blogs";
import TalentBridge from "./pages/minipages/TalentBridge";
import LearningCulture from "./components/Blogs/Articles/LearningCulture";
import PosterSection from "./components/PosterSection";
import PerfectStrategy from "./components/Blogs/Articles/PerfectStrategy";
import Genz from "./components/Blogs/Articles/Genz";
import TwentyFirstCentury from "./components/Blogs/Articles/TwentyFirstCentury"
import ExperientialLearning from "./components/Blogs/Articles/ExperientialLearning";
import ManagerialGap from "./components/Blogs/Articles/ManagerialGap";
import Brochure from "./components/Brochure/Brochure";
import Empathy from "./components/Blogs/Articles/Empathy";
import EmotionalIntelligence from "./components/Blogs/Articles/EmotionalIntelligence";
import HardTruths from "./components/Blogs/Articles/HardTruths";
import EventPage from "./components/Blogs/Articles/EventPage";
import CraftwiseAcademy from "./components/Blogs/Articles/CraftwiseAcademy.jsx";

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
        <Route path="/skyline-managers" element={<CraftwiseAcademy />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/talent" element={<TalentBridge />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/built-to-last" element={<BuiltToLast />} />
        <Route path ="/learning-culture" element={<LearningCulture />} />
        <Route path ="/masterclass2025" element={<PosterSection />} />
        <Route path ="/The-Myth-of-Perfect-Strategy" element={<PerfectStrategy />} />
        <Route path ="/genz" element={<Genz />} />
        <Route path ="/Bridging-the-Managerial-Gap" element={<ManagerialGap />} />
        <Route path = "/Training&Development-in-the-21st-Century" element ={<TwentyFirstCentury />} />
        <Route path = "/Experiential-Learning-Future-of-Corporate-Training" element ={<ExperientialLearning />} />
        <Route path ="/brochure" element={<Brochure />} />
        <Route path="/Empathy-as-the-most-Strategic-Skill" element={<Empathy/>} />
        <Route path="/Leading-with-Emotional-Intelligence" element={<EmotionalIntelligence/>} />
        <Route path="/Truths-Every-First-Time-Manager-Needs" element={<HardTruths />} />
        <Route path="/masterclass" element={<EventPage />} />



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
