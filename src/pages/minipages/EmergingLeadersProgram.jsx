import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';
import { FaChartLine, FaUsers, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

const EmergingLeadersProgram = () => {
  const programData = {
    title: "EMERGING & ADVANCED LEADERS PROGRAMME",
    subtitle: "Step into Senior Leadership with Confidence",
    backgroundImage: "https://i.imgur.com/1NTh8oR.png",
    title1: "Ready to Lead at the Next Level?",
    description: "Leadership is more than managing teams; it's about influencing strategy, driving transformation, and preparing for executive roles. The Emerging & Advanced Leaders Programme at CraftWise Academy is designed for high-potential professionals who are ready to step into senior leadership and navigate complex organizational challenges with clarity and impact.",
    duration: {
      weeks: "10 Weeks",
      format: "Hybrid Learning (Live + Self-Paced Modules)",
      components: [
        "Immersive leadership simulations & decision-making challenges",
        "Real-world case studies & executive coaching",
        "Peer networking & expert-led strategy sessions",
        "Capstone project solving a high-level organizational challenge"
      ]
    },
    features: [
      {
        title: "Strategic Impact",
        description: "Align initiatives with business goals and manage multi-stakeholder environments.",
        icon: <FaChartLine className="text-white text-xl" />
      },
      {
        title: "Advanced People Management",
        description: "Lead, coach, and foster innovation while creating psychologically safe teams.",
        icon: <FaUsers className="text-white text-xl" />
      },
      {
        title: "Change Management",
        description: "Master leading through transitions, organizational shifts, and adaptive leadership.",
        icon: <FaSyncAlt className="text-white text-xl" />
      },
      {
        title: "Innovation & Influence",
        description: "Inspire teams, drive creative problem-solving, and enhance executive presence.",
        icon: <FaLightbulb className="text-white text-xl" />
      }
    ],
    tools: [
      "Strategic & Hands-On Learning – Learn through real challenges, not just theory",
      "Tailored for Aspiring Executives – Gain the mindset, tools, and confidence",
      "Elite Network & Mentorship – Connect with experienced executives",
      "Capstone Project for Real-World Application – Showcase your leadership"
    ],
    outcome: " Apply Now – Your Leadership Evolution Starts Here Future senior leaders are built today. Be part of an elite cohort of professionals driving meaningful change in their organizations. Next Cohort Begins Soon – Secure your spot now!",
    outcome1:"  Leaders equipped to handle complex challenges and drive organizational transformation",
    eligibility: [
      "Mid-Level Managers & High-Potential Leaders – Take the next step toward senior leadership",
      "Department Heads & Functional Leaders – Expand your strategic influence",
      "Fast-Track Professionals – Develop the executive presence and decision-making skills",
      "Team Leaders Managing Complex Projects – Strengthen leadership capabilities"
    ]
  };

  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );
};

export default EmergingLeadersProgram;