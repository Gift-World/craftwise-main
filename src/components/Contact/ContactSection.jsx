import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Brochures from "../Brochure/Brochures";
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
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
    );
    const recipient = "info@craftwiseacademy.com";

    // Default email app (Apple Mail, Outlook, etc.)
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const openGmail = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
    );
    const recipient = "info@craftwiseacademy.com";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");
  };

  const openOutlook = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`,
    );
    const recipient = "info@craftwiseacademy.com";

    const outlookLink = `https://outlook.live.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`;
    window.open(outlookLink, "_blank");
  };

  return (
    <div>
      <div className="min-h-screen bg-orange-900 py-16">
        <div className="mt-4 flex justify-start px-4 md:justify-start">
          {/* This div will be aligned to the far right */}
          <div className="rounded-lg shadow-md">
            <Brochures />
          </div>
        </div>
        <section
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
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">Contact Us</h2>
              <p className="text-2xl text-white/80">
                Get in touch with the CraftWise Academy team
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-2xl bg-white/10 p-8 shadow-xl backdrop-blur-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {formError && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-red-200">
                      <p>{formError}</p>
                    </div>
                  )}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/90">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/90">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/90">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Email Send Options */}
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={openGmail}
                      className="rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl bg-white/10 p-8 shadow-xl backdrop-blur-lg">
                <div className="space-y-8">
                  <h3 className="mb-8 text-2xl font-semibold text-white">
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
                      <div className="rounded-xl bg-secondary/20 p-4">
                        <item.icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-medium text-white">
                          {item.title}
                        </h4>
                        <p className="text-white/70">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
