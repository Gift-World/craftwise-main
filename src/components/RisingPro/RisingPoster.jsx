import { useState, useEffect } from 'react'
import HeaderRising from './HeaderRising'
import HeroRising from './HeroRising'
import RisingDetails from './RisingDetails'
import ContentSection from './ContentSection'
import FooterRising from './FooterRising'
import { motion } from 'framer-motion'

function RisingPoster() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // What You'll Master content
  const masterContent = [
    'Corporate Readiness',
    'Task Management',
    'Strategic Relationship-Building',
    'Professional Communication'
  ];

  // Who Should Apply content
  const applyContent = [
    'Fresh Graduates & Job Seekers',
    'Young Professionals',
    'Career Changers',
    'Interns & Apprentices'
  ];

  return (
    <motion.div 
      className="relative overflow-hidden bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[25%] md:-left-[15%] w-[80%] h-[120%] gradient-circle z-0"></div>
      </div>

      <div className="relative z-10">
        <HeaderRising />
        <HeroRising />
        <RisingDetails />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16 py-8 bg-craftwise-maroon text-white">
          <ContentSection 
            title="WHAT YOU'LL MASTER" 
            items={masterContent} 
            icon="/images/education-icon.png"
          />
          <ContentSection 
            title="WHO SHOULD APPLY?" 
            items={applyContent} 
            icon="/images/megaphone-icon.png"
          />
        </div>
        
        <FooterRising 
          applyLink="https://forms.gle/6gWr9S4gYuBA3UDJ6" 
          // websiteUrl="CRAFTWISEACADEMY.COM/RISING"
        />
      </div>
    </motion.div>
  )
}

export default RisingPoster ;