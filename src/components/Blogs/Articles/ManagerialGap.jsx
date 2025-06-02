import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

const ManagerialGap = () => {
  const navigate = useNavigate();
  const article = {
    title:
      "Bridging the Managerial Gap: How African Companies Can Build Visionary Leaders from Within",
    author: " George Munge",
    date: "April 30, 2025",
    subheadings: [
      "Understanding the Managerial Gap",
      "Why Middle Managers Matter More Than Ever",
      "Building Leaders from Within: A Strategic Imperative",
      "Craftwise Academy’s Emerging Managers Program: Leading the Way",
      "Conclusion",
    ],
    content: [
      `Across Africa, industries are evolving at breakneck speed. Yet one persistent bottleneck threatens to slow progress: the shortage of effective middle managers. In sectors ranging from finance to technology, agriculture to energy, the "managerial gap" is a reality many organizations can no longer ignore. Without strong middle management, strategies fail at the execution level, employee engagement suffers, and innovation stalls. The solution lies not in external recruitment alone, but in intentionally building leadership capacity from within. At Craftwise Academy, we believe that the answer is clear: targeted, Afrocentric programs like the Emerging Managers Program that blend experiential learning with leadership principles are crucial to shaping Africa's next generation of visionary leaders.`,
      `The managerial gap in African companies stems from several interlinked challenges:

• Promotion without Preparation: Many employees are promoted based on technical expertise rather than leadership readiness. 

• Lack of Formal Leadership Training: Most African universities and colleges focus on technical degrees with little emphasis on people management.

• Cultural Dynamics: Hierarchical organizational cultures often inhibit the development of proactive leadership behaviors.

• Talent Drain: Skilled mid-level managers are frequently lured abroad or to multinational firms, creating instability.

According to a McKinsey (2023) report, African businesses could grow their revenues by up to 30% if they invested in better leadership development strategies.

`,

      `Middle managers are the linchpin between strategy and execution. They translate vision into action, motivate teams, and adapt strategies to ground realities. In the African context, where resource constraints and market volatility are common, effective middle management is not a luxury—it is a necessity.
Strong middle managers:

• Improve operational efficiency 
• Drive employee retention and engagement
• Champion innovation at the grassroots level
• Act as internal talent incubators
`,

      `Rather than continually seeking external hires, African companies must focus on cultivating leadership from within. This approach is not only cost-effective but ensures cultural fit, loyalty, and deep organizational knowledge.
Key elements of an effective internal leadership pipeline include:

• Structured Manager Training Programs: Tailored initiatives like Craftwise Academy's Emerging Managers Program that combine technical, strategic, and interpersonal skill-building. 

• Mentorship and Sponsorship: Senior leaders must intentionally mentor high-potential employees.

• Experiential Learning Opportunities: Leadership simulations, special projects, and real-world assignments accelerate readiness.

• Feedback-Driven Development: Regular, constructive feedback loops to help managers refine their leadership style.
`,
      `Craftwise Academy’s Emerging Managers Program is designed specifically to address Africa’s unique corporate leadership needs. Unlike generic trainings, it offers:

• Afrocentric Case Studies: Content grounded in African business realities, not imported templates. 

• Hybrid Learning: Blending virtual masterclasses with face-to-face intensives.

• Coaching and Peer Learning: Building a community of practice among emerging leaders.

•  Experiential Modules: Participants practice real-world leadership scenarios drawn from sectors such as finance, agriculture, technology, and non-profit.

Graduates of the program will consistently report increased confidence, better team performance, and accelerated career growth. Africa's diversity demands leadership development that respects cultural nuances. Programs grounded in the continent's values—such as community, resilience, and innovation—produce leaders who are not just effective, but authentically African.
`,

      `Africa’s economic future depends not just on visionaries at the top but on a robust layer of capable managers who can bring that vision to life. Bridging the managerial gap is no longer optional; it is an urgent business imperative. 

African companies must prioritize building leadership pipelines from within—developing emerging managers who are equipped, inspired, and empowered to lead boldly in a dynamic global landscape. 

At Craftwise Academy, we are proud to be lighting the path for Africa’s next generation of leaders. The journey has begun—and it begins from within.

`,
    ],
    imageUrl: "https://i.imgur.com/aHIguOT.jpeg",
    organization: "Craftwise Academy",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl">
        <button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/blogs")}
          className="group mb-6 flex items-center space-x-2 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
        >
          <svg
            className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-montserrat text-orange-600">
            Back to Articles
          </span>
        </button>

        <article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <div className="p-6">
            <div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="font-medium">{article.organization}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-800">
                {article.title}
              </h1>

              <div className="flex items-center text-gray-600">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>

              <img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={article.imageUrl}
                alt={article.title}
                className="mb-8 h-[400px] w-full rounded-lg object-cover shadow-lg"
              />

              <div className="prose lg:prose-xl font-montserrat leading-relaxed text-gray-700">
                <p>{article.content[0]}</p>

                {article.subheadings.map((subheading, index) => (
                  <div key={index} className="mt-8">
                    <h2 className="mt-4 font-montserrat font-bold text-orange-500">
                      {subheading}
                    </h2>
                    <p className="mt-4 whitespace-pre-line font-montserrat">
                      {article.content[index + 1]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div className="flex items-center space-x-2">
                  <button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate("/blogs")}
                    className="group mb-6 flex items-center space-x-2 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
                  >
                    <svg
                      className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="text-orange-600">Back to Articles</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default ManagerialGap;
