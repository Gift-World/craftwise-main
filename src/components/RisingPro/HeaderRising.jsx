import { motion } from 'framer-motion';

const HeaderRising = () => {
  return (
    <motion.header 
      className="flex justify-center pt-8 md:pt-12 px-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center justify-center md:justify-start">
        <div className="logo-container flex items-center">
          <div className="logo mr-4">
            <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 30L120 0H60L80 30Z" fill="#FF7A00"/>
              <path d="M60 0L40 30H0L60 0Z" fill="#FF7A00"/>
              <path d="M80 30L40 30L60 60L80 30Z" fill="#672218"/>
            </svg>
          </div>
          <div className="logo-text">
            <h2 className="text-xl font-montserrat md:text-2xl font-bold text-craftwise-brown mb-0">CRAFTWISE</h2>
            <p className="text-md font-montserrat md:text-lg text-craftwise-brown tracking-wider">ACADEMY</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderRising;