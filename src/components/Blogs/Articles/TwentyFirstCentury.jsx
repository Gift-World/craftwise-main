import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const TwentyFirstCentury = () => {
  const navigate = useNavigate();
  const article = {
    title: "Training & Development in the 21st Century: The Heartbeat of Effective Teams",
    author: " Edwin Mutoro Situma",
    date: "April 14, 2025",
    subheadings: [
      "Why Training and Development Has Changed",
      "1. Relevance Over Rituals ",
      "2. Blended and Experiential Learning",
      "3. Emotional Intelligence and Human Skills",
      "4. The Power of Coaching and Mentorship",
      "5. Data-Informed Development",
      "Where Training Meets Team Development",
      "Organizational Psychology: The Secret Sauce",
      "Conclusion: Invest in the Human Engine",
      
    ],
    content: [
      `In today’s fast-evolving workplace, characterized by global shifts, emerging technologies, and a 
rapidly diversifying workforce, training and development (T&D) is no longer a luxury—it’s a 
lifeline. But not just any training. To be effective in the 21st century, T&D must be strategic, 
inclusive, human-centered, and deeply integrated with organizational goals. When done right, it 
doesn't just upgrade skills—it transforms teams.
`,

      `Unlike the static training models of the past, where a few days of instruction were considered 
sufficient, the 21st century demands continuous learning. The Fourth Industrial Revolution, 
digitization, and the rise of remote and hybrid work models have accelerated this shift. Modern 
workers must be agile, emotionally intelligent, and highly collaborative—traits that cannot be 
acquired through one-off workshops.
According to the Harvard Business Review, companies that adopt a culture of continuous 
learning outperform competitors in innovation, employee retention, and productivity. So, what 
makes training and development truly effective today?`,
`Gone are the days of generic, cookie-cutter training modules. Effective training today must be 
tailored to real challenges teams face in their roles. It must reflect the cultural nuances, 
industry trends, and skill gaps relevant to the team.
Whether it's equipping frontline staff with better digital tools or helping managers develop 
emotional intelligence to lead diverse teams—relevance is the foundation of engagement.`,
`21st-century training isn't confined to a classroom. Blended learning—which combines online 
platforms, real-time coaching, interactive workshops, and peer-led learning—is more engaging 
and accessible. In Africa, where mobile penetration is high, mobile-based microlearning is 
gaining traction.
Experiential learning—learning by doing—is especially effective. Think simulation-based 
training, team challenges, role-play, and real-time feedback loops. This hands-on approach helps 
teams internalize concepts and immediately apply them in their workflow.`,
`Technical skills are no longer enough. High-functioning teams thrive on trust, empathy, 
adaptability, and collaboration—skills rooted in emotional intelligence. Effective T&D 
programs are now embedding human skills as core components.
For instance, training that teaches conflict resolution, active listening, and psychological safety 
helps teams build deeper connections, which directly impacts performance.`,
`Training shouldn't end after a session. Sustained growth happens through ongoing support. 
Coaching and mentorship programs provide a framework for reflection, accountability, and 
application.
In African organizational cultures where hierarchy can sometimes stifle open communication, 
mentorship becomes a powerful bridge—especially when guided by cultural sensitivity and 
shared lived experiences.
`,
`Using feedback, performance data, and behavioral insights, organizations can now tailor 
development plans to individual and team needs. Tools from organizational psychology, such as 
personality assessments, team diagnostics, and psychometric evaluations, ensure that 
development efforts aren’t just good—they’re smart.`,
     

      `There is a strong correlation between effective training and team development:

• Shared Learning = Shared Language: Teams that train together build common 
frameworks, terminology, and understanding, boosting synergy and reducing friction. 

• Stronger Communication: Training programs focused on interpersonal skills improve
dialogue, feedback, and collaboration.

• Increased Accountability: When teams are co-trained, they are more likely to hold each 
other accountable and support each other in applying new learnings.

• Higher Morale and Engagement: Investing in development shows employees they are 
valued. Teams with access to regular training report higher engagement and job 
satisfaction.

• Faster Conflict Resolution: Equipped with tools for navigating differences, trained 
teams resolve conflicts more constructively and maintain productivity under pressure.

`,

`Organizational psychology plays a silent but vital role in enhancing T&D effectiveness. By 
studying group dynamics, individual motivation, leadership styles, and culture, it enables the 
design of training programs that align learning with behavior change.
For example:

• Understanding generational differences can help tailor training for Gen Z vs Millennials. 

• Insights into cognitive biases can improve decision-making programs.

• Knowledge of psychological safety helps create trust-based leadership workshops.


`,
`At the core of every thriving organization are people—working, learning, evolving together. 
Training and development in the 21st century is no longer about ticking boxes. It’s about 
unlocking potential, fostering collaborative cultures, and equipping leaders and teams to 
navigate change with confidence.
To build great teams, organizations must commit to intentional, relevant, and psychologicallyinformed development strategies. The question is no longer “Should we invest in T&D?” but 
“Are we doing it in a way that transforms our people and drives performance?”`
    ],
    imageUrl: "https://i.imgur.com/5CwT9hL.jpeg",
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

export default TwentyFirstCentury;