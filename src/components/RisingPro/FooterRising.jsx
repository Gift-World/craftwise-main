import { motion } from 'framer-motion';

import { Link } from "react-router-dom";
const MotionLink = motion(Link);

const FooterRising = ({ applyLink}) => {
  return (
    <motion.div 
      className="py-8 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between bg-white"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <div className="mb-6 md:mb-0">
        <MotionLink 
           to="/rising"
          // target="_blank" 
          rel="noopener noreferrer"
          className="apply-button bg-craftwise-orange text-white font-bold py-3 px-10 rounded-full text-xl inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          APPLY NOW
        </MotionLink>
      </div>
      
     
    </motion.div>
  );
};

export default FooterRising;