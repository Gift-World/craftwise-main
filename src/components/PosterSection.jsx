import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PosterSection = () => {
  const navigate = useNavigate();
 
  const poster = {
    title: "Your First 100 Days in a New Role",
    description: `Your first 100 days in a new role set the foundation for your long-term success. 
    But how do you navigate expectations, build credibility, and make an impact—without feeling overwhelmed? 
    Join this expert-led, interactive Masterclass to learn more. Spots are limited!`,
    link: "https://zoom.us/webinar/register/WN_bZKioxAzTLmGMLNomZxCBA",
    imageUrl: "https://i.imgur.com/eD7f1dz.jpeg", // Replace with actual image URL
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6 flex flex-col items-center text-center">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={poster.imageUrl}
            alt={poster.title}
            className="w-full max-w-[600px] rounded-lg shadow-lg mb-6"
          />
          
          <h2 className="text-3xl font-bold text-gray-800">{poster.title}</h2>
          <p className="text-gray-600 mt-4 leading-relaxed font-montserrat">{poster.description}</p>
          
          <motion.a
            href={poster.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300"
          >
            👉 Register Now
          </motion.a>
        </div>
      </motion.article>
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
    </div>
  );
};

export default PosterSection;
