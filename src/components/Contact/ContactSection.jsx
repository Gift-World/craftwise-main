import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill out all fields.");
      return;
    }

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    const recipient = "info@craftwiseacademy.com";

    // Default email app (Apple Mail, Outlook, etc.)
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const openGmail = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    const recipient = "info@craftwiseacademy.com";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");
  };

  const openOutlook = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    const recipient = "info@craftwiseacademy.com";

    const outlookLink = `https://outlook.live.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`;
    window.open(outlookLink, "_blank");
  };

  return (
    <div>
      <div className="min-h-screen bg-orange-900 py-16">
        <motion.section
          ref={sectionRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
          id="contact"
          className="relative overflow-hidden py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/80 text-2xl">
                Get in touch with the CraftWise Academy team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {formError && (
                    <motion.div className="bg-red-500/10 border border-red-500/20 text-red-200 text-center p-3 rounded-lg">
                      <p>{formError}</p>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Email Send Options */}
                  <div className="grid grid-cols-3 gap-4">
                    
                    <button
                      type="button"
                      onClick={openGmail}
                      className="bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-orange-500 transition-all duration-300"
                    >
                      Send Message
                    </button>
                    
                  </div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-white mb-8">
                    Contact Information
                  </h3>

                  {[
                    {
                      icon: FaMapMarkerAlt,
                      title: "Address",
                      content: "Nairobi, Kenya",
                    },
                    {
                      icon: FaPhone,
                      title: "Phone",
                      content: "+254 715 208 322",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email",
                      content: "info@craftwiseacademy.com",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-4 bg-secondary/20 rounded-xl">
                        <item.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/70">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
