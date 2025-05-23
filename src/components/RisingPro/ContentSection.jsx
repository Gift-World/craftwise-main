import { motion } from 'framer-motion';

const ContentSection = ({ title, items, icon }) => {
  return (
    <motion.div 
      className="bg-craftwise-maroon p-6 rounded-lg"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">
          {icon === "/images/education-icon.png" ? (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="white"/>
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <ul className="list-none pl-4">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start mb-3"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
          >
            <span className="text-craftwise-orange mr-3 text-2xl">•</span>
            <span className="text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ContentSection;