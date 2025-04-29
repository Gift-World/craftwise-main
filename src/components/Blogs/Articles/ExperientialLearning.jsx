import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const ExperientialLearning = () => {
  const navigate = useNavigate();
  const article = {
    title: "Why Experiential Learning Is the Future of Corporate Training in Africa",
    author: " George Munge",
    date: "April 23, 2025",
    subheadings: [
      "What Is Experiential Learning?",
      "Why Africa Needs Experiential Learning Now ",
      "1. Workforce Readiness and Youth Demographics",
      "2. Dynamic Market Conditions",
      "3. Contextual Relevance",
      "Real-World Impact: Success Stories from Across Africa",
      "Core Benefits of Experiential Learning in Corporate Training",
      "Conclusion",
      
      
    ],
    content: [
      `In today's rapidly evolving workplace, the gap between knowledge and performance has
become increasingly evident. While many African professionals hold technical qualifications and
formal degrees, they often struggle to translate this knowledge into impactful leadership and
problem-solving in the workplace. This disconnect calls for a shift from traditional lecture-based
training to more dynamic, engaging, and practical approaches. One solution stands out:
experiential learning.
Craftwise Academy, as a pioneer in corporate training across Africa, champions this
transformative approach. By integrating real-world scenarios, collaborative projects, and
reflective practices, experiential learning not only equips managers and teams with the tools to
succeed—it transforms mindsets.
`,

      `Experiential learning is a process where individuals learn
through experience, reflection, and application. Unlike passive forms of learning such as reading
or lectures, experiential learning involves active participation. Developed from the work of
educational theorist David Kolb, the model emphasizes a cycle of concrete experience,
reflective observation, abstract conceptualization, and active experimentation.
In a corporate context, this could mean simulations, role-playing, on-the-job challenges,peer
collaboration, and feedback sessions. Instead of memorizing frameworks, learners apply them
in real-time, refining their understanding through trial and reflection.`,
``,
`Africa is the youngest continent, with over 60% of the population under the age of 25.
By 2030, the African workforce is expected to be the largest in the world (World
Economic Forum, 2022). However, formal education systems often lag in providing skills
needed in the 21st-century workplace. Experiential learning bridges this gap, ensuring
that young professionals gain not just knowledge, but competence.`,
`The African business environment is marked by rapid technological change,
unpredictable regulatory shifts, and evolving consumer needs. Traditional training
methods do not equip professionals to navigate this uncertainty. Experiential learning
fosters adaptability, critical thinking, and resilience—skills that are vital in fast-changing
markets.`,
`Imported training models often ignore the unique socio-cultural dynamics of African
workplaces. Experiential learning allows for the integration of local case studies,
indigenous knowledge systems, and African business realities, making learning far more
effective and relevant. 
Coaching and mentorship programs provide a framework for reflection, accountability, and 
application.
In African organizational cultures where hierarchy can sometimes stifle open communication, 
mentorship becomes a powerful bridge—especially when guided by cultural sensitivity and 
shared lived experiences.
`,
`In Kenya, a logistics firm reduced employee turnover by 30% after introducing team-based
problem-solving workshops based on experiential learning. In Nigeria, an agribusiness saw a
20% increase in team productivity after simulating cross-functional collaboration in a leadership
training program.
Craftwise Academy has led similar initiatives, where managers from across Ghana, Rwanda,
and South Africa have gone through immersive programs involving leadership simulations,
negotiation role-plays, and community-based projects—resulting in demonstrable improvements
in employee engagement and organizational performance.`,
     

      `
• Higher Retention of Knowledge: Learners retain 75% of information when they practice
by doing, compared to only 10% from reading (National Training Laboratories). 

• Improved Problem Solving and Decision-Making: Learners are placed in real-world
scenarios that demand analytical thinking and strategic response.

• Increased Engagement: Experiential methods are inherently interactive, boosting
motivation and emotional investment in learning.

• Leadership Development: By simulating real-life challenges, future leaders develop
confidence, communication, and team-building skills.
The Role of Craftwise Academy in Shaping the Future

Craftwise Academy is redefining how African professionals grow. Our programs blend theory
with real-world African business challenges, creating transformative learning environments.
Through our flagship Emerging Managers Program, we’re not just teaching leadership—we’re
cultivating it.
With an expanding footprint across major African cities and partnerships with leading
corporates, Craftwise is proving that experiential learning isn't just a method—it's a movement.

`,

`The future of work in Africa demands a new kind of professional: agile, emotionally intelligent,
and visionary. Experiential learning is the key to shaping such individuals. It equips
professionals not just to survive change—but to lead it.
As Africa rises, so too must its leaders. And their training must be as dynamic and bold as the
challenges they face. The time for passive learning is over. The era of experiential learning is
here

`

    ],
    imageUrl: "https://i.imgur.com/aHIguOT.jpeg",
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

export default ExperientialLearning;