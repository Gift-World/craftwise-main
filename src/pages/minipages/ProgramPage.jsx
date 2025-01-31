import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

// Google Analytics Tracking Function
const trackEvent = (eventName, eventLabel) => {
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: "User Interaction",
      event_label: eventLabel,
    });
  }
};

const ProgramPage = ({ 
  title, 
  subtitle,
  title1,
  description,
  backgroundImage, 
  features, 
  tools,
  outcome,
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
    
    // Google Analytics Tracking
    trackEvent("express_interest", "User clicked Express Interest");

    const subject = encodeURIComponent(`Program Interest from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message: ${formData.message}`
    );
    const mailtoLink = `mailto:charlesgiftangila@gmail.com?subject=${subject}&body=${body}&from=${formData.email}`;
    window.location.href = mailtoLink;
    setShowForm(false);
  };

  return (
    <div className="min-h-screen">
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C083LV0PVF"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C083LV0PVF'); 
        `}
      </script>

      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-montserrat text-4xl font-bold mb-4">{title}</h1>
            <p className="font-montserrat font-semibold text-2xl">{subtitle}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={ref} className="text-center mb-16">
            <h2 className="text-3xl font-black font-montserrat text-gray-800 mb-4">{title1}</h2>
            <p className="text-[18px] text-gray-600 font-montserrat mx-auto">{description}</p>
          </div>

          {/* Buttons with Google Analytics Tracking */}
          <div className="flex justify-center font-montserrat space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowForm(true);
                trackEvent("express_interest", "User clicked Express Interest");
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all"
            >
              Express Interest
            </motion.button>

            <motion.a 
              href="https://0au0uzstrck.typeform.com/to/EcsAcnpt" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent("apply_now", "User clicked Apply Now")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform transition-all">
                Apply Now
              </button>
            </motion.a>
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
              <div className="flex justify-end space-x-4">
                <motion.button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
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
