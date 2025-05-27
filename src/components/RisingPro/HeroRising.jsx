import { motion } from 'framer-motion';

const HeroRising = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center pt-6 md:pt-10 px-4 md:px-10 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <img 
            src="/images/popup.avif" 
            alt="Young professionals smiling" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1 
          className="text-4xl md:text-5xl font-montserrat lg:text-6xl font-bold text-craftwise-orange mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          RISING PROFESSIONALS PROGRAMME
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-6">
          <motion.div 
            className="bg-craftwise-maroon text-white font-semibold py-2 px-6 rounded-full text-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            6 WEEKS
          </motion.div>
          
          <motion.div 
            className="bg-craftwise-orange text-white font-semibold py-2 px-6 rounded-full text-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            HYBRID LEARNING
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroRising;