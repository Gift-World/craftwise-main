import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';
import { FaChartLine, FaUsers, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

const LegacyLeadersProgram = () => {
  const programData = {
    title: "LEGACY LEADERS PROGRAMME",
    subtitle: "Defining Leadership, Shaping the Future",
    backgroundImage: "https://i.imgur.com/qsWTkfs.png",
    title1: "Leadership Beyond Success – Build a Legacy That Lasts",
    description: "True leadership isn’t measured by titles or achievements alone; it is defined by the impact you leave behind. The Legacy Leaders Programme at CraftWise Academy is designed for seasoned executives, visionary founders, and accomplished leaders who seek to cement their legacy, shape the next generation of leadership, and drive transformational change.",
    duration: {
      weeks: "12 Weeks",
      format: "Elite Masterclass (Hybrid: In-Person + Virtual)",
      components: [
        "Exclusive executive roundtables & think tanks",
        "Strategic foresight and high-level case studies",
        "Private mentorship with globally recognized leaders",
        "Immersive leadership simulations and succession planning frameworks"
      ]
    },
    features: [
      {
        title: "Visionary Leadership",
        description: "Articulate and implement a transformative vision that outlives your tenure.",
        icon: <FaChartLine className="text-white text-xl" />
      },
      {
        title: "Executive Decision-Making",
        description: "Master strategic thinking, crisis navigation, and risk mitigation.",
        icon: <FaUsers className="text-white text-xl" />
      },
      {
        title: "Culture Building",
        description: "Shape a resilient, high-performance, and values-driven organization.",
        icon: <FaSyncAlt className="text-white text-xl" />
      },
      {
        title: "Legacy & Mentorship",
        description: "Cultivate future leaders and institutionalize your leadership philosophy.",
        icon: <FaLightbulb className="text-white text-xl" />
      }
    ],
    tools: [
      "Exclusive Access to Global Thought Leaders – Engage in high-level discussions with top executives, policymakers, and industry pioneers.",
      "Deeply Transformational & Practical – Designed for those who lead at the highest levels and need cutting-edge, real-world application.",
      "Bespoke Leadership Development – Curated experiences tailored to your leadership aspirations and organizational impact.",
      "Elite Networking & Influence Expansion – Connect with global changemakers, legacy builders, and thought leaders shaping the future."
    ],
    outcome: "Apply Now – Leave a Mark That Endures Only a select number of leaders are admitted into each cohort. Join this prestigious leadership experience and shape a legacy that transcends generations. Next Cohort Begins Soon – Apply today!",
    outcome1:" Senior leaders who inspire, innovate, and build a thriving organizational culture.",
    eligibility: [
      "CEOs, Board Members & Senior Executives – Elevate your leadership influence and long-term vision.",
      "Accomplished Entrepreneurs – Ensure your business thrives beyond your tenure.",
      "Government & Public Sector Leaders – Drive meaningful change and policy impact.",
      "Philanthropists & Thought Leaders – Shape industries, communities, and legacies."
    ]
  };

  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );
};

export default LegacyLeadersProgram;
