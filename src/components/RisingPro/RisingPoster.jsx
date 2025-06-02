import { useState, useEffect } from "react";
import HeaderRising from "./HeaderRising";
import HeroRising from "./HeroRising";
import RisingDetails from "./RisingDetails";
import ContentSection from "./ContentSection";
import FooterRising from "./FooterRising";

function RisingPoster() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // What You'll Master content
  const masterContent = [
    "Corporate Readiness",
    "Task Management",
    "Strategic Relationship-Building",
    "Professional Communication",
  ];

  // Who Should Apply content
  const applyContent = [
    "Fresh Graduates & Job Seekers",
    "Young Professionals",
    "Career Changers",
    "Interns & Apprentices",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-white"
     
    >
      {/* Background shape */}
      <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div className="gradient-circle absolute -left-[25%] -top-[10%] z-0 h-[120%] w-[80%] md:-left-[15%]"></div>
      </div>

      <div className="relative z-10">
        <HeaderRising />
        <HeroRising />
        <RisingDetails />

        <div className="grid grid-cols-1 gap-6 bg-craftwise-maroon px-4 py-8 text-white md:grid-cols-2 md:px-8 lg:px-16">
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
    </div>
  );
}

export default RisingPoster;
