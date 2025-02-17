import TalentPage from '../minipages/TalentPage';
import Footer from '../../components/Footer/Footer';
import { FaChartLine, FaUsers, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

const TalentBridge = () => {
  const programData = {
    title: "CraftWise Talent Bridge",
    subtitle: "Top Talent. Zero Hiring Costs. Real Career Breakthroughs. Real Results.",
    backgroundImage: "https://i.imgur.com/LK115l9.jpeg",
    // title1: "Ready to Become the Leader Your Team Looks Up To?",
    // description: "The leap from top performer to successful manager is one of the biggest shifts in a professional’s career. The New Managers Programme is designed to equip you with the leadership, communication, and strategic thinking skills needed to lead with confidence, earn respect, and inspire high-performing teams.",
    duration: {
      weeks: "10 Weeks",
      format: "Hybrid Learning (Live + Self-Paced Modules)",
      components: [
        "Leadership Foundations – Make the critical shift from peer to leader while maintaining trust and authority.",
        "Team Dynamics – Learn how to manage performance, resolve conflicts, and foster collaboration.",
        "Strategic Thinking – Use decision-making frameworks to tackle challenges and lead with clarity.",
        "Personal Leadership Brand – Define your leadership identity, communicate your vision, and earn trust from your team."
      ]
    },
    features: [
      {
        title: "Top Talent, Pre-Screened & Work-Ready",
        description: "No more sifting through unqualified applications. We deliver highly trained professionals who understand corporate culture, task management, and professional communication.",
        icon: <FaChartLine className="text-white text-xl" />
      },
      {
        title: "Risk-Free Hiring with Guaranteed Performance",
        description: "Assess candidates on the job before making a commitment. If a hire underperforms during probation, we replace them—no questions asked",
        icon: <FaUsers className="text-white text-xl" />
      },
      {
        title: "Future-Proof Your Talent Pipeline",
        description: "Build a continuous stream of skilled professionals—ready when you need them. Strengthen your employer brand by partnering with a mission-driven talent accelerator.",
        icon: <FaSyncAlt className="text-white text-xl" />
      },
      {
        title: "Personal Leadership Brand",
        description: "Define your leadership identity, communicate your vision, and earn trust from your team.",
        icon: <FaLightbulb className="text-white text-xl" />
      }
    ],
    tools: [
      "Zero Hiring Fees for Employers",
      "Pre-Screened, Job-Ready Talent",
      "Hands-On, Real-World Training.",
      "Guaranteed Job Placement Support."
    ],
    outcome: " Ready to become the leader your team looks up to? Join the New Managers Programme and start your leadership journey today! Apply Now – Spaces are limited!",
   outcome1:"Confident, empathetic managers capable of inspiring and driving team success.",
    eligibility: [
      " Master the skills top employers demand (communication, workflow management, professional networking).",
      " Gain direct access to job openings in reputable companies.",
      "Get fast-tracked for interviews with companies hiring RIGHT NOW.",
      "Join a program where 80%+ of graduates land jobs in just 90 days!"
    ]
  };

  return (
    < >
      <TalentPage {...programData} />
      
      <Footer />
    </>
  );
};

export default TalentBridge;
