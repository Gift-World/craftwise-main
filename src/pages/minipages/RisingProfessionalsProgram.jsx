import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';
import { FaChartLine, FaUsers, FaSyncAlt, FaLightbulb } from 'react-icons/fa';
// import PosterSection from '../../components/PosterSection';  

const RisingProfessionalsProgram = () => {
  const programData = {
    title: "Rising Professionals – Your Fast Track to Workplace Success!",
    subtitle: "Ready to Thrive in Your First 100 Days and Beyond?",
    backgroundImage: "https://i.imgur.com/6GjLRZC.png",
    title1: "Ready to Lead at the Next Level?",
    description: "Your first 100 days in a new job can make or break your career. Feeling overwhelmed? Struggling to prove your value? Wondering how to make a lasting impression? We’ve got you covered! At CraftWise Academy, we don’t do boring lectures. We craft hands-on, immersive, and practical learning experiences designed to equip you with the confidence, skills, and strategies to excel from Day 1.",
    duration: {
      weeks: "6 Weeks",
      format: "Hybrid Learning (Live + Self-Paced Modules)",
      components: [
        "Weekly interactive workshops & case studies",
        "Hands-on projects & AI-powered feedback",
        "One-on-one career coaching & mentorship",
        "Capstone challenge solving real workplace problems"
      ]
    },
    features: [
      {
        title: "Corporate Readiness",
        description: "Master workplace etiquette & make a great first impression.",
        icon: <FaChartLine className="text-white text-xl" />
      },
      {
        title: "Task Management",
        description: "Learn to prioritize like a pro using tools like Trello & Asana.",
        icon: <FaUsers className="text-white text-xl" />
      },
      {
        title: "Professional Communication",
        description: "Write emails that get responses & lead meetings with impact.",
        icon: <FaSyncAlt className="text-white text-xl" />
      },
      {
        title: "Strategic Relationship-Building",
        description: "Grow your network & sharpen emotional intelligence.",
        icon: <FaLightbulb className="text-white text-xl" />
      }
    ],
    tools: [
      "100% Practical & Hands-On – No theory overload, just real-world learning",
      "Personalized Career Guidance – AI-driven feedback & expert mentorship",
      "High-Impact Curriculum – Designed with top employers to meet industry demands",
      "Strong Professional Network – Connect with industry leaders & like-minded peers"
    ],
    outcome: "Seats are limited, and demand is high! Don’t miss out on the ultimate career accelerator. Next Cohort Starts Soon – Apply today!",
    outcome1:" Confident, efficient, and well-connected professionals ready to thrive in their first 100 days",
    eligibility: [
      "Fresh Graduates & Job Seekers – Land your first job and hit the ground running",
      "Young Professionals (0–3 years experience) – Fast-track your growth and stand out",
      "Career Changers – Transition smoothly into a new industry with confidence",
      "Interns & Apprentices – Impress your employers and turn short-term roles into career opportunities"
    ]
  };

  return (
    <div id="rising">
    
      <ProgramPage {...programData} />
      <Footer />
    </div>
  );
};

export default RisingProfessionalsProgram;
