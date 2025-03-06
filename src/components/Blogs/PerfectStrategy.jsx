import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';


const PerfectStrategy = () => {
  const navigate = useNavigate();
  const article = {
    title: "The Myth of Perfect Strategy: Why Execution Matters More!",
    author: "PERIS WAMBUI  |  Head of Strategy @ HFC Kenya | Driving Business Growth with Resource Mobilization",
    date: "March 6, 2025",
    subheadings: [
      "The Flawed Obsession with the ‘Perfect’ Strategy",
      "Execution: The Real MVP 🏆",
      "Why Execution Goes Off the Rails 🚧",
      "Finding the Sweet Spot 🍬 Winning isn’t about having the fanciest plan. It’s about making things happen. Here’s how:",
      "",
    //   "Build Meaningful Relationships",
    //   "Build a Career and Organization That Outlasts You"
    ],
    content: [
      `Let’s be honest 🤷♂ most of us love a good strategy session. It’s like planning a dream vacation: mapping out every detail, imagining how smooth everything will go, picturing the perfect outcome. And then reality hits 😬 you miss your flight, lose your luggage, and end up eating questionable airport sandwiches. That’s what happens when execution doesn’t match strategy.
`,
      
      `Some companies treat strategy like an ancient scroll 📜 sacred, untouchable, and the key to all wisdom. They spend months (or years!) refining it, convinced they’ve cracked the code. But here’s the catch 🤔 no matter how brilliant the plan, if you don’t execute it well, it’s as useful as a GPS with no signal. Markets change, competitors aren’t waiting, and customers? They have the attention span of a goldfish 🐠.Perfection is a fantasy.`,
      
      ` Execution is where the magic happens ✨ A mediocre plan executed with energy beats a flawless plan gathering dust. Look at Nokia and Apple 📱 Nokia had the tech and the talent but fumbled the execution. Apple? They nailed it with a relentless focus on making things work in real life, not just in boardrooms.
`,
      
      `Nobody Got the Memo 📩 If your team doesn’t understand the plan, good luck getting it done.
Leadership in a Bubble - If leaders are too busy strategizing and not dealing with reality, execution falls apart.
Change? No Thanks 🙅♂ Some companies resist change like a cat resists a bath 🐱💦 Adaptability is key!
Set It and Forget It Syndrome ⏳ Execution isn’t a slow cooker 🍲 you have to check, tweak, and adjust constantly.
`,
      
      `Keep strategy simple and flexible (like a good stretch before a workout 🏋♀) 
Hire leaders who know how to bridge the gap between planning and doing 👥 
Make sure your team actually knows what’s expected and give them the power to act 💡 
Track progress and be ready to pivot when needed (because nothing ever goes exactly to plan)
`,
      
      `At the end of the day, strategy is just a fancy word for “what we plan to do.” Execution is actually doing it. So, instead of aiming for the perfect plan, focus on making things happen 🚀 and don’t forget to enjoy the ride! 🎢
`,
      
     
    ],
    imageUrl: "https://i.imgur.com/potnzqb.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers"
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
          <span className="text-orange-600 font-montserrat ">Back to Articles</span>
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
                <span className="text-sm">{article.followers}</span>
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
              <div className="prose lg:prose-xl font-montserrat p-16 text-gray-700 leading-relaxed">
                <p>{article.content[0]}</p>
                
                {article.subheadings.map((subheading, index) => (
                  <div key={index} className="mt-8">
                    <h2 className=" font-montserrat font-bold text-orange-500 mt-4">
                      {subheading}
                    </h2>
                    <p className="mt-4 font-montserrat">{article.content[index + 1]}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="p-6 flex space-x-2 bg-orange-500 text-white  rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                  #StrategyExecution #BusinessGrowth #Leadership #ExecutionMatters #StrategyVsExecution #SuccessMindset #BusinessTips #GetItDone #Innovation #Entrepreneurship
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

export default PerfectStrategy;

