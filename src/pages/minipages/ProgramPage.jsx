import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ProgramPage = ({ 
  title, 
  subtitle,
  title1,
  description,
  backgroundImage, 
  features, 
  tools,
  outcome,
  outcome1,
  duration,
  eligibility 
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Program Interest from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=joy@craftwiseacademy.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
    
    setShowForm(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        className="relative h-[80vh] overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
       <div   
      
  className="inset-0 bg-cover  bg-no-repeat absolute min-h-screen overflow-hidden transform hover:scale-105 transition-transform duration-700"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60" />
</div>

        <div className="relative h-full flex items-center justify-center text-white  pt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.h1 
              className=" font-montserrat  text-4xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className=" font-montserrat font-semibold text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-black font-montserrat text-orange-500 mb-4"
            >
              {title1}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[18px] text-gray-600 font-montserrat  mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>

        

          <div ref={ref} className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-montserrat font-bold mb-8">What You'll Master</h2>
              <div className="font-montserrat space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={scaleVariants.hover}
                    className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-orange-500 p-3 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-orange-500 font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold font-montserrat mb-8">Who Should Apply?</h2>
              <div className="font-montserrat space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={scaleVariants.hover}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="text-center mb-16"
>
  <h2 className="text-3xl font-montserrat font-bold mb-8">Why Choose This Programme?</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
    {tools.map((tool, index) => {
      // Define an array of unique background gradients for each card
      const bgGradients = [
        "bg-gradient-to-r from-orange-500 to-orange-500",
        "bg-gradient-to-r from-orange-500 to-orange-500",
        "bg-gradient-to-r from-orange-500 to-orange-500",
        "bg-gradient-to-r from-orange-500 to-orange-500",
      ];
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 
            ${bgGradients[index % bgGradients.length]} text-white`}
        >
          <p className=" text-white font-montserrat">{tool}</p>
        </motion.div>
      );
    })}
  </div>
</motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl  font-montserrat font-bold mb-4">Program Outcome</h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {outcome1}
            </motion.p>
          </motion.div>
          <div
  className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 text-white shadow-lg p-8 mb-16 hover:shadow-2xl transition-shadow duration-300 rounded-xl"
>
  <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">Program Duration & Format</h3>
  <div className="grid md:grid-cols-2 gap-8">
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-3"
      >
        <span className="text-2xl">📅</span>
        <span className="text-lg font-montserrat font-semibold">{duration.weeks}</span>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-3"
      >
        <span className="text-2xl">🎓</span>
        <span className="text-lg font-montserrat">{duration.format}</span>
      </motion.div>
    </motion.div>
    <motion.div 
      className="space-y-3 font-montserrat"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {duration.components.map((component, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start space-x-2"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <FaCheck className="text-green-300 mt-1 flex-shrink-0" />
          <span>{component}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center font-montserrat space-x-6"
          >
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all"
            >
              Express Interest
            </motion.button>
            <motion.a 
              href="https://0au0uzstrck.typeform.com/to/EcsAcnpt" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform transition-all">
                Apply Now
              </button>
            </motion.a>
            
          </motion.div>
          <motion.p 
              variants={itemVariants}
              className="text-xl text-black p-6 mx-auto"
            >
              {outcome}
            </motion.p>
        </div>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-4">Express Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <motion.button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgramPage;