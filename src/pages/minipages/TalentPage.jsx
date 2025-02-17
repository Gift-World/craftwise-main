import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const TalentPage = ({ 
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
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
  
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=joy@craftwiseacademy.com&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:joy@craftwiseacademy.com?subject=${subject}&body=${body}`;
  
    // Special link for Android (opens Gmail app directly)
    const gmailIntent = `intent://compose?to=joy@craftwiseacademy.com&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
  
    if (/Android/i.test(navigator.userAgent)) {
      // Try opening Gmail app on Android
      window.location.href = gmailIntent;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Try opening Gmail on iOS using the mailto link
      window.location.href = mailtoLink;
    } else {
      // Try opening Gmail Web on desktop or fallback to mailto
      const newTab = window.open(gmailWebLink, "_blank");
      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          window.location.href = mailtoLink;
        }
      }, 1000);
    }
  
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

        

          <div ref={ref} className="flex flex-col md:flex-row mb-16 gap-8">
  {/* Employers Section */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="bg-orange-500 p-7 w-full md:w-1/2"
  >
    <h2 className="text-3xl text-white font-montserrat font-bold mb-8">
      For Employers: Get Job-Ready Talent with ZERO Hiring Fees
    </h2>
    <h4 className="font-montserrat text-[15px] font-semibold mb-7">
      Hiring the wrong person is costly. What if you could get high-quality, pre-trained professionals ready to deliver from Day 1—at no cost?
    </h4>
    
    <div className="font-montserrat space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={scaleVariants.hover}
          className="flex items-start space-x-4 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="bg-orange-500 p-3 rounded-full">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-black font-semibold text-lg">{feature.title}</h3>
            <p className="text-white">{feature.description}</p>
          </div>
        </motion.div>
      ))}
      <h3 className="font-montserrat font-semibold text-[16px]">
        Secure your access to top-tier talent today!
      </h3>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowForm(true)}
        className="bg-black text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all"
      >
        Get Pre-Vetted Talent
      </motion.button>
    </div>
  </motion.div>

  {/* Job Seekers Section */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="bg-secondary p-7 w-full md:w-1/2"
  >
    <h2 className="text-3xl font-bold text-white font-montserrat mb-8">
      For Job Seekers: Your Shortcut to a High-Paying Job Starts Here
    </h2>
    <h4 className="font-montserrat text-[15px] font-semibold mb-7">
      You’re doing everything right—so why aren’t you getting hired? 
      Most job seekers lack the workplace skills that employers actually want.
    </h4>

    <div className="font-montserrat space-y-4">
      {eligibility.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={scaleVariants.hover}
          className="flex items-center space-x-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <FaCheck className="text-orange-500 flex-shrink-0" />
          <span className="text-white">{item}</span>
        </motion.div>
      ))}
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowForm(true)}
      className="bg-orange-500 text-white px-8 mt-7 py-3 rounded-full hover:bg-orange-600 transform transition-all"
    >
      Get Hired Faster
    </motion.button>
  </motion.div>
</div>



          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="text-center mb-16"
>
  <h2 className="text-3xl font-montserrat font-bold mb-8">Why CraftWise Talent Bridge?</h2>
  <h4 className="font-montserrat p-5">Unlike job boards or traditional recruitment firms, we do more than match resumes.</h4>
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

        
        </div>
       
      </div>
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">The Future of Hiring & Career Success Starts Here</h2>
          <p className="mb-8 max-w-2xl mx-auto">CraftWise Talent Bridge isn't just another job-matching platform—it's a game-changer for businesses and ambitious professionals.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all"
            >
              Get Pre-Vetted Talent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-orange-500 text-white px-8  py-3 rounded-full hover:bg-orange-600 transform transition-all"
            >
              Get Hired Faster
            </motion.button>
          </div>
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

export default TalentPage;