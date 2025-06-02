// import React from 'react'
import { motion } from "framer-motion";
// import { useState, useEffect } from 'react'
// import Modal from '../components/RisingPro/Modal'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import SolutionSection from "../components/Solution/SolutionSection";
import OfficeLabsSection from "../components/OfficeLabs/OfficeLabsSection";
import ImmersiveSection from "../components/Immersive/ImmersiveSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import CraftersAssemblySection from "../components/CraftersAssembly/CraftersAssemblySection";
import WhyItMattersSection from "../components/WhyItMatters/WhyItMattersSection";
import TeamSection from "../TeamSection";
import ImpactSection from "../components/Impact/ImpactSection";
import PartnersSection from "../components/Partners/PartnersSection";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
// import RisingPoster from "../components/RisingPro/RisingPoster";
// import Header from '../components/Header';

function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal when the component mounts
  // useEffect(() => {
  //   // Small delay to ensure smooth animation
  //   const timer = setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      {/* 🔍 SEO META TAGS */}
      <Helmet>
        <title>
          Craftwise Academy – Transformative Learning for Future Leaders
        </title>
        <meta
          name="description"
          content="Unlock your potential with the best learning programs. Join Craftwise Academy today!"
        />
        <meta
          name="keywords"
          content="Craftwise Academy,Craftwise,  Corporate Leaders,Ambitious Professionals ,Organizations, Transformative Learning"
        />
        <link rel="canonical" href="https://craftwiseacademy.com/" />
      </Helmet>
      <Navbar />
      <main>
        {/* <Navbar /> */}

        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </div>
        {/* <RisingPoster /> */}

        {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RisingPoster />
      </Modal>
       */}

        <About />
        {/* <Brochures /> */}

        <WhatWeDo />
        <SolutionSection />
        <OfficeLabsSection />
        <ImmersiveSection />
        <ExperienceSection />
        <CraftersAssemblySection />
        <WhyItMattersSection />
        <TeamSection />
        <ImpactSection />
        <PartnersSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
