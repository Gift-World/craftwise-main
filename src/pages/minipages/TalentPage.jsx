import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Brochures from "../../components/Brochure/Brochures";

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
  eligibility,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Program Interest from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message: ${formData.message}`,
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

 

  

  

  return (
    <div className="min-h-screen">
      <div
        className="relative h-[80vh] overflow-hidden"
        
      >
        <div
          className="absolute inset-0 min-h-screen transform overflow-hidden bg-cover bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <div className="relative flex h-full items-center justify-center pt-32 text-white">
          <div
           
            className="max-w-4xl text-center"
          >
            <h1
              className="mb-4 font-montserrat text-4xl font-bold"
              
            >
              {title}
            </h1>
            <p
              className="font-montserrat text-2xl font-semibold"
             
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-start px-4 md:justify-start">
        {/* This div will be aligned to the far right */}
        <div className="rounded-lg shadow-md">
          <Brochures />
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div
            
            className="mb-16 text-center"
          >
            <h2
              
              className="mb-4 font-montserrat text-3xl font-black text-orange-500"
            >
              {title1}
            </h2>
            <p
            
              className="mx-auto font-montserrat text-[18px] text-gray-600"
            >
              {description}
            </p>
          </div>

          <div ref={ref} className="mb-16 flex flex-col gap-8 md:flex-row">
            {/* Employers Section */}
            <div
              
              className="w-full p-7 md:w-1/2"
            >
              <h2 className="mb-8 font-montserrat text-3xl font-bold text-black">
                For Employers:
              </h2>
              <h3 className="font-montserrat text-[20px] font-bold text-orange-500">
                {" "}
                Get Job-Ready Talent with ZERO Hiring Fees
              </h3>
              <h4 className="mb-7 font-montserrat text-[15px] font-semibold text-gray-600">
                Hiring the wrong person is costly. What if you could get
                high-quality, pre-trained professionals ready to deliver from
                Day 1—at no cost?
              </h4>

              <div className="space-y-6 font-montserrat">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    
                    className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="rounded-full bg-orange-500 p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-orange-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
                <h3 className="font-montserrat text-[16px] font-semibold text-black">
                  Secure your access to top-tier talent today!
                </h3>
                <button
                  
                  onClick={() => setShowForm(true)}
                  className="transform rounded-full bg-orange-500 px-8 py-3 text-white transition-all hover:bg-orange-600"
                >
                  Get Pre-Vetted Talent
                </button>
              </div>
            </div>

            {/* Job Seekers Section */}
            <div
              
              className="w-full p-7 md:w-1/2"
            >
              <h2 className="mb-8 font-montserrat text-3xl font-bold text-black">
                For Job Seekers:
              </h2>
              <h3 className="font-montserrat text-[20px] font-bold text-orange-500">
                {" "}
                Your Shortcut to a High-Paying Job Starts Here
              </h3>
              <h4 className="mb-7 font-montserrat text-[15px] font-semibold text-gray-600">
                You’re doing everything right—so why aren’t you getting hired?
                Most job seekers lack the workplace skills that employers
                actually want.
              </h4>

              <div className="space-y-4 font-montserrat">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    
                    className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <FaCheck className="flex-shrink-0 text-orange-500" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <button
                
                onClick={() => setShowForm(true)}
                className="mt-7 transform rounded-full bg-orange-500 px-8 py-3 text-white transition-all hover:bg-orange-600"
              >
                Get Hired Faster
              </button>
            </div>
          </div>

          <div
            
            className="mb-16 text-center"
          >
            <h2 className="mb-8 font-montserrat text-3xl font-bold">
              Why CraftWise Talent Bridge?
            </h2>
            <h4 className="p-5 font-montserrat">
              Unlike job boards or traditional recruitment firms, we do more
              than match resumes.
            </h4>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool, index) => {
                // Define an array of unique background gradients for each card
                const bgGradients = [
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                ];
                return (
                  <div
                    key={index}
                    
                    className={`rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${bgGradients[index % bgGradients.length]} text-white`}
                  >
                    <p className="font-montserrat text-white">{tool}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">
            The Future of Hiring & Career Success Starts Here
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-montserrat">
            CraftWise Talent Bridge isn't just another job-matching
            platform—it's a game-changer for businesses and ambitious
            professionals.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button
              
              onClick={() => setShowForm(true)}
              className="transform rounded-full bg-orange-500 px-8 py-3 text-white transition-all hover:bg-orange-600"
            >
              Get Pre-Vetted Talent
            </button>
            <button
             
              onClick={() => setShowForm(true)}
              className="transform rounded-full bg-orange-500 px-8 py-3 text-white transition-all hover:bg-orange-600"
            >
              Get Hired Faster
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div
          
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <div
            
            className="w-full max-w-md rounded-lg bg-white p-8"
          >
            <h3 className="mb-4 text-2xl font-bold">Express Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
                  
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentPage;
