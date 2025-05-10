// import React from 'react'
import { motion } from "framer-motion";
import Brochures from "../components/Brochure/Brochures";
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
// import Header from '../components/Header';

function Home() {
  return (
    <div>
       {/* 🔍 SEO META TAGS */}
       <Helmet>
        <title>Craftwise Academy| Experience Learning, That Changes Everything.</title>
        <meta
          name="description"
          content="Unlock your potential with the best learning programs. Join Craftwise Academy today!"
        />
        <meta name="keywords" content="Craftwise, Corporate Leaders,Ambitious Professionals ,Organizations, Transformative Learning" />
        <link rel="canonical" href="https://craftwiseacademy.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Craftwise Academy| Experience Learning, That Changes Everything." />
        <meta property="og:description" content="Join a continent-wide movement of student innovators and changemakers." />
        <meta property="og:url" content="https://craftwiseacademy.com/" />
        {/* <meta property="og:image" content="https://craftwiseacademy.com/images/og-cover.jpg" /> */}

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Africa's Campus Battle | Empowering African Innovators" />
        <meta name="twitter:description" content="A student-powered innovation platform for the next generation of African leaders." />
        <meta name="twitter:image" content="https://africascampusbattle.org/images/og-cover.jpg" /> */}
      </Helmet>
      <Navbar />
      <main>
        {/* <Navbar /> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          
        </motion.div>
      
      <div className="flex justify-end">
        {/* This div will be aligned to the far right */}
        <div className=" rounded-lg shadow-md">
          <Brochures />
        </div>
      </div>
    
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
