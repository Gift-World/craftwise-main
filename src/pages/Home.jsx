import Hero from "../components/Hero";
import {useState} from 'react';
import Navbar from "../components/Navbar";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import SolutionSection from "../components/Solution/SolutionSection";
import OfficeLabsSection from "../components/OfficeLabs/OfficeLabsSection";
import ImmersiveSection from "../components/Immersive/ImmersiveSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import CraftersAssemblySection from "../components/CraftersAssembly/CraftersAssemblySection";
import WhyItMattersSection from "../components/WhyItMatters/WhyItMattersSection";
// import CraftwiseAcademy  from "../components/Blogs/Articles/CraftwiseAcademy.jsx";
import TeamSection from "../TeamSection";
import ImpactSection from "../components/Impact/ImpactSection";
import PartnersSection from "../components/Partners/PartnersSection";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import ProgramAlert from "../components/ProgramAlert.jsx";
// import EventPage from "../components/Blogs/Articles/EventPage";
// import Companies from "../components/Companies";
// import RisingPoster from "../components/RisingPro/RisingPoster";
// import Header from '../components/Header';

function Home() {
  // const [showAlert, setShowAlert] = useState(true)
  // const handleDismiss = () => {
  //   setShowAlert(false)
  // }

  return (
    <div>
      {/* 🔍 SEO META TAGS */}
      <Helmet>
        <title>
          Craftwise Academy – Transformative Learning for Future Leaders
        </title>
        <meta
          name="description"
          content="Craftwise Academy provides online learning and professional training programs in Kenya. Empower your career and organization with real-world skills and leadership development.Unlock your potential with the best learning programs. Join Craftwise Academy today!"
        />
        <meta
          name="keywords"
          content="Craftwise Academy, Craftwise, Corporate Leaders ,Organizations, Transformative Learning, Online courses Kenya, professional training, corporate learning, career development"
        />
        <link rel="canonical" href="https://craftwiseacademy.com/" />
      </Helmet>
      <Navbar />
      <main>
        {/* <Navbar /> */}

       
          <Hero />


        <About />
        {/*{showAlert && (*/}
        {/*  <ProgramAlert onDismiss={handleDismiss} />*/}
        {/*)}*/}
        {/*<CraftwiseAcademy />*/}
        {/* <EventPage /> */}
        {/* <Brochures /> */}

        <WhatWeDo />
        <SolutionSection />
        <OfficeLabsSection />
        <ImmersiveSection />
        <ExperienceSection />
        <CraftersAssemblySection />
        <WhyItMattersSection />
        <TeamSection />
        {/* <Companies /> */}
        <ImpactSection />
        <PartnersSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
