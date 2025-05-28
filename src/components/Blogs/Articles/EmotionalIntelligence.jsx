import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const EmotionalIntelligence = () => {
  const navigate = useNavigate();
  const article = {
    title: "Leading with Emotional Intelligence: The Secret to Building High-Performing Teams",
    author: "Edwin Mutoro",
    date: "May 29, 2025",
    subheadings: [
      "Why Emotional Intelligence Matters",
      "Practical Steps to Build Emotional Intelligence as a Leader",
      "How Emerging Managers Are Being Equipped",
      "Evidence-Based Impact of Emotional Intelligence on Team Performance",
      "A Real-World Scenario",
      "Why It Matters Now — Especially in Africa",
      "Final Thought"
    ],
    content: [
      `Leadership today is no longer just about KPIs and strategies. It's about people. In a dynamic workplace where diversity of thought, background, and expectations is the norm, one skill continues to stand out as a critical differentiator between mediocre and exceptional leadership — Emotional Intelligence (EQ). EQ isn’t just a "nice-to-have" anymore; it's a leadership imperative.`,


      `Leaders and managers are constantly navigating complex interpersonal landscapes — from managing team dynamics and inspiring performance to handling conflict and communicating change. In these moments, emotional intelligence becomes the glue that holds everything together.

          Leaders with strong EQ:

      • Understand and manage their own emotions.
      • Navigate stress and pressure with composure.
      • Empathize deeply with their team members.
      • Create a culture of psychological safety.
      • Lead with intention and integrity.

      The result? Higher-performing teams, lower attrition, and a stronger, more inclusive workplace culture.`,

      `1. Practice Self-Awareness
      Set time aside to reflect daily. Ask: What did I feel today? Why? How did that impact others? Journaling emotions and reactions is a powerful tool to build emotional clarity.

      2. Seek Feedback Regularly
     Invite honest feedback from your peers, mentors, and team. Not just on performance, but on how you make people feel in interactions.

      3. Build Empathy Intentionally
      Spend time truly listening to your team. Avoid interrupting. Understand what motivates them, what worries them, and what drives their sense of value.

      4. Learn to Pause Before Responding
      When emotions run high, take a pause. Count to five. Breathe. This prevents reactive decisions and models emotional control.

      5. Engage in EQ-focused Learning
      Programs like the Emerging Managers Program offer practical tools and simulations to grow EQ through real-world leadership challenges.

      6. Model Vulnerability
     Great leaders are not afraid to say “I don’t know,” “I need help,” or “I got that wrong.” Vulnerability builds trust and openness in teams.

      7. Invest in Mentorship & Coaching
     Work with a coach or mentor who can help you recognize blind spots and develop the emotional resilience to lead courageously.`,

      `At Craftwise Academy, the Emerging Managers Program offers a structured path for new and growing managers to build the competencies needed for leadership in the 21st century. Four standout modules that reinforce EQ development include:
      
      1. Strategic Impact
      Aligns people strategies with business goals while managing stakeholder expectations — requiring self-awareness and empathy.

      2. Advanced People Managementing
      Builds capacity to coach and create psychologically safe teams — rooted in trust and emotional regulation.

      3. Change Management
     Trains managers to lead through uncertainty and transitions — leveraging self-awareness, active listening, and empathy.

      4. Innovation & Influence
      Encourages leaders to inspire, collaborate, and build influence — all of which demand high EQ.
      
      `,

`The significance of emotional intelligence in leadership isn't just theoretical; it's backed by substantial research:

      •  Enhanced Team Productivity: A study by the University of Pennsylvania found that teams with high emotional intelligence outperform their peers by 20% in productivity and employee satisfaction. 

      • Improved Work Behaviors and Results: A comprehensive review in Heliyon concluded that emotionally intelligent leaders positively influence both behaviors and business outcomes, significantly impacting work team performance. 

      • Positive Team Dynamics: Research published in the International Journal of Science and Research Archive demonstrated that emotionally intelligent leaders foster positive  team dynamics, leading to increased engagement and commitment. Case studies from companies like Google and Johnson & Johnson illustrate how EQ in leadership boosts employee happiness and creativity. 

      • Increased Employee Engagement: The Center for Creative Leadership highlights that leaders with high emotional intelligence are more effective, as they build trust and engagement within their teams, leading to better performance. 

     These findings underscore that developing emotional intelligence is not merely beneficial but essential for leaders aiming to cultivate high-performing teams.`,
      `Picture this: A team underperforms due to unclear communication and low morale. A manager steps in — not with top-down directives — but by listening. They host a check-in session, encourage openness, acknowledge concerns, and offer support. They clarify roles, co-create new workflows, and check back regularly. Within weeks, team energy shifts, trust builds, and performance rebounds. 
      
      The difference? Emotional Intelligence.`,
`As African workplaces become more multi-generational, hybrid, and culturally diverse, leadership must evolve. Emotional intelligence equips leaders to embrace nuance, understand generational motivations, and foster resilience. It’s not just about managing teams — it’s about empowering people.`,
`Technical skill may land you a leadership title — but emotional intelligence is what earns you leadership trust.

To lead well in this era, we must do more than manage tasks. We must connect with people, understand their worlds, and lead with heart.`

    ],
    imageUrl: "/images/intelligence.avif",
    organization: "Craftwise Academy",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/blogs')}
          className="mb-6 px-6 py-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center space-x-2 group"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
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
          <span className="text-orange-600 font-montserrat">Back to Articles</span>
        </motion.button>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <motion.div
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

              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="prose lg:prose-xl font-montserrat text-gray-700 leading-relaxed">
                <p>{article.content[0]}</p>
                
                {article.subheadings.map((subheading, index) => (
                  <div key={index} className="mt-8">
                    <h2 className="font-montserrat font-bold text-orange-500 mt-4">
                      {subheading}
                    </h2>
                    <p className="mt-4 font-montserrat whitespace-pre-line">{article.content[index + 1]}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  {/* <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #career
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #leadership
                  </span> */}
                  <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/blogs')}
          className="mb-6 px-6 py-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center space-x-2 group"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
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
        </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
      <Footer />
    </div>
  );
};

export default EmotionalIntelligence;