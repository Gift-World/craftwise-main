import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Genz = () => {
  const navigate = useNavigate();
  const article = {
    title: "Welcome to the Jungle: The Reality of the Modern Workplace",
    author: "Edwin Mutoro Situma",
    date: "March 14, 2025",
    subheadings: [
      "The Gen Z Workforce – Misunderstood or Mismanaged?",
      "Bridging the Gap: Training & Development as the Game-Changer",
      "How do GenZ then thrive in the WorkPlace",
      "The Role of Organizational Psychology in the Future Workplace",
      "HR & Learning Managers: The Call to Action"
    ],
    content: [
      `The Gen Z workforce is redefining the traditional workplace, bringing with them new expectations,
digital fluency, and a demand for purpose-driven work. Unlike previous generations, Gen Z values
flexibility, mental well-being, and opportunities for continuous growth over rigid structures and
conventional career ladders. With the rise of digital transformation, remote work, and the gig
economy, today’s workplace is vastly different from what previous generations experienced.
However, organizations often struggle to integrate and retain this dynamic demographic due to
outdated leadership approaches, misaligned training strategies, and a lack of psychological insight
into what truly drives them. This is where organizational psychology becomes a game-changer—
helping companies design environments that foster engagement, motivation, and long-term
success. How can businesses leverage training and development to bridge the gap between Gen
Z’s aspirations and organizational goals? Let’s explore.`,

      `Many organizations struggle to integrate Gen Z talent effectively. The stereotypes are loud—
impatient, entitled, glued to their screens, and constantly job-hopping. But beneath these labels lies
a generation that values purpose over paycheck, flexibility over micromanagement, and impact
over bureaucracy.
The challenge? Companies often try to fit Gen Z into outdated molds instead of leveraging their
strengths: tech-savviness, creativity, and the ability to question the status quo. This disconnect
creates friction between traditional leadership and the evolving expectations of today’s workforce.`,

      `To truly unlock Gen Z’s potential, organizations must rethink their approach to training and
development. Here’s how:
      1. Ditch the One-Size-Fits-All Model – Long, monotonous onboarding sessions? Death by PowerPoint? Forget it. Gen Z learns through
interactive, engaging, and personalized experiences. Companies that integrate gamification,
microlearning, and mentorship programs see better retention and engagement rates.
      2. Create a Learning Culture, Not a Lecture Hall – Training shouldn’t feel like a chore. Organizations that build continuous learning into their DNA—
through peer mentorship, leadership coaching, and real-time feedback—are more likely to attract
and retain Gen Z talent. Learning should be on-demand, digital-first, and deeply embedded in the
workflow.
      3. Purpose-Driven Leadership: Speak Their Language – Gen Z professionals are purpose-driven. They want to work for companies that stand for something
bigger than profit. Leadership training should include emotional intelligence, cultural competence,
and adaptability—skills crucial for managing a diverse, young workforce.
     `,

      ` Upskilling: Your Survival Kit in the Jungle
      The workplace is evolving, and the only way to stay ahead is by continuously learning. Training
and development aren’t just corporate buzzwords—they’re your weapons in this jungle. Whether
it’s through mentorship, e-learning platforms, leadership programs, or skill-based workshops,
investing in yourself gives you the edge to stand out. If your organization isn’t offering upskilling
opportunities, take charge—find online courses, seek out industry events, and build your own
knowledge base.

      Soft Skills are the New Hard Skills
      Gone are the days when technical skills alone could make or break your career. Today, emotional
intelligence, adaptability, leadership, and communication are just as valuable as your degree. In a
world where automation and AI are taking over routine tasks, what will set you apart is your ability
to lead, collaborate, and think critically. Organizations that recognize this shift invest heavily in
soft skills training—and those that don’t risk falling behind.

      Feedback Culture: The Game-Changer for Career Growth
        Gen Z thrives on feedback. We grew up with instant responses, from social media likes to real-
time comments. Yet, many organizations still operate on outdated annual review cycles. If your

workplace isn’t giving you regular feedback, ask for it. Create a culture of continuous learning by
seeking mentorship, requesting project reviews, and using every piece of constructive criticism to
level up.
     `,

      `So, how does organizational psychology fit into all of this? Simple—it's the bridge between what
Gen Z wants and what organizations need to remain competitive.
        1. Understanding Workplace Motivation
        Organizational psychology helps companies understand what truly drives Gen Z employees.
Traditional reward systems (like tenure-based promotions) are losing relevance, and businesses
need psychological insights to create motivation strategies that align with Gen Z’s values—
flexibility, purpose, and meaningful work.
    2. Reshaping Leadership Approaches
Hierarchical leadership is fading. Organizational psychology emphasizes adaptive leadership—
leaders who mentor, coach, and empower employees rather than dictate. By integrating
psychological principles, companies can foster leadership styles that resonate with Gen Z’s need
for autonomy and collaboration.
      3. Mental Health and Well-being in the Workplace
     Gen Z is vocal about mental health, and rightly so. Organizational psychology provides
frameworks to create mentally healthy workplaces, from stress management programs to inclusive
policies that prioritize employee well-being.

      4. Creating a Culture of Belonging
       A major reason for Gen Z’s job-hopping tendencies is a lack of belonging. Organizational
psychology emphasizes psychological safety—a workplace culture where employees feel valued,
heard, and encouraged to express themselves without fear of judgment.`,

      `The future of work is shifting, and companies must evolve their talent strategies. Organizations
that invest in leadership development tailored to Gen Z will build stronger, more resilient teams.
HR leaders must:
      • Reimagine training to be engaging and immersive.
      •Foster an inclusive culture that values Gen Z’s contributions.
      • Develop leaders who can coach, not just command.

      Final Thoughts: Own Your Career Journey
      

     The workplace is shifting, and Gen Z is at the forefront of that change. While organizations must
adapt, individuals also have a role to play in shaping their careers. Whether it’s upskilling,
networking, seeking mentorship, or leveraging workplace psychology, the key to thriving is taking
ownership of your journey.

     Welcome to the jungle—now go and conquer it. 🚀
Are we ready to stop complaining about Gen Z and start building the next generation of
leaders?`
    ],
    imageUrl: "https://i.imgur.com/NuhymtZ.jpeg",
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
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #career
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #leadership
                  </span>
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

export default Genz;