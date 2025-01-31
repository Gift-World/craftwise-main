import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';
import { FaChartLine, FaUsers, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

const NewManagersProgram = () => {
  const programData = {
    title: "NEW MANAGERS PROGRAMME",
    subtitle: "Master the Transition from Individual Contributor to Respected Leader",
    backgroundImage: "https://i.imgur.com/Y94ziMX.png",
    title1: "Ready to Become the Leader Your Team Looks Up To?",
    description: "The leap from top performer to successful manager is one of the biggest shifts in a professional’s career. The New Managers Programme is designed to equip you with the leadership, communication, and strategic thinking skills needed to lead with confidence, earn respect, and inspire high-performing teams.",
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
        title: "Leadership Foundations",
        description: "Make the critical shift from peer to leader while maintaining trust and authority.",
        icon: <FaChartLine className="text-white text-xl" />
      },
      {
        title: "Team Dynamics",
        description: "Learn how to manage performance, resolve conflicts, and foster collaboration.",
        icon: <FaUsers className="text-white text-xl" />
      },
      {
        title: "Strategic Thinking",
        description: "Use decision-making frameworks to tackle challenges and lead with clarity.",
        icon: <FaSyncAlt className="text-white text-xl" />
      },
      {
        title: "Personal Leadership Brand",
        description: "Define your leadership identity, communicate your vision, and earn trust from your team.",
        icon: <FaLightbulb className="text-white text-xl" />
      }
    ],
    tools: [
      "Leadership Toolkit – Ready-to-use strategies for effective management.",
      "Behavioral Assessments – Gain insights into your strengths and areas for growth.",
      "Simulated Scenarios – Practice real-world leadership challenges in a risk-free environment.",
      "Performance Tracking Dashboard – Measure your growth and leadership effectiveness."
    ],
    outcome: "Confident, people-focused managers who inspire, drive success, and lead with clarity. A structured approach to handling difficult conversations, team dynamics, and performance management. The ability to motivate teams, align goals, and create a thriving workplace culture.",
    eligibility: [
      "Newly promoted managers stepping into leadership roles.",
      "High-potential employees preparing for a managerial transition.",
      "Professionals looking to lead teams with confidence, strategy, and emotional intelligence."
    ]
  };

  return (
    <>
      <ProgramPage {...programData} />
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tools & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programData.tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewManagersProgram;
