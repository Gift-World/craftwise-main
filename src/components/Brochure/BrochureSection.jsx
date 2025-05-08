import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function BrochureSection({ article, index }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(article.path);
  };

  return (
   
      
        
        <motion.button
          onClick={handleReadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center gap-2 px-5 py-3 text-white font-bold text-sm bg-accent border border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out "
        >
          Download our programs Brochure Here
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
  );
}

export default BrochureSection;